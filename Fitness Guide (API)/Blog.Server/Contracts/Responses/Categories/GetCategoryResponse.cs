using System;

namespace Blog.Server.Contracts.Responses.Categories
{
    public class GetCategoryResponse
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
        public int PostsCount { get; set; }
    }
}