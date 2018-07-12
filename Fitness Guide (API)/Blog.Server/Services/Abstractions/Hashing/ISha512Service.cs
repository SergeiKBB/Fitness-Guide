namespace Blog.Server.Services.Abstractions.Hashing
{
    public interface ISha512Service
    {
        string GetHexHash(string textToHash, string format = "X");
        string GetBase64Hash(string textToHash);
    }
}