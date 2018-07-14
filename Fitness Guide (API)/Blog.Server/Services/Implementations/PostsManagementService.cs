using System.Threading.Tasks;
using Blog.Server.Contracts.Requests.Posts;
using Blog.Server.Contracts.Responses.Posts;
using Blog.Server.Repositories.Abstractions;
using Blog.Server.Services.Abstractions;

namespace Blog.Server.Services.Implementations
{
    public class PostsManagementService : IPostsManagementService
    {
        private readonly IPostsRepository _postsRepository;

        public PostsManagementService(IPostsRepository postsRepository)
        {
            _postsRepository = postsRepository;
        }

        public async Task CreatePost(CreatePostRequest request)
        {
            await _postsRepository.CreatePost(request);
        }

        public async Task UpdatePost(UpdatePostRequest request)
        {
            await _postsRepository.UpdatePost(request);
        }

        public async Task DeletePost(DeletePostRequest request)
        {
            await _postsRepository.DeletePost(request);
        }

        public async Task<GetPostResponse> GetPostById(GetPostByIdRequest request)
        {
            var post = await _postsRepository.GetPostById(request);

            return post;
        }

        public async Task<GetAllPostsResponse> GetAllPosts(GetAllPostsRequest request)
        {
            var posts = await _postsRepository.GetAllPosts(request);

            return posts;
        }
    }
}