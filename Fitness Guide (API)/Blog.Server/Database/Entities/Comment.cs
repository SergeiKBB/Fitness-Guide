using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Blog.Server.Database.Entities
{
    public class Comment : EntityBase
    {
        [ForeignKey(nameof(Post))]
        public Guid PostId { get; set; }
        public Post Post { get; set; }
        public string Content { get; set; }
        [ForeignKey(nameof(Author))]
        public Guid? AuthorId { get; set; }
        public User Author { get; set; }
    }
}