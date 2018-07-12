using Autofac;
using Autofac.Features.AttributeFilters;
using Autofac.Integration.WebApi;
using BlogAPI.Authorization;

namespace BlogAPI
{
    public class ApiModule : Module
    {
        protected override void Load(ContainerBuilder builder)
        {
            builder.RegisterGeneric(typeof(AccessTokenService<>)).AsImplementedInterfaces();
            builder.RegisterApiControllers(ThisAssembly).WithAttributeFiltering();
        }
    }
}