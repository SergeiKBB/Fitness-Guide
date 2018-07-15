using System;
using System.Threading.Tasks;
using System.Web.Http;
using Blog.Server.Contracts.Requests.Users;
using Blog.Server.Services.Abstractions;
using Blog.Server.Services.Abstractions.Hashing;
using BlogAPI.Authorization;
using BlogAPI.Authorization.Payload;
using BlogAPI.Models;
using BlogAPI.Models.Login;

namespace BlogAPI.Controllers
{
    [RoutePrefix("api/public/login")]
    public class PublicLoginController : ApiController
    {
        private readonly ISha512Service _sha512Service;
        private readonly IRandomStringService _randomStringService;
        private readonly IAccessTokenService<UserAccessTokenPayload> _accessTokenService;
        private readonly IUserManagementService _userManagementService;

        public PublicLoginController(ISha512Service sha512Service, IUserManagementService userManagementService,
            IRandomStringService randomStringService, IAccessTokenService<UserAccessTokenPayload> accessTokenService)
        {
            _sha512Service = sha512Service;
            _userManagementService = userManagementService;
            _randomStringService = randomStringService;
            _accessTokenService = accessTokenService;
        }

        [HttpPost]
        [Route]
        public async Task<LoginResponseModel> LoginUser(LoginRequestModel model)
        {
            var getUserIdByCredentialsRequest = new GetUserIdByCredentialsRequest
            {
                Email = model.Email,
                Password = _sha512Service.GetBase64Hash(model.Password)
            };

            var userIdResponse = await _userManagementService.GetIdByCredentials(getUserIdByCredentialsRequest);

            var randomString = _randomStringService.GetRandomString(128);

            var accessToken = _accessTokenService.Create(new UserAccessTokenPayload
            {
                Id = userIdResponse.Id
            }, randomString);

            await _userManagementService.UpdateRefreshToken(new UpdateUserRefreshTokenRequest
            {
                Id = userIdResponse.Id,
                RefreshToken = randomString
            });

            return new LoginResponseModel
            {
                RefreshToken = randomString,
                AccessToken = accessToken
            };
        }

        [HttpPost]
        [Route("refresh-token")]
        public async Task<AccessTokenResponseModel> RefreshToken(GetUserIdByRefreshTokenRequest request)
        {
            var getUserIdResponse = await _userManagementService.GetIdByRefreshToken(request);

            var accessToken = _accessTokenService.Create(new UserAccessTokenPayload
            {
                Id = getUserIdResponse.Id
            }, request.RefreshToken);

            return new AccessTokenResponseModel
            {
                AccessToken = accessToken
            };
        }
    }
}