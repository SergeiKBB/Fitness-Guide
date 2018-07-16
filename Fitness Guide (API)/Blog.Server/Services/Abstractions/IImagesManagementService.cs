using System;
using System.Threading.Tasks;
using Blog.Server.Contracts.Requests.Images;
using Blog.Server.Contracts.Responses.Images;

namespace Blog.Server.Services.Abstractions
{
    public interface IImagesManagementService : IManagementService
    {
        Task<Guid> CreateImage(CreateImageRequest request);
        Task<ImagesResponse> GetImages(GetImagesRequest request);
    }
}