using System;

namespace Blog.Server.Contracts.Requests.CmsUsers
{
    public class GetCmsUserRefreshTokenByIdRequest
    {
        public Guid Id { get; set; }
    }
}