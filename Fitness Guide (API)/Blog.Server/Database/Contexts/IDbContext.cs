using System.Collections.Generic;
using System.Data;
using System.Threading.Tasks;

namespace Blog.Server.Database.Contexts
{
    public interface IDbContext
    {
        IDbConnection Connection { get; }

        void AddRange<TEntity>(IEnumerable<TEntity> entities) where TEntity : class;

        void RemoveRange<TEntity>(IEnumerable<TEntity> entities) where TEntity : class;

        Task<int> SaveChangesAsync();
    }
}