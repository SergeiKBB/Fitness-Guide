using System;
using System.Collections.Generic;
using System.Linq;
using System.Net;
using System.Reflection;
using System.Resources;
using Blog.Server.Exceptions.Attributes;
using Newtonsoft.Json;
using Newtonsoft.Json.Converters;
using Newtonsoft.Json.Linq;

namespace Blog.Server.Exceptions
{
    [StatusCode(HttpStatusCode.BadRequest)]
    public abstract class BlogException : ApplicationException
    {
        public abstract ResourceManager ExceptionMessagesManager { get; }
        public abstract ResourceManager ExceptionCodesManager { get; }

        [Log, Response]
        public override string Message => ExceptionMessagesManager.GetString(FriendlyTypeName) ?? string.Empty;

        [Log, Response]
        public virtual string Code => ExceptionCodesManager.GetString(FriendlyTypeName);

        protected string FriendlyTypeName => GetType().Name.Split('`').First();

        public JObject GetLogObject()
        {
            var logObject = GetObjectOfPropertiesWithAttribute<LogAttribute>();

            var thisObject = JObject.FromObject(this);
            thisObject.Add("AdditionalData", logObject);

            return thisObject;
        }

        private JObject GetObjectOfPropertiesWithAttribute<TAttribute>() where TAttribute : Attribute
        {
            var logProperties = GetType().GetProperties(BindingFlags.Public | BindingFlags.Instance)
                .Where(info => info.GetCustomAttributes<TAttribute>().Any());

            var jObject = new JObject();

            var serializer = JsonSerializer.CreateDefault(new JsonSerializerSettings
            {
                Converters = new List<JsonConverter>
                {
                    new StringEnumConverter()
                }
            });

            foreach (var propertyInfo in logProperties)
            {
                var response = propertyInfo.GetMethod.Invoke(this, parameters: null);

                var property = response != null
                    ? JToken.FromObject(response, serializer)
                    : new JValue((object)null);

                jObject.Add(propertyInfo.Name, property);
            }

            return jObject;
        }

        public JObject GetResponseObject()
        {
            return GetObjectOfPropertiesWithAttribute<ResponseAttribute>();
        }
    }
}