using System;

namespace Blog.Server.Database.Entities.Base
{
    public interface IEntity
    {
        DateTime CreationDate { get; set; }
        DateTime UpdateDate { get; set; }
    }
}