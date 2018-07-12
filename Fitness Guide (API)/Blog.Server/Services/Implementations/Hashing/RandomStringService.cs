using System;
using System.Security.Cryptography;
using Blog.Server.Services.Abstractions.Hashing;

namespace Blog.Server.Services.Implementations.Hashing
{
    public class RandomStringService : IRandomStringService
    {
        public string GetRandomString(int length)
        {
            using (var rngCryptoServiceProvider = new RNGCryptoServiceProvider())
            {
                var bytes = new byte[length];

                rngCryptoServiceProvider.GetBytes(bytes);

                var fromBase64String = Convert.ToBase64String(bytes);

                return fromBase64String;
            }
        }
    }
}