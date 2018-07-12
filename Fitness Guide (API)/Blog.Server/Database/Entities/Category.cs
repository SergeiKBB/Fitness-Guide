using System.Collections.Generic;

namespace Blog.Server.Database.Entities
{
    public class Category : EntityBase
    {
        public string Name { get; set; }
        public ICollection<Post> Posts { get; set; }
    }
}