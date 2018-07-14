using System;
using System.Collections.Generic;

namespace Blog.Server.Contracts.Responses.Posts
{
    public class GetAllPostsResponse
    {
        public ICollection<Post> Posts { get; set; }

        public class Post
        {
            public Guid Id { get; set; }
            public string Title { get; set; }
            public string Description { get; set; }
        }
    }
}