using System.Threading.Tasks;
using Blog.Server.Contracts.Requests.Categories;
using Blog.Server.Contracts.Responses.Categories;

namespace Blog.Server.Services.Abstractions
{
    public interface ICategoriesManagementService : IManagementService
    {
        Task CreateCategory(CreateCategoryRequest request);
        Task UpdateCategory(UpdateCategoryRequest request);
        Task DeleteCategory(DeleteCategoryRequest request);
        Task<GetCategoriesResponse> GetCategories(GetCategoriesRequest request);
        Task<GetCategoryResponse> GetCategoryById(GetCategoryByIdRequest request);
    }
}