using System;
using System.Threading.Tasks;
using Autofac;
using Blog.Server.Contracts.Requests.Images;
using Blog.Server.Contracts.Responses.Images;
using Blog.Server.Repositories.Abstractions;
using Blog.Server.Services.Abstractions;

namespace Blog.Server.Services.Implementations
{
    internal class ImagesManagementService : ManagementServiceBase, IImagesManagementService
    {
        private readonly IImagesRepository _imagesRepository;

        public ImagesManagementService(ILifetimeScope lifetimeScope, IImagesRepository imagesRepository) : base(
            lifetimeScope)
        {
            _imagesRepository = imagesRepository;
        }

        public async Task<Guid> CreateImage(CreateImageRequest request)
        {
            var guid = await ProcessRequest(request, _imagesRepository.CreateImage);

            return guid;
        }

        public async Task<ImagesResponse> GetImages(GetImagesRequest request)
        {
            var images = await ProcessRequest(request, _imagesRepository.GetImages);

            return images;
        }
    }
}