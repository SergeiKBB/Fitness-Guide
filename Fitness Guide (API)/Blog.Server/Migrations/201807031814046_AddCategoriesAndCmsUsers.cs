namespace Blog.Server.Migrations
{
    using System.Data.Entity.Migrations;
    
    public partial class AddCategoriesAndCmsUsers : DbMigration
    {
        public override void Up()
        {
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
        }
        
        public override void Down()
        {
            DropTable("dbo.CmsUsers");
        }
    }
}
