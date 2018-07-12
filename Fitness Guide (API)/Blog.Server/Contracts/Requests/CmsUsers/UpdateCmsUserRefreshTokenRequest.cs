using System;

namespace Blog.Server.Contracts.Requests.CmsUsers
{
    public class UpdateCmsUserRefreshTokenRequest
    {
        public Guid Id { get; set; }
        public string RefreshToken { get; set; }
    }
}