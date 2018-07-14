using System;
using System.IO;
using System.Net.Http;
using System.Threading;
using System.Threading.Tasks;
using System.Web.Http.ExceptionHandling;
using log4net;
using Newtonsoft.Json;
using Newtonsoft.Json.Linq;

namespace Blog.Server.Exceptions.Logging
{
    public class ExceptionLogger : IExceptionLogger
    {
        private readonly ILog _logger = LogManager.GetLogger(typeof(ExceptionLogger));
        private static readonly int MaxContentInLogs = 4096;

        internal static JToken SerializeException(Exception e)
        {
            JObject exceptionToken;
            var serializer = JsonSerializer.CreateDefault();

            try
            {
                if (e is BlogException adrabaFrameworkException)
                {
                    exceptionToken = new JObject()
                    {
                        ["Info"] = JToken.FromObject(adrabaFrameworkException, serializer),
                        ["AdditionalData"] = adrabaFrameworkException.GetLogObject()
                    };
                }
                else
                {
                    exceptionToken = JObject.FromObject(e, serializer);
                }
            }
            catch (Exception exception)
            {
                exceptionToken = new JObject
                {
                    ["OriginalExceptionType"] = e.GetType().FullName,
                    ["SerializationExceptionType"] = exception.GetType().FullName,
                    ["Message"] = "Couldn't serialize original exception, failed with 'SerializationExceptionType'"
                };
            }

            return exceptionToken;
        }

        public async Task LogAsync(ExceptionLoggerContext context, CancellationToken cancellationToken)
        {
            try
            {
                var request = context.Request;
                var content = await request.Content.ReadAsStreamAsync();

                if (content.CanSeek)
                {
                    content.Seek(offset: 0, origin: SeekOrigin.Begin);
                }

                string contentString;

                var contentReader = new StreamReader(content);

                if (content.Length > MaxContentInLogs)
                {
                    var c = new char[100];
                    await contentReader.ReadAsync(c, index: 0, count: c.Length);

                    contentString = $"Content too long: {content.Length} characters, first 100 :: {new string(c)}";
                }
                else
                {
                    contentString = await contentReader.ReadToEndAsync();
                }

                var exceptionObject = new JObject
                {
                    ["RequestUrl"] = request.RequestUri,
                    ["Headers"] = JToken.FromObject(request.Headers),
                    ["Body"] = contentString,
                    ["Method"] = request.Method.Method,
                    ["RequestId"] = context.Request.GetCorrelationId(),
                    ["Exception"] = SerializeException(context.Exception)
                };

                var loggingObject = exceptionObject.ToString();

                if (context.Exception is BlogException)
                {
                    _logger.Warn(loggingObject);
                }
                else
                {
                    _logger.Error(loggingObject);
                }
            }
            catch (Exception e)
            {
                _logger.Fatal($"Exception log serialization error! RequestId {context.Request.GetCorrelationId()}", e);
            }
        }
    }
}