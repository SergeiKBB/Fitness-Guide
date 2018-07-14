using System;

namespace Blog.Server.Contracts.Requests.Posts
{
    public class GetPostByIdRequest
    {
        public Guid Id { get; set; }
    }
}