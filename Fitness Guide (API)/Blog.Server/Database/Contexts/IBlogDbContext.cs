using System.Data.Entity;
using Blog.Server.Database.Entities;
using Blog.Server.Database.Entities.Images;

namespace Blog.Server.Database.Contexts
{
    public interface IBlogDbContext : IDbContext
    {
        IDbSet<User> Users { get; }
        IDbSet<Post> Posts { get; }
        IDbSet<Comment> Comments { get; }
        IDbSet<CmsUser> CmsUsers { get; }
        IDbSet<Category> Categories { get; }
        IDbSet<Image> Images { get; }
        IDbSet<ImageTransform> ImageTransforms { get; }
    }
}