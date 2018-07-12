using System;
using BlogAPI.Configurations.Abstractions;
using BlogAPI.Configurations.ConfigurationSections;

namespace BlogAPI.Configurations.Implementations
{
    public class AccessTokenConfiguration : IAccessTokenConfiguration
    {
        private readonly AccessTokenConfigurationSection _configurationSection;

        public AccessTokenConfiguration(AccessTokenConfigurationSection configurationSection)
        {
            _configurationSection = configurationSection;
        }

        public string ServerKey => _configurationSection.SecretKey;
        public TimeSpan Lifetime => _configurationSection.Lifetime;
    }
}