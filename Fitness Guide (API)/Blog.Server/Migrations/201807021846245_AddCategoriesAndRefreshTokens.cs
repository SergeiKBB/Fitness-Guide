namespace Blog.Server.Migrations
{
    using System.Data.Entity.Migrations;
    
    public partial class AddCategoriesAndRefreshTokens : DbMigration
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
                "dbo.CategoryPosts",
                c => new
                    {
                        Category_Id = c.Guid(nullable: false),
                        Post_Id = c.Guid(nullable: false),
                    })
                .PrimaryKey(t => new { t.Category_Id, t.Post_Id })
                .ForeignKey("dbo.Categories", t => t.Category_Id, cascadeDelete: false)
                .ForeignKey("dbo.Posts", t => t.Post_Id, cascadeDelete: false)
                .Index(t => t.Category_Id)
                .Index(t => t.Post_Id);
            
            AddColumn("dbo.Users", "RefreshToken", c => c.String());
            AlterColumn("dbo.Comments", "AuthorId", c => c.Guid());
            CreateIndex("dbo.Comments", "AuthorId");
            AddForeignKey("dbo.Comments", "AuthorId", "dbo.Users", "Id");
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Comments", "AuthorId", "dbo.Users");
            DropForeignKey("dbo.CategoryPosts", "Post_Id", "dbo.Posts");
            DropForeignKey("dbo.CategoryPosts", "Category_Id", "dbo.Categories");
            DropIndex("dbo.CategoryPosts", new[] { "Post_Id" });
            DropIndex("dbo.CategoryPosts", new[] { "Category_Id" });
            DropIndex("dbo.Comments", new[] { "AuthorId" });
            AlterColumn("dbo.Comments", "AuthorId", c => c.Guid(nullable: false));
            DropColumn("dbo.Users", "RefreshToken");
            DropTable("dbo.CategoryPosts");
            DropTable("dbo.Categories");
            CreateIndex("dbo.Comments", "AuthorId");
            AddForeignKey("dbo.Comments", "AuthorId", "dbo.Users", "Id", cascadeDelete: true);
        }
    }
}
