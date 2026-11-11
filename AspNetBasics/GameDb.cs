using Microsoft.EntityFrameworkCore;
namespace AspNetBasics
{
    public class GameDb : DbContext
    {
        public DbSet<Game> Games { get; set; }

        public GameDb(DbContextOptions<GameDb> options)
            : base(options)
        {

        }

    }


}
