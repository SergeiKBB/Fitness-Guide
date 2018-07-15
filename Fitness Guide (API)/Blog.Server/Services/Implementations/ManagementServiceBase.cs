using System;
using System.Threading.Tasks;
using Autofac;
using Blog.Server.Services.Abstractions;
using FluentValidation;
using ValidationException = Blog.Server.Exceptions.Base.ValidationException;

namespace Blog.Server.Services.Implementations
{
    public abstract class ManagementServiceBase : IManagementService
    {
        private readonly ILifetimeScope _lifetimeScope;

        protected ManagementServiceBase(ILifetimeScope lifetimeScope)
        {
            _lifetimeScope = lifetimeScope;
        }

        protected async Task<TResponse> ProcessRequest<TRequest, TResponse>(TRequest request, Func<TRequest, Task<TResponse>> executeFunc)
        {
            await Validate(request);

            var response = await executeFunc(request);

            return response;
        }

        protected async Task<TResponse> ProcessRequest<TRequest, TResponse>(TRequest request, Func<Task<TResponse>> executeFunc)
        {
            await Validate(request);

            var response = await executeFunc();

            return response;
        }

        protected async Task ProcessRequest<TRequest>(TRequest request, Func<TRequest, Task> executeAction)
        {
            await Validate(request);

            await executeAction(request);
        }

        private async Task Validate<TRequest>(TRequest request)
        {
            var validator = _lifetimeScope.Resolve<IValidator<TRequest>>();

            var validationResult = await validator.ValidateAsync(request);

            if (!validationResult.IsValid)
            {
                throw new ValidationException(request, validationResult.Errors);
            }
        }
    }
}