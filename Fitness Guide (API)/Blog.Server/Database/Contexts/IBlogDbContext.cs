using System.Data.Entity;
using Blog.Server.Database.Entities;

namespace Blog.Server.Database.Contexts
{
    public interface IBlogDbContext : IDbContext
    {
        IDbSet<User> Users { get; set; }
        IDbSet<Post> Posts { get; set; }
        IDbSet<Comment> Comments { get; set; }
        IDbSet<CmsUser> CmsUsers { get; set; }
        IDbSet<Category> Categories { get; set; }
    }
}