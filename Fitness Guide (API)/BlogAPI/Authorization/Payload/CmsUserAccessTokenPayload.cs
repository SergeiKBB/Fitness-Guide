using System;

namespace BlogAPI.Authorization.Payload
{
    public class CmsUserAccessTokenPayload : IAccessTokenPayload
    {
        public Guid Id { get; set; }
        public long LifeTime { get; set; }
        public DateTime CreationDate { get; set; }
    }
}