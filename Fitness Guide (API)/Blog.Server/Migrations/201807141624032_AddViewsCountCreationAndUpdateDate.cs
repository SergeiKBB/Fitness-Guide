namespace Blog.Server.Migrations
{
    using System;
    using System.Data.Entity.Migrations;
    
    public partial class AddViewsCountCreationAndUpdateDate : DbMigration
    {
        public override void Up()
        {
            AddColumn("dbo.Categories", "CreationDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.Categories", "UpdateDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.Posts", "ViewsCount", c => c.Int(nullable: false));
            AddColumn("dbo.Posts", "CreationDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.Posts", "UpdateDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.Users", "CreationDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.Users", "UpdateDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.Comments", "CreationDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.Comments", "UpdateDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.CmsUsers", "CreationDate", c => c.DateTime(nullable: false));
            AddColumn("dbo.CmsUsers", "UpdateDate", c => c.DateTime(nullable: false));
        }
        
        public override void Down()
        {
            DropColumn("dbo.CmsUsers", "UpdateDate");
            DropColumn("dbo.CmsUsers", "CreationDate");
            DropColumn("dbo.Comments", "UpdateDate");
            DropColumn("dbo.Comments", "CreationDate");
            DropColumn("dbo.Users", "UpdateDate");
            DropColumn("dbo.Users", "CreationDate");
            DropColumn("dbo.Posts", "UpdateDate");
            DropColumn("dbo.Posts", "CreationDate");
            DropColumn("dbo.Posts", "ViewsCount");
            DropColumn("dbo.Categories", "UpdateDate");
            DropColumn("dbo.Categories", "CreationDate");
        }
    }
}
