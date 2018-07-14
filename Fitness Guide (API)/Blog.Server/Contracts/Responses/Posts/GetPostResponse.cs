using System;
using System.Collections.Generic;

namespace Blog.Server.Contracts.Responses.Posts
{
    public class GetPostResponse
    {
        public Guid Id { get; set; }
        public string Title { get; set; }
        public string Description { get; set; }
        public AuthorInfo Author { get; set; }
        public ICollection<Category> Categories { get; set; }

        public class AuthorInfo
        {
            public Guid Id { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
        }

        public class Category
        {
            public Guid Id { get; set; }
            public string Name { get; set; }
        }
    }

}