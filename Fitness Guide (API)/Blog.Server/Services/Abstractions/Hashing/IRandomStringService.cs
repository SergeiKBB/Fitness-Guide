namespace Blog.Server.Services.Abstractions.Hashing
{
    public interface IRandomStringService
    {
        string GetRandomString(int length);
    }
}