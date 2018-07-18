using System;

namespace BlogAPI.Models.Posts
{
    public class AddCommentModel
    {
        public Guid PostId { get; set; }
        public string Content { get; set; }
    }
}