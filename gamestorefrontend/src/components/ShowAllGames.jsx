import {useState} from 'react'
function ShowAllGames() {

    const [games, setGames] = useState(null)
    const [loading, setLoading] = useState(false)
    function ShowTheGames() {
        setLoading(true)
        fetch("https://localhost:7187/api/games")
            .then(response => response.json())
            .then(games => {
                setGames(games)
                setLoading(false)
            })
    }

    return (
        <>
            <button 
                onClick={ShowTheGames}
                className = "bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
                Show all the games
            </button>

            {loading && <p>Loading games...</p>}

            {games && games.map(game =>
                <div className="grid grid-cols-3 gap-4"
                    key={game.id}
                    clasName="bg-gray-800 text-white p-4 rounded-lg mb-3"
                >

                    <p>{game.id}</p>
                    <p>{game.name} NOK</p>
                </div>

            )}

        </>
    )
}

export default ShowAllGames