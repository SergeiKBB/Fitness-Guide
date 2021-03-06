﻿using System;
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
            public int ViewsCount { get; set; }
            public DateTime CreationDate { get; set; }
            public DateTime UpdateDate { get; set; }
            public string ImageUrl { get; set; }
            public ICollection<Category> Categories { get; set; }
        }

        public class Category
        {
            public Guid Id { get; set; }
            public string Name { get; set; }
        }
    }
}