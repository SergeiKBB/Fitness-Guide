using System;
using System.Linq;
using System.Security.Cryptography;
using System.Text;
using Blog.Server.Services.Abstractions.Hashing;

namespace Blog.Server.Services.Implementations.Hashing
{
    public class Sha512Service : ISha512Service
    {
        public string GetHexHash(string textToHash, string format = "X")
        {
            var hashBytes = GetHash(textToHash);

            var hashResult = hashBytes
                .Aggregate(new StringBuilder(), (builder, item) => builder.Append(item.ToString(format))).ToString();

            return hashResult;
        }

        public string GetBase64Hash(string textToHash)
        {
            var hashBytes = GetHash(textToHash);

            var base64Hash = Convert.ToBase64String(hashBytes);

            return base64Hash;
        }

        private byte[] GetHash(string textToHash)
        {
            var bytesToHash = Encoding.UTF8.GetBytes(textToHash);

            using (var sha512 = SHA512.Create())
            {
                var computedHash = sha512.ComputeHash(bytesToHash);

                return computedHash;
            }
        }
    }
}