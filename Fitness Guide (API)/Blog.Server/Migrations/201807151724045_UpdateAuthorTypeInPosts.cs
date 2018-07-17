namespace Blog.Server.Migrations
{
    using System.Data.Entity.Migrations;
    
    public partial class UpdateAuthorTypeInPosts : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Posts", "AuthorId", "dbo.Users");
            AddForeignKey("dbo.Posts", "AuthorId", "dbo.CmsUsers", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Posts", "AuthorId", "dbo.CmsUsers");
            AddForeignKey("dbo.Posts", "AuthorId", "dbo.Users", "Id", cascadeDelete: true);
        }
    }
}
