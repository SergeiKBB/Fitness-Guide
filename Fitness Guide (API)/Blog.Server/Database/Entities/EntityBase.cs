using System;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using Blog.Server.Database.Entities.Base;

namespace Blog.Server.Database.Entities
{
    public abstract class EntityBase : IEntity
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public Guid Id { get; set; }

        public DateTime CreationDate { get; set; }
        public DateTime UpdateDate { get; set; }
    }
}