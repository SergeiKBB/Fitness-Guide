using System.Resources;
using Newtonsoft.Json;

namespace Blog.Server.Exceptions.Base
{
    public abstract class BlogExceptionBase : BlogException
    {
        [JsonIgnore]
        public override ResourceManager ExceptionMessagesManager => ExceptionMessages.ResourceManager;
        [JsonIgnore]
        public override ResourceManager ExceptionCodesManager => ExceptionCodes.ResourceManager;
    }
}