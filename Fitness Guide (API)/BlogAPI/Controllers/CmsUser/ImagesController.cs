using System;
using System.Threading.Tasks;
using System.Web.Http;
using Blog.Cloudinary.Contracts;
using Blog.Cloudinary.Services;
using Blog.Server.Contracts.Requests.Images;
using Blog.Server.Contracts.Responses.Images;
using Blog.Server.Services.Abstractions;
using BlogAPI.Authorization;
using BlogAPI.Authorization.Payload;
using BlogAPI.Controllers.Base;
using BlogAPI.Models.Images;

namespace BlogAPI.Controllers.CmsUser
{
    [RoutePrefix("api/cms/images")]
    public class ImagesController : CmsUserBaseController
    {
        private readonly ICloudinaryService _cloudinaryService;
        private readonly IImagesManagementService _imagesManagementService;

        public ImagesController(IAccessTokenService<CmsUserAccessTokenPayload> accessTokenService,
            ICmsUserManagementService cmsUserManagementService, ICloudinaryService cloudinaryService, IImagesManagementService imagesManagementService) : base(accessTokenService, cmsUserManagementService)
        {
            _cloudinaryService = cloudinaryService;
            _imagesManagementService = imagesManagementService;
        }
        
        [HttpPost]
        [Route("upload")]
        public async Task<CreateImageResponseModel> UploadImage()
        {
            var contentStream = await Request.Content.ReadAsStreamAsync();
            var uploadImageResponse = await _cloudinaryService.UploadImage(new UploadImageRequest
            {
                Stream = contentStream
            });

            var createImageRequest = new CreateImageRequest
            {
                OriginalUrl = uploadImageResponse.OriginalUrl,
                TransformedUrls = uploadImageResponse.TransformedImages
            };

            var guid = await _imagesManagementService.CreateImage(createImageRequest);

            return new CreateImageResponseModel
            {
                ImageId = guid,
                OriginalUrl = createImageRequest.OriginalUrl,
                TransformedUrls = createImageRequest.TransformedUrls
            };
        }

        [HttpGet]
        [Route]
        public async Task<ImagesResponse> GetImages()
        {
            return await _imagesManagementService.GetImages(new GetImagesRequest());
        }
    }
}