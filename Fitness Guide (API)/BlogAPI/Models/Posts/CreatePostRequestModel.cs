using System;
using System.Collections.Generic;

namespace BlogAPI.Models.Posts
{
    public class CreatePostRequestModel
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public ICollection<Guid> CategoriesIds { get; set; }
        public Guid ImageId { get; set; }
    }
}