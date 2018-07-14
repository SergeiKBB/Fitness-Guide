using System;

namespace Blog.Server.Contracts.Requests.Categories
{
    public class GetCategoryByIdRequest
    {
        public Guid Id { get; set; }
    }
}