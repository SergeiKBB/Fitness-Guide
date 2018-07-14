using System;

namespace Blog.Server.Contracts.Responses.Categories
{
    public class CategoryResponse
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int PostsCount { get; set; }
    }
}