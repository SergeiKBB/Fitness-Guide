using System.Threading.Tasks;
using Autofac;
using Blog.Server.Contracts.Requests.Users;
using Blog.Server.Contracts.Responses.Users;
using Blog.Server.Repositories.Abstractions;
using Blog.Server.Services.Abstractions;

namespace Blog.Server.Services.Implementations
{
    public class UserManagementService : ManagementServiceBase, IUserManagementService
    {
        private readonly IUserRepository _userRepository;

        public UserManagementService(ILifetimeScope lifetimeScope, IUserRepository userRepository) : base(lifetimeScope)
        {
            _userRepository = userRepository;
        }

        public async Task CreateUser(CreateUserRequest request)
        {
            await ProcessRequest(request, _userRepository.CreateUser);
        }

        public async Task<GetUserRefreshTokenResponse> GetRefreshTokenById(GetUserRefreshTokenByIdRequest request)
        {
            var getUserRefreshTokenResponse = await ProcessRequest(request, _userRepository.GetRefreshTokenById);

            return getUserRefreshTokenResponse;
        }

        public async Task<GetUserIdResponse> GetIdByCredentials(GetUserIdByCredentialsRequest request)
        {
            var userIdResponse = await ProcessRequest(request, _userRepository.GetIdByCredentials);

            return userIdResponse;
        }

        public async Task UpdateRefreshToken(UpdateUserRefreshTokenRequest request)
        {
            await ProcessRequest(request, _userRepository.UpdateRefreshToken);
        }

        public async Task<GetUserIdResponse> GetIdByRefreshToken(GetUserIdByRefreshTokenRequest request)
        {
            var getUserIdResponse = await ProcessRequest(request, _userRepository.GetIdByRefreshToken);

            return getUserIdResponse;
        }
    }
}