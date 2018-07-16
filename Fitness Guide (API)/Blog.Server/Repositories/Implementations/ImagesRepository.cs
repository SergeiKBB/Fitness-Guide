using System;
using System.Data.Entity;
using System.Linq;
using System.Threading.Tasks;
using Blog.Server.Contracts.Requests.Images;
using Blog.Server.Contracts.Responses.Images;
using Blog.Server.Database.Contexts;
using Blog.Server.Database.Entities.Images;
using Blog.Server.Repositories.Abstractions;

namespace Blog.Server.Repositories.Implementations
{
    internal class ImagesRepository : RepositoryBase, IImagesRepository
    {
        public ImagesRepository(IBlogDbContext dbContext) : base(dbContext)
        {
        }

        public async Task<Guid> CreateImage(CreateImageRequest request)
        {
            var image = new Image
            { 
                ImageTransforms = request.TransformedUrls.Select(pair => new ImageTransform
                {
                    TransformName = pair.Key,
                    Url = pair.Value
                }).ToList(),
                Url = request.OriginalUrl
            };

            DbContext.Images.Add(image);

            await DbContext.SaveChangesAsync();

            return image.Id;
        }

        public async Task<ImagesResponse> GetImages()
        {
            var images = await DbContext.Images.Select(image => new ImagesResponse.Image
            {
                Id = image.Id,
                Url = image.Url,
                ImageTransforms = image.ImageTransforms.Select(transform => new ImagesResponse.ImageTransform
                {
                    Url = transform.Url,
                    TransformName = transform.TransformName
                }).ToList()
            }).ToListAsync();

            return new ImagesResponse
            {
                Images = images
            };
        }
    }
}