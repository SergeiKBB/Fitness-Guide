using System.Collections.Generic;

namespace Blog.Server.Contracts.Responses.Categories
{
    public class GetCategoriesResponse
    {
        public ICollection<CategoryResponse> Categories { get; set; }
    }
}