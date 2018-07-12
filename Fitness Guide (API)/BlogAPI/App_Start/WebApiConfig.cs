using System.Web.Http;
using System.Web.Http.Cors;
using Autofac;
using Autofac.Integration.WebApi;
using Blog.Server;

namespace BlogAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            ICorsPolicyProvider corsConfig = new EnableCorsAttribute("*", "*", "*");
            // Web API configuration and services
            config.EnableCors(corsConfig);
            // Web API routes
            config.MapHttpAttributeRoutes();

            config.Routes.MapHttpRoute(
                name: "DefaultApi",
                routeTemplate: "api/{controller}/{id}",
                defaults: new { id = RouteParameter.Optional }
            );

            var builder = new ContainerBuilder();

            builder.RegisterModule<ServerModule>();
            builder.RegisterModule<ConfigurationModule>();
            builder.RegisterModule<ApiModule>();

            var container = builder.Build();

            var resolver = new AutofacWebApiDependencyResolver(container);

            config.DependencyResolver = resolver;
        }
    }
}
