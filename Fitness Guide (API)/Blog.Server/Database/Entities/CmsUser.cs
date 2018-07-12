namespace Blog.Server.Database.Entities
{
    public class CmsUser : EntityBase
    {
        public string Email { get; set; }
        public string Password { get; set; }
        public string RefreshToken { get; set; }
    }
}