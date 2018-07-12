using Blog.Server.Exceptions.Attributes;
using Blog.Server.Exceptions.Base;

namespace Blog.Server.Exceptions.Authorization
{
    public class AccessTokenInvalidLifetimeException : BlogExceptionBase
    {
        [Log]
        public long ReceivedLifetime { get; }
        [Log]
        public long ExpectedLifetime { get; }

        public AccessTokenInvalidLifetimeException(long receivedLifetime, long expectedLifetime)
        {
            ReceivedLifetime = receivedLifetime;
            ExpectedLifetime = expectedLifetime;
        }
    }
}