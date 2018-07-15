using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;

namespace Blog.Server.Database.Entities
{
    public class Post : EntityBase
    {
        public string Title { get; set; }
        public string Description { get; set; }
        public int ViewsCount { get; set; }
        [ForeignKey(nameof(CmsUser))]
        public Guid AuthorId { get; set; }
        public CmsUser CmsUser { get; set; }
        public ICollection<Comment> Comments { get; set; }
        public ICollection<Category> Categories { get; set; }
    }
}