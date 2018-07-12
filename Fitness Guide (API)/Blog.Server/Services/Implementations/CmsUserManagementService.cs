using System.Threading.Tasks;
using Blog.Server.Contracts.Requests.CmsUser;
using Blog.Server.Contracts.Requests.CmsUsers;
using Blog.Server.Contracts.Responses.CmsUsers;
using Blog.Server.Repositories.Abstractions;
using Blog.Server.Services.Abstractions;

namespace Blog.Server.Services.Implementations
{
    public class CmsUserManagementService : ICmsUserManagementService
    {
        private readonly ICmsUserRepository _cmsUserRepository;

        public CmsUserManagementService(ICmsUserRepository cmsUserRepository)
        {
            _cmsUserRepository = cmsUserRepository;
        }

        public async Task<GetCmsUserRefreshTokenResponse> GetRefreshTokenById(GetCmsUserRefreshTokenByIdRequest request)
        {
            var getCmsUserRefreshTokenResponse = await _cmsUserRepository.GetRefreshTokenById(request);

            return getCmsUserRefreshTokenResponse;
        }

        public async Task<GetCmsUserIdResponse> GetIdByCredentials(GetCmsUserIdByCredentialsRequest request)
        {
            var userIdResponse = await _cmsUserRepository.GetIdByCredentials(request);

            return userIdResponse;
        }

        public async Task UpdateRefreshToken(UpdateCmsUserRefreshTokenRequest request)
        {
            await _cmsUserRepository.UpdateRefreshToken(request);
        }

        public async Task<GetCmsUserIdResponse> GetIdByRefreshToken(GetCmsUserIdByRefreshTokenRequest request)
        {
            var getUserIdResponse = await _cmsUserRepository.GetIdByRefreshToken(request);

            return getUserIdResponse;
        }
    }
}