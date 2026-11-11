import { useState } from 'react'
function UpdateGame() {

    const [gameId, setGameId] = useState("")
    const [gameName, setGameName] = useState("")
    const [gamePrice, setGamePrice] = useState("")



    function updateGame() {
        fetch(`https://localhost:7187/games/${gameId}`, {
            method: "PUT",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: gameName,
                price: Number(gamePrice)
            })
        })
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Error: ${response.status}`)
                }

                return response.json()
            })
            .then(updatedGame => {
                console.log("Game updated successfully:", updatedGame)
            })
            .catch(error => {
                console.error("Failed to update game:", error)
            })
    }

    return (
        <>
            <input
                type="text"
                placeholder="Write the new game ID"
                value={gameId}
                onChange={e => setGameId(e.target.value)}
            />

            <input
                type="text"
                placeholder="Write the new name"
                value={gameName}
                onChange={e => setGameName(e.target.value)}
            />

            <input
                type="text"
                placeholder="Write the new price"
                value={gamePrice}
                onChange={e => setGamePrice(e.target.value)}
            />
            <button onClick={updateGame}>Update Game</button>
        </>
    )
}

export default UpdateGame 