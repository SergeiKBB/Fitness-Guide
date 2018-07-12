namespace Blog.Server.Contracts.Requests.Users
{
    public class GetUserIdByCredentialsRequest
    {
        public string Email { get; set; }
        public string Password { get; set; }
    }
}