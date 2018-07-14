using System;
using System.Linq;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http;
using System.Web.Http.Controllers;
using Blog.Server.Contracts.Requests.CmsUsers;
using Blog.Server.Exceptions.Authorization;
using Blog.Server.Services.Abstractions;
using BlogAPI.Authorization;
using BlogAPI.Authorization.Payload;

namespace BlogAPI.Controllers.Base
{
    public class CmsUserBaseController : ApiController
    {
        private readonly IAccessTokenService<CmsUserAccessTokenPayload> _accessTokenService;
        private readonly ICmsUserManagementService _cmsUserManagementService;

        public CmsUserBaseController(IAccessTokenService<CmsUserAccessTokenPayload> accessTokenService,
            ICmsUserManagementService cmsUserManagementService)
        {
            _accessTokenService = accessTokenService;
            _cmsUserManagementService = cmsUserManagementService;
        }

        public Guid UserId { get; set; }

        public override async Task<HttpResponseMessage> ExecuteAsync(HttpControllerContext controllerContext,
            CancellationToken cancellationToken)
        {
            if (!controllerContext.Request.Headers.TryGetValues("Authorization", out var tokens))
            {
                throw new MissedAccessTokenException();
            }

            var accessToken = tokens.First();

            var payload = _accessTokenService.GetPayload<CmsUserAccessTokenPayload>(accessToken);

            var refreshTokenResponse = await _cmsUserManagementService.GetRefreshTokenById(new GetCmsUserRefreshTokenByIdRequest
            {
                Id = payload.Id
            });

            _accessTokenService.Verify(accessToken, refreshTokenResponse.RefreshToken);

            UserId = payload.Id;

            return await base.ExecuteAsync(controllerContext, cancellationToken);
        }
    }
}