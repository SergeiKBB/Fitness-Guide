namespace Blog.Server.Contracts.Requests.CmsUsers
{
    public class GetCmsUserIdByCredentialsRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}