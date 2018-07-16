using System;
using System.ComponentModel.DataAnnotations.Schema;

namespace Blog.Server.Database.Entities.Images
{
    public class ImageTransform : EntityBase
    {
        [ForeignKey(nameof(Image))]
        public Guid ImageId { get; set; }
        public Image Image { get; set; }

        public string TransformName { get; set; }
        public string Url { get; set; }
    }
}