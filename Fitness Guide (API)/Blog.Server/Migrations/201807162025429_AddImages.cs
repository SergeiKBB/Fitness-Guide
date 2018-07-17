namespace Blog.Server.Migrations
{
    using System.Data.Entity.Migrations;
    
    public partial class AddImages : DbMigration
    {
        public override void Up()
        {
            CreateTable(
                "dbo.Images",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        Url = c.String(),
                        CreationDate = c.DateTime(nullable: false),
                        UpdateDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id);
            
            CreateTable(
                "dbo.ImageTransforms",
                c => new
                    {
                        Id = c.Guid(nullable: false, identity: true),
                        ImageId = c.Guid(nullable: false),
                        TransformName = c.String(),
                        Url = c.String(),
                        CreationDate = c.DateTime(nullable: false),
                        UpdateDate = c.DateTime(nullable: false),
                    })
                .PrimaryKey(t => t.Id)
                .ForeignKey("dbo.Images", t => t.ImageId, cascadeDelete: true)
                .Index(t => t.ImageId);
            
            AddColumn("dbo.Posts", "ImageId", c => c.Guid(nullable: false));
            CreateIndex("dbo.Posts", "ImageId");
            AddForeignKey("dbo.Posts", "ImageId", "dbo.Images", "Id", cascadeDelete: true);
        }
        
        public override void Down()
        {
            DropForeignKey("dbo.Posts", "ImageId", "dbo.Images");
            DropForeignKey("dbo.ImageTransforms", "ImageId", "dbo.Images");
            DropIndex("dbo.ImageTransforms", new[] { "ImageId" });
            DropIndex("dbo.Posts", new[] { "ImageId" });
            DropColumn("dbo.Posts", "ImageId");
            DropTable("dbo.ImageTransforms");
            DropTable("dbo.Images");
        }
    }
}
