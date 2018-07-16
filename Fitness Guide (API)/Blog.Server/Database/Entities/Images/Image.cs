using System.Collections.Generic;

namespace Blog.Server.Database.Entities.Images
{
    public class Image : EntityBase
    {
        public string Url { get; set; }
        public ICollection<ImageTransform> ImageTransforms { get; set; }
    }
}