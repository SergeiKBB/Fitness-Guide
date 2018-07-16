using Autofac;
using Blog.Cloudinary.Factory;
using Blog.Cloudinary.Services;

namespace Blog.Cloudinary
{
    public class CloudinaryModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<CloudinaryFactory>().AsSelf().SingleInstance();

            builder.RegisterType<CloudinaryService>().AsImplementedInterfaces();

            base.Load(builder);
        }
    }
}