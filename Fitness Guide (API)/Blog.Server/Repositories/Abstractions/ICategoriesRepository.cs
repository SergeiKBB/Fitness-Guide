using System.Threading.Tasks;
using Blog.Server.Contracts.Requests.Categories;
using Blog.Server.Contracts.Responses.Categories;

namespace Blog.Server.Repositories.Abstractions
{
    public interface ICategoriesRepository
    {
        Task CreateCategory(CreateCategoryRequest request);
        Task UpdateCategory(UpdateCategoryRequest request);
        Task DeleteCategory(DeleteCategoryRequest request);
        Task<GetCategoriesResponse> GetCategories();
        Task<GetCategoryResponse> GetCategoryById(GetCategoryByIdRequest request);
    }
}