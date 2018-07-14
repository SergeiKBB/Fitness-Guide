﻿using System.Web.Http;
using Autofac;
using Autofac.Integration.WebApi;
using Blog.Server;
using BlogAPI.Modules;
using log4net.Config;

namespace BlogAPI
{
    public static class WebApiConfig
    {
        public static void Register(HttpConfiguration config)
        {
            // Web API configuration and services

            // Web API routes
            config.MapHttpAttributeRoutes();

            XmlConfigurator.Configure();

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
