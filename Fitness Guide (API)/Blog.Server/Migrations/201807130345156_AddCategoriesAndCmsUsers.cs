namespace Blog.Server.Migrations
{
    using System.Data.Entity.Migrations;
    
    public partial class AddCategoriesAndCmsUsers : DbMigration
    {
        public override void Up()
        {
            DropForeignKey("dbo.Comments", "AuthorId", "dbo.Users");
            DropIndex("dbo.Comments", new[] { "AuthorId" });
            CreateTable(
                "dbo.Categories",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Name = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.CmsUsers",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Email = c.String(),
                        Password = c.String(),
                        RefreshToken = c.String(),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.PostCategories",
                c => new
                    {
                        Post_Id = c.Guid(nullable: false),
                        Category_Id = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => new { t.Post_Id, t.Category_Id })
                .ForeignKey("dbo.Posts", t => t.Post_Id, cascadeDelete: true)
                .ForeignKey("dbo.Categories", t => t.Category_Id, cascadeDelete: true)
                .Index(t => t.Post_Id)
                .Index(t => t.Category_Id);
            
            AddColumn("dbo.Users", "RefreshToken", c => c.String());
            AlterColumn("dbo.Comments", "AuthorId", c => c.Guid());
            CreateIndex("dbo.Comments", "AuthorId");
            AddForeignKey("dbo.Comments", "AuthorId", "dbo.Users", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Comments", "AuthorId", "dbo.Users");
            DropForeignKey("dbo.PostCategories", "Category_Id", "dbo.Categories");
            DropForeignKey("dbo.PostCategories", "Post_Id", "dbo.Posts");
            DropIndex("dbo.PostCategories", new[] { "Category_Id" });
            DropIndex("dbo.PostCategories", new[] { "Post_Id" });
            DropIndex("dbo.Comments", new[] { "AuthorId" });
            AlterColumn("dbo.Comments", "AuthorId", c => c.Guid(nullable: false));
            DropColumn("dbo.Users", "RefreshToken");
            DropTable("dbo.PostCategories");
            DropTable("dbo.CmsUsers");
            DropTable("dbo.Categories");
            CreateIndex("dbo.Comments", "AuthorId");
            AddForeignKey("dbo.Comments", "AuthorId", "dbo.Users", "Id", cascadeDelete: true);
        }
    }
}
