using System;
using System.Collections.Generic;

namespace Blog.Server.Contracts.Responses.Images
{
    public class ImagesResponse
    {
        public ICollection<Image> Images { get; set; }

        public class Image
        {
            public Guid Id { get; set; }
            public string Url { get; set; }
            public ICollection<ImageTransform> ImageTransforms { get; set; }
        }

        public class ImageTransform
        {
            public string TransformName { get; set; }
            public string Url { get; set; }
        }
    }
}