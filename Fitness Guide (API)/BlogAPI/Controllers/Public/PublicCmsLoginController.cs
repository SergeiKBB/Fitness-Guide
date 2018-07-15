using System.Threading.Tasks;
using System.Web.Http;
using Blog.Server.Contracts.Requests.CmsUsers;
using Blog.Server.Services.Abstractions;
using Blog.Server.Services.Abstractions.Hashing;
using BlogAPI.Authorization;
using BlogAPI.Authorization.Payload;
using BlogAPI.Models;
using BlogAPI.Models.Login;

namespace BlogAPI.Controllers.Public
{
    [RoutePrefix("api/public/cms-login")]
    public class PublicCmsLoginController : ApiController
    {
        private readonly ISha512Service _sha512Service;
        private readonly IRandomStringService _randomStringService;
        private readonly IAccessTokenService<CmsUserAccessTokenPayload> _accessTokenService;
        private readonly ICmsUserManagementService _cmsUserManagementService;

        public PublicCmsLoginController(ISha512Service sha512Service, IRandomStringService randomStringService,
            IAccessTokenService<CmsUserAccessTokenPayload> accessTokenService,
            ICmsUserManagementService cmsUserManagementService)
        {
            _sha512Service = sha512Service;
            _randomStringService = randomStringService;
            _accessTokenService = accessTokenService;
            _cmsUserManagementService = cmsUserManagementService;
        }

        [HttpPost]
        [Route]
        public async Task<LoginResponseModel> LoginUser(LoginRequestModel model)
        {
            var getUserIdByCredentialsRequest = new GetCmsUserIdByCredentialsRequest
            {
                Email = model.Email,
                Password = _sha512Service.GetBase64Hash(model.Password)
            };

            var userIdResponse = await _cmsUserManagementService.GetIdByCredentials(getUserIdByCredentialsRequest);

            var randomString = _randomStringService.GetRandomString(128);

            var accessToken = _accessTokenService.Create(new UserAccessTokenPayload
            {
                Id = userIdResponse.Id
            }, randomString);

            await _cmsUserManagementService.UpdateRefreshToken(new UpdateCmsUserRefreshTokenRequest
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
        public async Task<AccessTokenResponseModel> RefreshToken(GetCmsUserIdByRefreshTokenRequest request)
        {
            var getUserIdResponse = await _cmsUserManagementService.GetIdByRefreshToken(request);

            var accessToken = _accessTokenService.Create(new CmsUserAccessTokenPayload
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