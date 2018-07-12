using System.Threading.Tasks;
using Blog.Server.Contracts.Requests.Users;
using Blog.Server.Contracts.Responses.Users;

namespace Blog.Server.Services.Abstractions
{
    public interface IUserManagementService : IManagementService
    {
        Task CreateUser(CreateUserRequest request);
        Task<GetUserRefreshTokenResponse> GetRefreshTokenById(GetUserRefreshTokenByIdRequest request);
        Task<GetUserIdResponse> GetIdByCredentials(GetUserIdByCredentialsRequest request);
        Task UpdateRefreshToken(UpdateUserRefreshTokenRequest request);
        Task<GetUserIdResponse> GetIdByRefreshToken(GetUserIdByRefreshTokenRequest request);
    }
}