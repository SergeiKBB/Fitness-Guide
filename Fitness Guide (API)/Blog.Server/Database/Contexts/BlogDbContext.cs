using System.Collections.Generic;
using System.Data;
using System.Data.Entity;
using System.Threading.Tasks;
using Blog.Server.Database.Entities;

namespace Blog.Server.Database.Contexts
{
    public class BlogDbContext : DbContext, IBlogDbContext
    {
        public IDbConnection Connection => Database.Connection;

        public void AddRange<TEntity>(IEnumerable<TEntity> entities) where TEntity : class
        {
            Set<TEntity>().AddRange(entities);
        }

        public void RemoveRange<TEntity>(IEnumerable<TEntity> entities) where TEntity : class
        {
            Set<TEntity>().RemoveRange(entities);
        }

        public async Task<int> SaveChangesAsync()
        {
            return await base.SaveChangesAsync();
        }

        public IDbSet<User> Users { get; set; }
        public IDbSet<Post> Posts { get; set; }
        public IDbSet<Comment> Comments { get; set; }
        public IDbSet<CmsUser> CmsUsers { get; set; }
        public IDbSet<Category> Categories { get; set; }
    }
}