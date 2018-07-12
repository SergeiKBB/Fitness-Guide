using Autofac;
using Blog.Server.Database.Contexts;
using Blog.Server.Exceptions.Handlers;
using Blog.Server.Exceptions.Logging;
using Blog.Server.Repositories.Abstractions;
using Blog.Server.Services.Abstractions;
using Blog.Server.Services.Implementations.Hashing;

namespace Blog.Server
{
    public class ServerModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterType<BlogDbContext>().AsImplementedInterfaces();

            builder.RegisterAssemblyTypes(ThisAssembly)
                .AssignableTo<RepositoryBase>()
                .AsImplementedInterfaces();

            builder.RegisterAssemblyTypes(ThisAssembly)
                .AssignableTo<IManagementService>()
                .AsImplementedInterfaces();

            builder.RegisterType<ExceptionHandler>().AsImplementedInterfaces(); 

            builder.RegisterType<ExceptionLogger>().AsImplementedInterfaces();

            builder.RegisterType<Sha512Service>().AsImplementedInterfaces();
            builder.RegisterType<RandomStringService>().AsImplementedInterfaces();
        }
    }
}