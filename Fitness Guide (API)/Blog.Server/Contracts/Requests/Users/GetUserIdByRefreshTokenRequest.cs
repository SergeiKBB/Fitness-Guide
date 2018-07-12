namespace Blog.Server.Contracts.Requests.Users
{
    public class GetUserIdByRefreshTokenRequest
    {
        public string RefreshToken { get; set; }
    }
}