using System;
using System.Threading.Tasks;
using Blog.Server.Contracts.Requests.Posts;
using Blog.Server.Contracts.Responses.Posts;

namespace Blog.Server.Repositories.Abstractions
{
    public interface IPostsRepository
    {
        Task<Guid> CreatePost(CreatePostRequest request);
        Task UpdatePost(UpdatePostRequest request);
        Task DeletePost(DeletePostRequest request);
        Task<GetPostResponse> GetPostById(GetPostByIdRequest request);
        Task<GetAllPostsResponse> GetAllPosts(GetAllPostsRequest request);
        Task CommentPost(CommentPostRequest request);
    }
}