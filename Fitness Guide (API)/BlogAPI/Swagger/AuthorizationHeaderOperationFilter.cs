using System.Collections.Generic;
using System.Web.Http.Description;
using BlogAPI.Controllers.Base;
using Swashbuckle.Swagger;

namespace BlogAPI.Swagger
{
    public class AuthorizationHeaderOperationFilter : IOperationFilter
    {
        public void Apply(Operation operation, SchemaRegistry schemaRegistry, ApiDescription apiDescription)
        {
            var controllerType =
                apiDescription.ActionDescriptor.ControllerDescriptor.ControllerType;

            if (!typeof(CmsUserBaseController).IsAssignableFrom(controllerType) &&
                !typeof(UserBaseController).IsAssignableFrom(controllerType))
            {
                return;
            }

            var attributeDescription = "Access token";

            operation.parameters = operation.parameters ?? new List<Parameter>();

            operation.parameters.Add(new Parameter
            {
                name = "Authorization",
                @in = "header",
                description = attributeDescription,
                required = true,
                type = "string"
            });
        }
    }
}