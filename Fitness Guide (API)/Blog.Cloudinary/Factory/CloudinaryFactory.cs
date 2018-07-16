using BlogAPI.Configurations.Abstractions;
using CloudinaryDotNet;

namespace Blog.Cloudinary.Factory
{
    public class CloudinaryFactory
    {
        private readonly ICloudinaryConfiguration _cloudinaryConfiguration;

        public CloudinaryFactory(ICloudinaryConfiguration cloudinaryConfiguration)
        {
            _cloudinaryConfiguration = cloudinaryConfiguration;
        }

        public CloudinaryDotNet.Cloudinary Create()
        {
            var account = new Account
            {
                ApiKey = _cloudinaryConfiguration.ApiKey,
                ApiSecret = _cloudinaryConfiguration.Secret,
                Cloud = _cloudinaryConfiguration.CloudName
            };

            return new CloudinaryDotNet.Cloudinary(account);
        }
    }
}