using System;
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

        public override async Task<int> SaveChangesAsync()
        {
            foreach (var dbEntityEntry in ChangeTracker.Entries())
            {
                if (!(dbEntityEntry.Entity is EntityBase entityBase))
                {
                    continue;
                }

                if ((dbEntityEntry.State & EntityState.Added) != 0)
                {
                    entityBase.CreationDate = DateTime.UtcNow;
                    entityBase.UpdateDate = DateTime.UtcNow;
                }

                if ((dbEntityEntry.State & EntityState.Modified) != 0)
                {
                    entityBase.UpdateDate = DateTime.UtcNow;
                }
            }

            return await base.SaveChangesAsync();
        }

        public IDbSet<User> Users { get; set; }
        public IDbSet<Post> Posts { get; set; }
        public IDbSet<Comment> Comments { get; set; }
        public IDbSet<CmsUser> CmsUsers { get; set; }
        public IDbSet<Category> Categories { get; set; }
    }
}