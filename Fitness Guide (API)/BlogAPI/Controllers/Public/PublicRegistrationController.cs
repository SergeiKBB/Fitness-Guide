using System.Threading.Tasks;
using System.Web.Http;
using Blog.Server.Contracts.Requests.Users;
using Blog.Server.Services.Abstractions;
using Blog.Server.Services.Abstractions.Hashing;

namespace BlogAPI.Controllers
{
    [RoutePrefix("api/public/register")]
    public class PublicRegistrationController : ApiController
    {
        private readonly ISha512Service _sha512Service;
        private readonly IUserManagementService _userManagementService;

        public PublicRegistrationController(ISha512Service sha512Service, IUserManagementService userManagementService)
        {
            _sha512Service = sha512Service;
            _userManagementService = userManagementService;
        }

        [HttpPost]
        [Route]
        public async Task Register(CreateUserRequest request)
        {
            request.Password = _sha512Service.GetBase64Hash(request.Password);

            await _userManagementService.CreateUser(request);;
        }
    }
}