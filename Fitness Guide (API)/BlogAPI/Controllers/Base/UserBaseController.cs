using System;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Controllers;
using Blog.Server.Contracts.Requests.Users;
using Blog.Server.Exceptions.Authorization;
using Blog.Server.Services.Abstractions;
using BlogAPI.Authorization;
using BlogAPI.Authorization.Payload;

namespace BlogAPI.Controllers.Base
{
    public abstract class UserBaseController : ApiController
    {
        private readonly IAccessTokenService<UserAccessTokenPayload> _accessTokenService;
        private readonly IUserManagementService _userManagementService;

        protected UserBaseController(IAccessTokenService<UserAccessTokenPayload> accessTokenService,
            IUserManagementService userManagementService)
        {
            _accessTokenService = accessTokenService;
            _userManagementService = userManagementService;
        }

        protected Guid UserId { get; set; }

        public override async Task<HttpResponseMessage> ExecuteAsync(HttpControllerContext controllerContext,
            CancellationToken cancellationToken)
        {
            if (!controllerContext.Request.Headers.TryGetValues("Authorization", out var tokens))
            {
                throw new MissedAccessTokenException();
            }

            var accessToken = tokens.First();

            var payload = _accessTokenService.GetPayload<UserAccessTokenPayload>(accessToken);

            var refreshTokenResponse = await _userManagementService.GetRefreshTokenById(new GetUserRefreshTokenByIdRequest
            {
                Id = payload.Id
            });

            _accessTokenService.Verify(accessToken, refreshTokenResponse.RefreshToken);

            UserId = payload.Id;

            return await base.ExecuteAsync(controllerContext, cancellationToken);
        }
    }
}