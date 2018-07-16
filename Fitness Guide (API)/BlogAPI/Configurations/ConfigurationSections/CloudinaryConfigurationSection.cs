using System.Configuration;

namespace BlogAPI.Configurations.ConfigurationSections
{
    public class CloudinaryConfigurationSection : ConfigurationSection
    {
        [ConfigurationProperty("cloud-name", IsRequired = true)]
        public string CloudName
        {
            get => (string) this["cloud-name"];
            set => value = (string)this["cloud-name"];
        }

        [ConfigurationProperty("api-key", IsRequired = true)]
        public string ApiKey
        {
            get => (string)this["api-key"];
            set => value = (string)this["api-key"];
        }

        [ConfigurationProperty("secret-key", IsRequired = true)]
        public string SecretKey
        {
            get => (string)this["secret-key"];
            set => value = (string)this["secret-key"];
        }
    }
}