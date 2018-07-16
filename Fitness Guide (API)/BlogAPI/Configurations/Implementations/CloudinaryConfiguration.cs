using BlogAPI.Configurations.Abstractions;
using BlogAPI.Configurations.ConfigurationSections;

namespace BlogAPI.Configurations.Implementations
{
    public class CloudinaryConfiguration : ICloudinaryConfiguration
    {
        public CloudinaryConfiguration(CloudinaryConfigurationSection cloudinaryConfigurationSection)
        {
            CloudName = cloudinaryConfigurationSection.CloudName;
            ApiKey = cloudinaryConfigurationSection.ApiKey;
            Secret = cloudinaryConfigurationSection.SecretKey;
        }

        public string CloudName { get; }
        public string ApiKey { get; }
        public string Secret { get; }
    }
}