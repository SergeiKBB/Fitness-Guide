using System;
using System.Text;
using Blog.Server.Exceptions.Authorization;
using BlogAPI.Authorization.Payload;
using BlogAPI.Configurations.Abstractions;
using Jose;

namespace BlogAPI.Authorization
{
    public class AccessTokenService<TPayload> : IAccessTokenService<TPayload>
    where TPayload : IAccessTokenPayload
    {
        private readonly IAccessTokenConfiguration _configuration;

        public AccessTokenService(IAccessTokenConfiguration configuration)
        {
            _configuration = configuration;
        }

        public string Create(IAccessTokenPayload payload, string key)
        {
            payload.CreationDate = DateTime.UtcNow;
            payload.LifeTime = _configuration.Lifetime.Ticks;

            var uniqueKey = key + _configuration.ServerKey;
            
            var token = JWT.Encode(payload, Encoding.Unicode.GetBytes(uniqueKey), JwsAlgorithm.HS512);

            return token;
        }

        public T GetPayload<T>(string accessToken) where T : IAccessTokenPayload, new()
        {
            try
            {
                var payload = JWT.Payload<T>(accessToken);

                if (payload.CreationDate.AddTicks(_configuration.Lifetime.Ticks) < DateTime.UtcNow)
                {
                    throw new AccessTokenExpiredException();
                }

                if (payload.LifeTime != _configuration.Lifetime.Ticks)
                {
                    throw new AccessTokenInvalidLifetimeException(payload.LifeTime, _configuration.Lifetime.Ticks);
                }

                return payload;
            }
            catch (Exception e)
            {
                throw new AccessTokenVerificationException(e);
            }
        }

        public void Verify(string accessToken, string key)
        {
            try
            {
                var uniqueKey = key + _configuration.ServerKey;

                JWT.Decode(accessToken, Encoding.Unicode.GetBytes(uniqueKey));
            }
            catch (Exception e)
            {
                throw new AccessTokenVerificationException(e);
            }
        }
    }
}