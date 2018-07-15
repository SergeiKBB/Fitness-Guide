using System;
using System.Collections.Generic;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using Blog.Server.Contracts.Requests.Posts;
using Blog.Server.Contracts.Responses.Posts;
using Blog.Server.Database.Contexts;
using Blog.Server.Database.Entities;
using Blog.Server.Exceptions.Base;
using Blog.Server.Repositories.Abstractions;

namespace Blog.Server.Repositories.Implementations
{
    public class PostsRepository : RepositoryBase, IPostsRepository
    {
        public PostsRepository(IBlogDbContext dbContext) : base(dbContext)
        {
        }

        public async Task CreatePost(CreatePostRequest request)
        {
            var requestCategoriesIds = request.CategoriesIds ?? new List<Guid>();

            var random = new Random();

            var post = new Post
            {
                AuthorId = request.AuthorId,
                Title = request.Title,
                Description = request.Description,
                ViewsCount = random.Next(100),
                Categories = DbContext.Categories.Where(c => requestCategoriesIds.Contains(c.Id)).ToList()
            };

            DbContext.Posts.Add(post);

            await DbContext.SaveChangesAsync();
        }

        public async Task UpdatePost(UpdatePostRequest request)
        {
            var post = await DbContext.Posts
                .Include(p => p.Categories)
                .FirstOrDefaultAsync(p => p.Id == request.Id);

            if (post == null)
            {
                throw new EntityNotFoundException<Post>();
            }
            
            post.Title = request.Title ?? post.Title;
            post.Description = request.Description ?? post.Description;

            if (request.CategoriesIds != null)
            {
                post.Categories = await DbContext.Categories.Where(c => request.CategoriesIds.Contains(c.Id))
                    .ToListAsync();
            }
            
            await DbContext.SaveChangesAsync();
        }

        public async Task DeletePost(DeletePostRequest request)
        {
            var post = await DbContext.Posts.FirstOrDefaultAsync(p => p.Id == request.Id);

            if (post == null)
            {
                throw new EntityNotFoundException<Post>();
            }

            DbContext.Posts.Remove(post);

            await DbContext.SaveChangesAsync();
        }

        public async Task<GetPostResponse> GetPostById(GetPostByIdRequest request)
        {
            var post = await DbContext.Posts
                .Include(p => p.CmsUser)
                .Include(p => p.Categories)
                .FirstOrDefaultAsync(p => p.Id == request.Id);

            if (post == null)
            {
                throw new EntityNotFoundException<Post>();
            }

            return new GetPostResponse
            {
                Id = post.Id,
                Title = post.Title,
                Description = post.Description,
                ViewsCount = post.ViewsCount,
                CreationDate = post.CreationDate,
                UpdateDate = post.UpdateDate,
                Author = new GetPostResponse.AuthorInfo
                {
                    Id = post.AuthorId,
                    Email = post.CmsUser.Email
                },
                Categories = post.Categories.Select(c => new GetPostResponse.Category
                {
                    Id = c.Id,
                    Name = c.Name
                }).ToList()
            };
        }

        public async Task<GetAllPostsResponse> GetAllPosts(GetAllPostsRequest request)
        {
            var posts = await DbContext.Posts
                .Where(p => !request.CategoriesIds.Any() ||
                            request.CategoriesIds.Intersect(p.Categories.Select(c => c.Id)).Any())
                .Select(p => new GetAllPostsResponse.Post
                {
                    Id = p.Id,
                    Title = p.Title,
                    Description = p.Description,
                    ViewsCount = p.ViewsCount,
                    CreationDate = p.CreationDate,
                    UpdateDate = p.UpdateDate,
                }).ToListAsync();

            return new GetAllPostsResponse
            {
                Posts = posts
            };
        }
    }
}