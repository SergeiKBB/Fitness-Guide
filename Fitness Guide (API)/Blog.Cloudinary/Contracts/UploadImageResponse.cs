using System.Collections.Generic;

namespace Blog.Cloudinary.Contracts
{
    public class UploadImageResponse
    {
        public string OriginalUrl { get; set; }
        public IDictionary<string, string> TransformedImages { get; set; }
    }
}