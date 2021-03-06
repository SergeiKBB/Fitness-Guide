﻿using System;
using System.Collections.Generic;

namespace Blog.Server.Contracts.Requests.Posts
{
    public class CreatePostRequest
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public Guid AuthorId { get; set; }
        public ICollection<Guid> CategoriesIds { get; set; }
        public Guid ImageId { get; set; }
    }
}