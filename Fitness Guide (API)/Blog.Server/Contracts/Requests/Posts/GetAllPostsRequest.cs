using System;
using System.Collections.Generic;

namespace Blog.Server.Contracts.Requests.Posts
{
    public class GetAllPostsRequest
    {
        public ICollection<Guid> CategoriesIds { get; set; }
    }
}