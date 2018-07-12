using Blog.Server.Database.Contexts;

namespace Blog.Server.Repositories.Abstractions
{
    public abstract class RepositoryBase
    {
        protected readonly IBlogDbContext DbContext;

        protected RepositoryBase(IBlogDbContext dbContext)
        {
            DbContext = dbContext;
        }
    }
}