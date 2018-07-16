using System;
using System.Threading.Tasks;
using System.Web.Http;
using Blog.Server.Contracts.Requests.Categories;
using Blog.Server.Contracts.Responses.Categories;
using Blog.Server.Services.Abstractions;

namespace BlogAPI.Controllers.Public
{
    [RoutePrefix("api/public/categories")]
    public class PublicCategoriesController : ApiController
    {
        private readonly ICategoriesManagementService _categoriesManagementService;

        public PublicCategoriesController(ICategoriesManagementService categoriesManagementService)
        {
            _categoriesManagementService = categoriesManagementService;
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<GetCategoryResponse> GetCategory(Guid id)
        {
            var category = await _categoriesManagementService.GetCategoryById(new GetCategoryByIdRequest
            {
                Id = id
            });

            return category;
        }

        [HttpGet]
        [Route]
        public async Task<GetCategoriesResponse> GetAllCategories()
        {
            var categories = await _categoriesManagementService.GetCategories(new GetCategoriesRequest());

            return categories;
        }
    }
}