using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations.Schema;
using Blog.Server.Database.Entities.Images;

namespace Blog.Server.Database.Entities
{
    public class Post : EntityBase
    {
        [ForeignKey(nameof(Image))]
        public Guid ImageId { get; set; }
        public Image Image { get; set; }
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