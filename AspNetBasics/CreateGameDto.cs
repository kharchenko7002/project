namespace AspNetBasics
{
    public record CreateGameDto(
    int Id,
    string Name,
    string Genre,
    decimal Price
    );
}
