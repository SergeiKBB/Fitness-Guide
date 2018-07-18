using System.Threading.Tasks;
using System.Web.Http;
using Blog.Server.Contracts.Requests.Posts;
using Blog.Server.Services.Abstractions;
using BlogAPI.Authorization;
using BlogAPI.Authorization.Payload;
using BlogAPI.Controllers.Base;
using BlogAPI.Models.Posts;

namespace BlogAPI.Controllers.User
{
    [RoutePrefix("api/user/comment")]
    public class UserCommentController : UserBaseController
    {
        private readonly IPostsManagementService _postsManagementService;

        public UserCommentController(IAccessTokenService<UserAccessTokenPayload> accessTokenService,
            IUserManagementService userManagementService, IPostsManagementService postsManagementService) : base(accessTokenService, userManagementService)
        {
            _postsManagementService = postsManagementService;
        }

        [HttpPost]
        [Route]
        public async Task CommentPost(AddCommentModel model)
        {
            var commentPostRequest = new CommentPostRequest
            {
                Content = model.Content,
                PostId = model.PostId,
                AuthorId = UserId
            };

            await _postsManagementService.CommentPost(commentPostRequest);
        }
    }
}