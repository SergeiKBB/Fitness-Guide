using System;
using System.Threading.Tasks;
using System.Web.Http;
using Blog.Server.Contracts.Requests.Categories;
using Blog.Server.Contracts.Responses.Categories;
using Blog.Server.Services.Abstractions;
using BlogAPI.Authorization;
using BlogAPI.Authorization.Payload;
using BlogAPI.Controllers.Base;

namespace BlogAPI.Controllers.CmsUser
{
    [RoutePrefix("api/cms/categories")]
    public class CategoriesController : CmsUserBaseController
    {
        private readonly ICategoriesManagementService _categoriesManagementService;

        public CategoriesController(IAccessTokenService<CmsUserAccessTokenPayload> accessTokenService,
            ICmsUserManagementService cmsUserManagementService, ICategoriesManagementService categoriesManagementService) : base(accessTokenService, cmsUserManagementService)
        {
            _categoriesManagementService = categoriesManagementService;
        }

        [HttpPost]
        [Route]
        public async Task CreateCategory(CreateCategoryRequest request)
        {
            await _categoriesManagementService.CreateCategory(request);
        }

        [HttpPut]
        [Route]
        public async Task UpdateCategory(UpdateCategoryRequest request)
        {
            await _categoriesManagementService.UpdateCategory(request);
        }

        [HttpDelete]
        [Route]
        public async Task DeleteCategory([FromUri] DeleteCategoryRequest request)
        {
            await _categoriesManagementService.DeleteCategory(request);
        }
    }
}