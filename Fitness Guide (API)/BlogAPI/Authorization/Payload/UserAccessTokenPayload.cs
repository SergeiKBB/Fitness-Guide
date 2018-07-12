using System;

namespace BlogAPI.Authorization.Payload
{
    public class UserAccessTokenPayload : IAccessTokenPayload
    {
        public Guid Id { get; set; }
        public long LifeTime { get; set; }
        public DateTime CreationDate { get; set; }
    }
}