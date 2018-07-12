using BlogAPI.Authorization.Payload;

namespace BlogAPI.Authorization
{
    public interface IAccessTokenService<TPayload>
        where TPayload : IAccessTokenPayload
    {
        T GetPayload<T>(string accessToken) where T : IAccessTokenPayload, new();

        void Verify(string accessToken, string key);

        string Create(IAccessTokenPayload payload, string key);
    }
}