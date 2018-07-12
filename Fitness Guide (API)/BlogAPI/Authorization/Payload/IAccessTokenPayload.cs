using System;

namespace BlogAPI.Authorization.Payload
{
    public interface IAccessTokenPayload
    {
        Guid Id { get; set; }
        long LifeTime { get; set; }
        DateTime CreationDate { get; set; }
    }
}