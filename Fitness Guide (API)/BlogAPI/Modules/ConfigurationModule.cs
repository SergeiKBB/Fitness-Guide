using System.Web.Configuration;
using Autofac;
using BlogAPI.Configurations.ConfigurationSections;
using BlogAPI.Configurations.Implementations;

namespace BlogAPI.Modules
{
    public class ConfigurationModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            var accessTokenConfigurationSection =
                WebConfigurationManager.GetSection("AccessTokenConfiguration") as AccessTokenConfigurationSection;

            builder.RegisterInstance(new AccessTokenConfiguration(accessTokenConfigurationSection))
                .AsImplementedInterfaces();

            var cloudinaryConfigurationSection =
                WebConfigurationManager.GetSection("CloudinaryConfiguration") as CloudinaryConfigurationSection;

            builder.RegisterInstance(new CloudinaryConfiguration(cloudinaryConfigurationSection))
                .AsImplementedInterfaces();
        }
    }
}