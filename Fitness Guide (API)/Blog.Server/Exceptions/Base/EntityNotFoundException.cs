using Blog.Server.Exceptions.Attributes;

namespace Blog.Server.Exceptions.Base
{
    public class EntityNotFoundException<TEntity> : BlogExceptionBase
    {
        [Log]
        public string EntityType => typeof(TEntity).Name;
    }
}