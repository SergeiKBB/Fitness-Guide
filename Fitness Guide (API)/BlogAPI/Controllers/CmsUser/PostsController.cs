using System;
using System.Threading.Tasks;
using System.Web.Http;
using Blog.Cloudinary.Contracts;
using Blog.Server.Contracts.Requests.Posts;
using Blog.Server.Contracts.Responses.Posts;
using Blog.Server.Services.Abstractions;
using BlogAPI.Authorization;
using BlogAPI.Authorization.Payload;
using BlogAPI.Controllers.Base;
using BlogAPI.Models.Posts;

namespace BlogAPI.Controllers.CmsUser
{
    [RoutePrefix("api/cms/posts")]
    public class PostsController : CmsUserBaseController
    {
        private readonly IPostsManagementService _postsManagementService;

        public PostsController(IAccessTokenService<CmsUserAccessTokenPayload> accessTokenService,
            ICmsUserManagementService cmsUserManagementService, IPostsManagementService postsManagementService) : base(
            accessTokenService, cmsUserManagementService)
        {
            _postsManagementService = postsManagementService;
        }


        [HttpPost]
        [Route]
        public async Task CreatePost(CreatePostRequestModel model)
        {
            if (model == null)
            {
                throw new ArgumentNullException(nameof(model));
            }

            var request = new CreatePostRequest
            {
                AuthorId = UserId,
                CategoriesIds = model.CategoriesIds,
                Description = model.Description,
                Title = model.Title,
                ImageId = model.ImageId
            };

            await _postsManagementService.CreatePost(request);
        }

        [HttpPut]
        [Route]
        public async Task UpdatePost(UpdatePostRequest request)
        {
            await _postsManagementService.UpdatePost(request);
        }

        [HttpDelete]
        [Route]
        public async Task DeletePost(DeletePostRequest request)
        {
            await _postsManagementService.DeletePost(request);
        }
    }
}