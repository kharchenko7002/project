using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace AspNetBasics.Controllers
{
    [ApiController]
    [Route("api/[controller]")]
    public class GamesController : ControllerBase
    {
        private readonly GameDb _db;

        public GamesController(GameDb db)
        {
            _db = db;
        }


        [HttpGet]
        public async Task<IActionResult> GetGames()
        {
            var games = await _db.Games.ToListAsync();
            return Ok(games);
        }

        [HttpGet("{id}")]
        public async Task<IActionResult> GetGameById(int id)
        {
            var game = await _db.Games.FindAsync(id);
            if (game == null) return NotFound();
            return Ok(game);
        }



        [HttpPost]
        public async Task<IActionResult> CreateGame(Game game)
        {
            _db.Games.Add(game);
            await _db.SaveChangesAsync();
            return Created($"/api/games{game.Id}", game);
        }


        [HttpPut("{id}")]
        public async Task<IActionResult> UpdateGame(int id, Game inputGame)
        {
            var game = await _db.Games.FindAsync(id);
            if (game == null) return NotFound();
            game.Name = inputGame.Name;
            game.Price = inputGame.Price;
            await _db.SaveChangesAsync();
            return Ok("Game updated successfully!");
        }

        [HttpDelete("{id}")]
        public async Task<IActionResult> DeleteGame(int id)
        {
            var game = await _db.Games.FindAsync(id);
            if (game == null) return NotFound();
            _db.Games.Remove(game);
            await _db.SaveChangesAsync();
            return Ok($"Game with id: {id} was removed");
        }

    }

    
}
