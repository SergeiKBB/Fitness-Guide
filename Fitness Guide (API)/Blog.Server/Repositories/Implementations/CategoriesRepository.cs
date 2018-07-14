using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using Blog.Server.Contracts.Requests.Categories;
using Blog.Server.Contracts.Responses.Categories;
using Blog.Server.Database.Contexts;
using Blog.Server.Database.Entities;
using Blog.Server.Exceptions.Base;
using Blog.Server.Repositories.Abstractions;

namespace Blog.Server.Repositories.Implementations
{
    public class CategoriesRepository : RepositoryBase, ICategoriesRepository
    {
        public CategoriesRepository(IBlogDbContext dbContext) : base(dbContext)
        {
        }

        public async Task CreateCategory(CreateCategoryRequest request)
        {
            var category = new Category
            {
                Name = request.Name
            };

            DbContext.Categories.Add(category);

            await DbContext.SaveChangesAsync();
        }

        public async Task UpdateCategory(UpdateCategoryRequest request)
        {
            var category = await DbContext.Categories.FirstOrDefaultAsync(c => c.Id == request.Id);

            if (category == null)
            {
                throw new EntityNotFoundException<Category>();
            }

            category.Name = request.Name;

            await DbContext.SaveChangesAsync();
        }

        public async Task DeleteCategory(DeleteCategoryRequest request)
        {
            var category = await DbContext.Categories.FirstOrDefaultAsync(c => c.Id == request.Id);

            if (category == null)
            {
                throw new EntityNotFoundException<Category>();
            }

            DbContext.Categories.Remove(category);

            await DbContext.SaveChangesAsync();
        }

        public async Task<GetCategoriesResponse> GetCategories()
        {
            var categoryResponses = await DbContext.Categories.Select(category => new CategoryResponse
            {
                Id = category.Id,
                Name = category.Name,
                PostsCount = category.Posts.Count
            }).ToListAsync();

            return new GetCategoriesResponse
            {
                Categories = categoryResponses
            };
        }

        public async Task<GetCategoryResponse> GetCategoryById(GetCategoryByIdRequest request)
        {
            var category = await DbContext.Categories.Select(c => new GetCategoryResponse
            {
                Id = c.Id,
                Name = c.Name,
                PostsCount = c.Posts.Count
            }).FirstOrDefaultAsync(c => c.Id == request.Id);

            if (category == null)
            {
                throw new EntityNotFoundException<Category>();
            }

            return category;
        }
    }
}