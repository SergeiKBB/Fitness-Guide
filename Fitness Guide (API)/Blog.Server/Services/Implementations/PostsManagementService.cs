﻿using System;
using System.Threading.Tasks;
using Autofac;
using Blog.Server.Contracts.Requests.Posts;
using Blog.Server.Contracts.Responses.Posts;
using Blog.Server.Repositories.Abstractions;
using Blog.Server.Services.Abstractions;

namespace Blog.Server.Services.Implementations
{
    public class PostsManagementService : ManagementServiceBase, IPostsManagementService
    {
        private readonly IPostsRepository _postsRepository;

        public PostsManagementService(IPostsRepository postsRepository, ILifetimeScope lifetimeScope) : base(
            lifetimeScope)
        {
            _postsRepository = postsRepository;
        }

        public async Task<Guid> CreatePost(CreatePostRequest request)
        {
            var postId = await ProcessRequest(request, _postsRepository.CreatePost);

            return postId;
        }

        public async Task UpdatePost(UpdatePostRequest request)
        {
            await ProcessRequest(request, _postsRepository.UpdatePost);
        }

        public async Task DeletePost(DeletePostRequest request)
        {
            await ProcessRequest(request, _postsRepository.DeletePost);
        }

        public async Task<GetPostResponse> GetPostById(GetPostByIdRequest request)
        {
            var post = await ProcessRequest(request,_postsRepository.GetPostById);

            return post;
        }

        public async Task<GetAllPostsResponse> GetAllPosts(GetAllPostsRequest request)
        {
            var posts = await ProcessRequest(request, _postsRepository.GetAllPosts);

            return posts;
        }

        public async Task CommentPost(CommentPostRequest request)
        {
            await ProcessRequest(request, _postsRepository.CommentPost);
        }
    }
}