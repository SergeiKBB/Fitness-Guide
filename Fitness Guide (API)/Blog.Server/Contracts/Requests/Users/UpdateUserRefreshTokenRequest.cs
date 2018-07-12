using System;

namespace Blog.Server.Contracts.Requests.Users
{
    public class UpdateUserRefreshTokenRequest
    {
        public Guid Id { get; set; }
        public string RefreshToken { get; set; }
    }
}