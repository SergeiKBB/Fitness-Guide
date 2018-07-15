using System.Threading.Tasks;
using Autofac;
using Blog.Server.Contracts.Requests.Categories;
using Blog.Server.Contracts.Responses.Categories;
using Blog.Server.Repositories.Abstractions;
using Blog.Server.Services.Abstractions;

namespace Blog.Server.Services.Implementations
{
    public class CategoriesManagementService : ManagementServiceBase, ICategoriesManagementService
    {
        private readonly ICategoriesRepository _categoriesRepository;

        public CategoriesManagementService(ILifetimeScope lifetimeScope, ICategoriesRepository categoriesRepository) :
            base(lifetimeScope)
        {
            _categoriesRepository = categoriesRepository;
        }

        public async Task CreateCategory(CreateCategoryRequest request)
        {
            await ProcessRequest(request, _categoriesRepository.CreateCategory);
        }

        public async Task UpdateCategory(UpdateCategoryRequest request)
        {
            await ProcessRequest(request, _categoriesRepository.UpdateCategory);
        }

        public async Task DeleteCategory(DeleteCategoryRequest request)
        {
            await ProcessRequest(request, _categoriesRepository.DeleteCategory);
        }

        public async Task<GetCategoriesResponse> GetCategories(GetCategoriesRequest request)
        {
            var getCategoriesResponse = await ProcessRequest(request, _categoriesRepository.GetCategories);

            return getCategoriesResponse;
        }

        public async Task<GetCategoryResponse> GetCategoryById(GetCategoryByIdRequest request)
        {
            var category = await ProcessRequest(request, _categoriesRepository.GetCategoryById);

            return category;
        }
    }
}