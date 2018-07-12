using System;
using System.Net;
using System.Net.Http;
using System.Reflection;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http.ExceptionHandling;
using System.Web.Http.Results;
using Blog.Server.Exceptions.Attributes;
using Newtonsoft.Json.Linq;

namespace Blog.Server.Exceptions.Handlers
{
    public class ExceptionHandler : IExceptionHandler
    {
        public Task HandleAsync(ExceptionHandlerContext context, CancellationToken cancellationToken)
        {
            var responseObject = new JObject
            {
                ["RequestId"] = context.Request.GetCorrelationId()
            };

            var statusCode = HttpStatusCode.InternalServerError;

            if (context.Exception is BlogException blogException)
            {
                var statusCodeAttribute = blogException.GetType().GetCustomAttribute<StatusCodeAttribute>();

                statusCode = statusCodeAttribute.StatusCode;

                responseObject = AppendExceptionInfo(blogException, responseObject);
            }
            else
            {
                responseObject["Message"] = "Something went wrong, contact us with RequestId";
            }

            var jsonFormatter = context.RequestContext.Configuration.Formatters.JsonFormatter;

            var httpResponseMessage = new HttpResponseMessage
            {
                Content = new ObjectContent<JObject>(responseObject, jsonFormatter),
                StatusCode = statusCode
            };

            context.Result = new ResponseMessageResult(httpResponseMessage);

            return Task.FromResult(result: 0);
        }

        internal static JObject AppendExceptionInfo(Exception e, JObject jObjectToAppend)
        {
            if (e is BlogException blogException)
            {
                jObjectToAppend.Merge(blogException.GetResponseObject(), new JsonMergeSettings
                {
                    MergeArrayHandling = MergeArrayHandling.Union,
                    MergeNullValueHandling = MergeNullValueHandling.Merge
                });

                return jObjectToAppend;
            }
            else
            {
                jObjectToAppend["Message"] = "Something went wrong, contact us with RequestId";
                return jObjectToAppend;
            }
        }
    }
}