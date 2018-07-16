namespace BlogAPI.Configurations.Abstractions
{
    public interface ICloudinaryConfiguration
    {
        string CloudName { get; }
        string ApiKey { get; }
        string Secret { get; }
    }
}