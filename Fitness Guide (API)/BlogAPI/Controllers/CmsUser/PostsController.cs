using System;
using System.Threading.Tasks;
using System.Web.Http;
using Blog.Server.Contracts.Requests.Posts;
using Blog.Server.Contracts.Responses.Posts;
using Blog.Server.Services.Abstractions;
using BlogAPI.Authorization;
using BlogAPI.Authorization.Payload;
using BlogAPI.Controllers.Base;

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
        public async Task CreatePost(CreatePostRequest request)
        {
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

        [HttpGet]
        [Route]
        public async Task<GetAllPostsResponse> GetAllPosts([FromUri] Guid[] categoriesIds = null)
        {
            categoriesIds = categoriesIds ?? new Guid[0];

            var posts = await _postsManagementService.GetAllPosts(new GetAllPostsRequest
            {
                CategoriesIds = categoriesIds
            });

            return posts;
        }

        [HttpGet]
        [Route("{id}")]
        public async Task<GetPostResponse> GetPostById(Guid id)
        {
            var post = await _postsManagementService.GetPostById(new GetPostByIdRequest
            {
                Id = id
            });

            return post;
        }
    }
}