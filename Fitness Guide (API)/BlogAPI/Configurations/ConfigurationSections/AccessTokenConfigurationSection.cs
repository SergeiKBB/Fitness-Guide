using System;
using System.Configuration;

namespace BlogAPI.Configurations.ConfigurationSections
{
    public class AccessTokenConfigurationSection : ConfigurationSection
    {
        [ConfigurationProperty("lifetime", IsRequired = true)]
        public TimeSpan Lifetime
        {
            get => (TimeSpan)this["lifetime"];
            set => this["lifetime"] = value;
        }

        [ConfigurationProperty("secret-key", IsRequired = true)]
        public string SecretKey
        {
            get => (string)this["secret-key"];
            set => this["secret-key"] = value;
        }
    }
}