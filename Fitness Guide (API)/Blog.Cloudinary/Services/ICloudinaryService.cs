using System.IO;
using System.Threading.Tasks;
using Blog.Cloudinary.Contracts;

namespace Blog.Cloudinary.Services
{
    public interface ICloudinaryService
    {
        Task<UploadImageResponse> UploadImage(UploadImageRequest request);
    }
}