using System;
using System.Threading.Tasks;
using System.Web.Http;
using Blog.Server.Contracts.Requests.Posts;
using Blog.Server.Contracts.Responses.Posts;
using Blog.Server.Services.Abstractions;

namespace BlogAPI.Controllers.Public
{
    [RoutePrefix("api/public/posts")]
    public class PublicPostsController : ApiController
    {
        private readonly IPostsManagementService _postsManagementService;

        public PublicPostsController(IPostsManagementService postsManagementService)
        {
            _postsManagementService = postsManagementService;
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