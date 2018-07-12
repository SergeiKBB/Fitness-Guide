using System;
using System.Net;

namespace Blog.Server.Exceptions.Attributes
{
    [AttributeUsage(AttributeTargets.Class)]
    public class StatusCodeAttribute : Attribute
    {
        public HttpStatusCode StatusCode { get; }

        public StatusCodeAttribute(HttpStatusCode statusCode)
        {
            StatusCode = statusCode;
        }
    }
}