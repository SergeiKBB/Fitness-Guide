using System;
using System.Threading.Tasks;
using Blog.Server.Contracts.Requests.Images;
using Blog.Server.Contracts.Responses.Images;

namespace Blog.Server.Repositories.Abstractions
{
    public interface IImagesRepository
    {
        Task<Guid> CreateImage(CreateImageRequest request);
        Task<ImagesResponse> GetImages();
    }
}