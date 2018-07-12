using System.Threading.Tasks;
using Blog.Server.Contracts.Requests.Users;
using Blog.Server.Contracts.Responses.Users;
using Blog.Server.Repositories.Abstractions;
using Blog.Server.Services.Abstractions;

namespace Blog.Server.Services.Implementations
{
    public class UserManagementService : IUserManagementService
    {
        private readonly IUserRepository _userRepository;

        public UserManagementService(IUserRepository userRepository)
        {
            _userRepository = userRepository;
        }

        public async Task CreateUser(CreateUserRequest request)
        {
            await _userRepository.CreateUser(request);
        }

        public async Task<GetUserRefreshTokenResponse> GetRefreshTokenById(GetUserRefreshTokenByIdRequest request)
        {
            var getUserRefreshTokenResponse = await _userRepository.GetRefreshTokenById(request);

            return getUserRefreshTokenResponse;
        }

        public async Task<GetUserIdResponse> GetIdByCredentials(GetUserIdByCredentialsRequest request)
        {
            var userIdResponse = await _userRepository.GetIdByCredentials(request);

            return userIdResponse;
        }

        public async Task UpdateRefreshToken(UpdateUserRefreshTokenRequest request)
        {
            await _userRepository.UpdateRefreshToken(request);
        }

        public async Task<GetUserIdResponse> GetIdByRefreshToken(GetUserIdByRefreshTokenRequest request)
        {
            var getUserIdResponse = await _userRepository.GetIdByRefreshToken(request);

            return getUserIdResponse;
        }
    }
}