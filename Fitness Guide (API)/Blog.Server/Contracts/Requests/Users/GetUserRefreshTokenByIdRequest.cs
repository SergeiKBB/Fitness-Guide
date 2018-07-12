using System;

namespace Blog.Server.Contracts.Requests.Users
{
    public class GetUserRefreshTokenByIdRequest
    {
        public Guid Id { get; set; }
    }
}