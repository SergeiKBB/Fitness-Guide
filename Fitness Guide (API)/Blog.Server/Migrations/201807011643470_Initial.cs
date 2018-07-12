namespace Blog.Server.Migrations
{
    using System.Data.Entity.Migrations;
    
    public partial class Initial : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Comments",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        PostId = c.Guid(nullable: false),
                        Content = c.String(),
                        AuthorId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.AuthorId, cascadeDelete: false)
                .ForeignKey("dbo.Posts", t => t.PostId, cascadeDelete: false)
                .Index(t => t.PostId)
                .Index(t => t.AuthorId);
            
            CreateTable(
                "dbo.Users",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        FirstName = c.String(),
                        LastName = c.String(),
                        Email = c.String(),
                        Password = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.Posts",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Title = c.String(),
                        Description = c.String(),
                        AuthorId = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Users", t => t.AuthorId, cascadeDelete: true)
                .Index(t => t.AuthorId);
            
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Comments", "PostId", "dbo.Posts");
            DropForeignKey("dbo.Comments", "AuthorId", "dbo.Users");
            DropForeignKey("dbo.Posts", "AuthorId", "dbo.Users");
            DropIndex("dbo.Posts", new[] { "AuthorId" });
            DropIndex("dbo.Comments", new[] { "AuthorId" });
            DropIndex("dbo.Comments", new[] { "PostId" });
            DropTable("dbo.Posts");
            DropTable("dbo.Users");
            DropTable("dbo.Comments");
        }
    }
}
