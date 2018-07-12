using System;
using Blog.Server.Exceptions.Attributes;
using Blog.Server.Exceptions.Base;

namespace Blog.Server.Exceptions.Authorization
{
    public class AccessTokenVerificationException : BlogExceptionBase
    {
        public AccessTokenVerificationException(Exception exception)
        {
            Exception = exception;
        }
        [Log]
        public Exception Exception { get; }
    }
}