using System.Collections.Generic;
using Blog.Server.Exceptions.Attributes;
using FluentValidation.Results;

namespace Blog.Server.Exceptions.Base
{
    public class ValidationException : BlogExceptionBase
    {
        [Log, Response]
        public object InvalidObject { get; }

        [Log, Response]
        public ICollection<ValidationFailure> Failures { get; }

        public ValidationException(object invalidObject, ICollection<ValidationFailure> failures)
        {
            InvalidObject = invalidObject;
            Failures = failures;
        }
    }
}