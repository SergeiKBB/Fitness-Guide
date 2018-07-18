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
        public int ViewsCount { get; set; }
        public DateTime CreationDate { get; set; }
        public DateTime UpdateDate { get; set; }
        public ImageWithTransforms Image { get; set; }
        public ICollection<Comment> Comments { get; set; }

        public class AuthorInfo
        {
            public Guid Id { get; set; }
            public string Email { get; set; }
        }

        public class Category
        {
            public Guid Id { get; set; }
            public string Name { get; set; }
        }

        public class ImageWithTransforms
        {
            public Guid Id { get; set; }
            public string Url { get; set; }
            public ICollection<ImageTransformation> ImageTransforms { get; set; }
        }

        public class ImageTransformation
        {
            public string TransformName { get; set; }
            public string Url { get; set; }
        }

        public class Comment
        {
            public Guid Id { get; set; }
            public DateTime Date { get; set; }
            public User Author { get; set; }
            public string Content { get; set; }
        }

        public class User
        {
            public Guid UserId { get; set; }
            public string FirstName { get; set; }
            public string LastName { get; set; }
            public string Email { get; set; }
        }
    }

}