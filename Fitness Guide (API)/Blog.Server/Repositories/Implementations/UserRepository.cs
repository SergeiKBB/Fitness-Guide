using System.Data.Entity;
using System.Threading.Tasks;
using Blog.Server.Contracts.Requests.Users;
using Blog.Server.Contracts.Responses.Users;
using Blog.Server.Database.Contexts;
using Blog.Server.Database.Entities;
using Blog.Server.Exceptions.Base;
using Blog.Server.Repositories.Abstractions;

namespace Blog.Server.Repositories.Implementations
{
    public class UserRepository : RepositoryBase, IUserRepository
    {
        public UserRepository(IBlogDbContext dbContext) : base(dbContext)
        {
        }

        public async Task CreateUser(CreateUserRequest request)
        {
            var user = new User
            {
                FirstName = request.FirstName,
                LastName = request.LastName,
                Email = request.Email,
                Password = request.Password
            };

            DbContext.Users.Add(user);

            await DbContext.SaveChangesAsync();
        }

        public async Task<GetUserRefreshTokenResponse> GetRefreshTokenById(GetUserRefreshTokenByIdRequest request)
        {
            var user = await DbContext.Users.FirstOrDefaultAsync(u => u.Id == request.Id);

            if (user == null)
            {
                throw new EntityNotFoundException<User>();
            }

            return new GetUserRefreshTokenResponse
            {
                RefreshToken = user.RefreshToken
            };
        }

        public async Task<GetUserIdResponse> GetIdByCredentials(GetUserIdByCredentialsRequest request)
        {
            var user = await DbContext.Users.FirstOrDefaultAsync(u =>
                u.Email == request.Email && u.Password == request.Password);

            if (user == null)
            {
                throw new EntityNotFoundException<User>();
            }

            return new GetUserIdResponse
            {
                Id = user.Id
            };
        }

        public async Task UpdateRefreshToken(UpdateUserRefreshTokenRequest request)
        {
            var user = await DbContext.Users.FirstOrDefaultAsync(u => u.Id == request.Id);

            if (user == null)
            {
                throw new EntityNotFoundException<User>();
            }

            user.RefreshToken = request.RefreshToken;

            await DbContext.SaveChangesAsync();
        }

        public async Task<GetUserIdResponse> GetIdByRefreshToken(GetUserIdByRefreshTokenRequest request)
        {
            var user = await DbContext.Users.FirstOrDefaultAsync(u => u.RefreshToken == request.RefreshToken);

            if (user == null)
            {
                throw new EntityNotFoundException<User>();
            }

            return new GetUserIdResponse
            {
                Id = user.Id
            };
        }
    }
}