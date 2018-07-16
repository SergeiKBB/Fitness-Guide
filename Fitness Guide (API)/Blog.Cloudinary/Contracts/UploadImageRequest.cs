using System.IO;

namespace Blog.Cloudinary.Contracts
{
    public class UploadImageRequest
    {
        public string FileName { get; set; }
        public Stream Stream { get; set; }
    }
}