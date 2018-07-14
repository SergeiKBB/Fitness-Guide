using System;

namespace Blog.Server.Contracts.Requests.Categories
{
    public class UpdateCategoryRequest
    {
        public Guid Id { get; set; }
        public string Name { get; set; }
    }
}