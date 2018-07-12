namespace Blog.Server.Contracts.Requests.CmsUsers
{
    public class GetCmsUserIdByRefreshTokenRequest
    {
        public string RefreshToken { get; set; }
    }
}