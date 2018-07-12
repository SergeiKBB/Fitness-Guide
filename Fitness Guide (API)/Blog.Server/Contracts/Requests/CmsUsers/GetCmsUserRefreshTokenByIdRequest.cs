using System;

namespace Blog.Server.Contracts.Requests.CmsUser
{
    public class GetCmsUserRefreshTokenByIdRequest
    {
        public Guid Id { get; set; }
    }
}