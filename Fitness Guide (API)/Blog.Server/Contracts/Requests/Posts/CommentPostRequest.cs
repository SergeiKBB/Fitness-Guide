using System;

namespace Blog.Server.Contracts.Requests.Posts
{
    public class CommentPostRequest
    {
        public Guid PostId { get; set; }
        public Guid? AuthorId { get; set; }
        public string Content { get; set; }
    }
}