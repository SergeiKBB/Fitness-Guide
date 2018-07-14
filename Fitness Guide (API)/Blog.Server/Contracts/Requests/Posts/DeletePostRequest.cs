using System;

namespace Blog.Server.Contracts.Requests.Posts
{
    public class DeletePostRequest
    {
        public Guid Id { get; set; }
    }
}