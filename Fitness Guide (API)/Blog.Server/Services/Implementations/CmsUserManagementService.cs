using System.Threading.Tasks;
using Autofac;
using Blog.Server.Contracts.Requests.CmsUsers;
using Blog.Server.Contracts.Responses.CmsUsers;
using Blog.Server.Repositories.Abstractions;
using Blog.Server.Services.Abstractions;

namespace Blog.Server.Services.Implementations
{
    public class CmsUserManagementService : ManagementServiceBase, ICmsUserManagementService
    {
        private readonly ICmsUserRepository _cmsUserRepository;

        public CmsUserManagementService(ILifetimeScope lifetimeScope, ICmsUserRepository cmsUserRepository) : base(lifetimeScope)
        {
            _cmsUserRepository = cmsUserRepository;
        }

        public async Task<GetCmsUserRefreshTokenResponse> GetRefreshTokenById(GetCmsUserRefreshTokenByIdRequest request)
        {
            var getCmsUserRefreshTokenResponse = await ProcessRequest(request, _cmsUserRepository.GetRefreshTokenById);

            return getCmsUserRefreshTokenResponse;
        }

        public async Task<GetCmsUserIdResponse> GetIdByCredentials(GetCmsUserIdByCredentialsRequest request)
        {
            var userIdResponse = await ProcessRequest(request, _cmsUserRepository.GetIdByCredentials);

            return userIdResponse;
        }

        public async Task UpdateRefreshToken(UpdateCmsUserRefreshTokenRequest request)
        {
            await ProcessRequest(request, _cmsUserRepository.UpdateRefreshToken);
        }

        public async Task<GetCmsUserIdResponse> GetIdByRefreshToken(GetCmsUserIdByRefreshTokenRequest request)
        {
            var getUserIdResponse = await ProcessRequest(request, _cmsUserRepository.GetIdByRefreshToken);

            return getUserIdResponse;
        }
    }
}