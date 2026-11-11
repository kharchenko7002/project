import { useState} from 'react'
function FindById() {

    const [searchId, setSearchId] = useState("")
    const [error, setError] = useState("")
    const [game, setGame] = useState(null)


    function findById() {
        fetch(`https://localhost:7187/api/games/${searchId}`)
            .then(response => {
                if (response.status === 404) {
                    console.log("Game not found")
                    return null
                }

                return response.json()
            })
            .then(game => {
                if (game === null) {
                    setError("Game not found!")
                    setGame(null)
                } else {
                    setError("")
                    setGame(game)
                }
            })
    }

    return (
        <>

            <input
                className="border borde-gray-300 rounded-lg px-3 py-2"
                type="text"
                placeholder="Write ID to the game"
                value={searchId}
                onChange={e => setSearchId(e.target.value)}
            />

            <button
                onClick={findById}
                className="bg-blue-600 text-white px-4 py-2 rounded-lg hover:bg-blue-700"
            >
                Find the game by ID
            </button>

            {error && <p>{error}</p>}

            {game &&
                <div className="bg-gray-800 text-white p-4 rounded-lg mt-4 max-w-sm mx-auto">
                    <p className="text-sm text-gray-300">{game.id}</p>
                    <p className="text-xl font-bold">{game.name}</p>
                    <p className="text-green-400">{game.price} NOK </p>
               </div>
            }


        </>
    )
}

export default FindById
