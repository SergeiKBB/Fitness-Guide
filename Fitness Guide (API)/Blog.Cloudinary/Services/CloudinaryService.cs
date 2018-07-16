using System;
using System.IO;
using System.Threading.Tasks;
using Blog.Cloudinary.Contracts;
using Blog.Cloudinary.Factory;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;

namespace Blog.Cloudinary.Services
{
    public class CloudinaryService : ICloudinaryService
    {
        private readonly CloudinaryDotNet.Cloudinary _cloudinaryClient;

        public CloudinaryService(CloudinaryFactory factory)
        {
            _cloudinaryClient = factory.Create();
        }

        public async Task<UploadImageResponse> UploadImage(UploadImageRequest request)
        {
            var imageUploadParams = new ImageUploadParams
            {
                File = new FileDescription(Guid.NewGuid().ToString(), request.Stream),
                //Transformation = new Transformation().Width(400).Height(300).Crop("limit")
            };

            var imageUploadResult = await _cloudinaryClient.UploadAsync(imageUploadParams);

            var uri = imageUploadResult.Uri;

            return new UploadImageResponse
            {
                Url = uri.ToString()
            };
        }
    }
}