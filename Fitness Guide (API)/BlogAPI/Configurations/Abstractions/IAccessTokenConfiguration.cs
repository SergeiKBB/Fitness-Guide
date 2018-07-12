using System;

namespace BlogAPI.Configurations.Abstractions
{
    public interface IAccessTokenConfiguration
    {
        string ServerKey { get; }
        TimeSpan Lifetime { get; }
    }
}