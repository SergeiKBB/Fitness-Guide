using System.Threading.Tasks;
using Blog.Server.Contracts.Requests.Categories;
using Blog.Server.Contracts.Responses.Categories;
using Blog.Server.Repositories.Abstractions;
using Blog.Server.Services.Abstractions;

namespace Blog.Server.Services.Implementations
{
    public class CategoriesManagementService : ICategoriesManagementService
    {
        private readonly ICategoriesRepository _categoriesRepository;

        public CategoriesManagementService(ICategoriesRepository categoriesRepository)
        {
            _categoriesRepository = categoriesRepository;
        }

        public async Task CreateCategory(CreateCategoryRequest request)
        {
            await _categoriesRepository.CreateCategory(request);
        }

        public async Task UpdateCategory(UpdateCategoryRequest request)
        {
            await _categoriesRepository.UpdateCategory(request);
        }

        public async Task DeleteCategory(DeleteCategoryRequest request)
        {
            await _categoriesRepository.DeleteCategory(request);
        }

        public async Task<GetCategoriesResponse> GetCategories(GetCategoriesRequest request)
        {
            var getCategoriesResponse = await _categoriesRepository.GetCategories();

            return getCategoriesResponse;
        }

        public async Task<GetCategoryResponse> GetCategoryById(GetCategoryByIdRequest request)
        {
            var category = await _categoriesRepository.GetCategoryById(request);

            return category;
        }
    }
}