using System;
using System.Collections.Generic;
using System.IO;
using System.Linq;
using System.Threading.Tasks;
using Blog.Cloudinary.Contracts;
using Blog.Cloudinary.Factory;
using CloudinaryDotNet;
using CloudinaryDotNet.Actions;

namespace Blog.Cloudinary.Services
{
    internal class CloudinaryService : ICloudinaryService
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
                EagerTransforms = new List<Transformation>
                {
                    new Transformation().Width(400).Prefix("small"),
                    new Transformation().Width(1500).Prefix("large"),
                    new Transformation().Width(900).Prefix("medium")
                }
            };

            var imageUploadResult = await _cloudinaryClient.UploadAsync(imageUploadParams);

            var uri = imageUploadResult.SecureUri;
            var transforms = ParseTransforms(imageUploadResult);
            return new UploadImageResponse
            {
                OriginalUrl = uri.ToString(),
                TransformedImages = transforms
            };
        }

        private static Dictionary<string, string> ParseTransforms(ImageUploadResult result)
        {
            var array = result.JsonObj["eager"]?.ToArray();

            var dictionary = array?.ToDictionary(
                token => token["transformation"]?.ToString().Split(',')[0].Substring(startIndex: 2),
                token => token["url"]?.ToString());

            return dictionary;
        }
    }
}