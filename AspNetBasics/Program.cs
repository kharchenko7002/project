using AspNetBasics;
using Microsoft.EntityFrameworkCore;

var builder = WebApplication.CreateBuilder(args);

builder.Services.AddControllers();

builder.Services.AddDbContext<GameDb>(options =>
    options.UseSqlServer(
        builder.Configuration.GetConnectionString("GameStore")
    )
);

builder.Services.AddCors(options =>
{
    options.AddPolicy("React", policy =>
    {
        policy.WithOrigins("http://localhost:5173")
              .AllowAnyHeader()
              .AllowAnyMethod();
    });
});

var app = builder.Build();


app.UseCors("React");
app.MapControllers();


app.Run();

//app.MapPost("/games", async (Game game, GameDb db) => 
//{
//    db.Games.Add(game);
//    await db.SaveChangesAsync();
//    return Results.Created();
//}
//);


//app.MapGet("/games", async (GameDb db) => 
//{
//    var games = await db.Games.ToListAsync();
//    return Results.Ok(games);
//});



//app.MapGet("/games/{id}", async (int id, GameDb db) => 
//{
//    var game = await db.Games.FindAsync(id);
//    if (game == null) return Results.NotFound();
//    return Results.Ok(game);
//});


//app.MapPut("/games/{id}", async (int id, Game inputGame, GameDb db) =>
//{
//    var game = await db.Games.FindAsync(id);
//    if (game == null) return Results.NotFound();
//    game.Name = inputGame.Name;
//    game.Price = inputGame.Price;
//    db.Games.Add(game.Name, game.Price);
//    await db.SaveChangesAsync();
//    return Results.Ok(game);
//});

