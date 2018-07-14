using System.Data.Entity;
using System.Threading.Tasks;
using Blog.Server.Contracts.Requests.CmsUsers;
using Blog.Server.Contracts.Responses.CmsUsers;
using Blog.Server.Database.Contexts;
using Blog.Server.Database.Entities;
using Blog.Server.Exceptions.Base;
using Blog.Server.Repositories.Abstractions;

namespace Blog.Server.Repositories.Implementations
{
    public class CmsUserRepository : RepositoryBase, ICmsUserRepository
    {
        public CmsUserRepository(IBlogDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<GetCmsUserRefreshTokenResponse> GetRefreshTokenById(GetCmsUserRefreshTokenByIdRequest request)
        {
            var cmsUser = await DbContext.CmsUsers.FirstOrDefaultAsync(u => u.Id == request.Id);

            if (cmsUser == null)
            {
                throw new EntityNotFoundException<CmsUser>();
            }

            return new GetCmsUserRefreshTokenResponse
            {
                RefreshToken = cmsUser.RefreshToken
            };
        }

        public async Task<GetCmsUserIdResponse> GetIdByCredentials(GetCmsUserIdByCredentialsRequest request)
        {
            var user = await DbContext.CmsUsers.FirstOrDefaultAsync(u =>
                u.Email == request.Email && u.Password == request.Password);

            if (user == null)
            {
                throw new EntityNotFoundException<User>();
            }

            return new GetCmsUserIdResponse
            {
                Id = user.Id
            };
        }

        public async Task UpdateRefreshToken(UpdateCmsUserRefreshTokenRequest request)
        {
            var user = await DbContext.CmsUsers.FirstOrDefaultAsync(u => u.Id == request.Id);

            if (user == null)
            {
                throw new EntityNotFoundException<User>();
            }

            user.RefreshToken = request.RefreshToken;

            await DbContext.SaveChangesAsync();
        }

        public async Task<GetCmsUserIdResponse> GetIdByRefreshToken(GetCmsUserIdByRefreshTokenRequest request)
        {
            var user = await DbContext.CmsUsers.FirstOrDefaultAsync(u => u.RefreshToken == request.RefreshToken);

            if (user == null)
            {
                throw new EntityNotFoundException<User>();
            }

            return new GetCmsUserIdResponse
            {
                Id = user.Id
            };
        }
    }
}