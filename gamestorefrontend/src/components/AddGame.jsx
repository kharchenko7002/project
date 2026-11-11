import { useState} from 'react'
function AddGame() {

    const [gameName, setGameName] = useState("")
    const [gamePrice, setGamePrice] = useState("")

    function addGame() {
        fetch("https://localhost:7187/games", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                name: gameName,
                price: Number(gamePrice)
            })
        })
            .then(response => console.log(response.status))
    }

    return (
        <>

        <h2>Add Game</h2>

        <input
                type="text"
                placeholder="Game name"
                value={gameName}
                onChange={e => setGameName(e.target.value)}
            />

        <input
                type="number"
                placeholder="Game price"
                value={gamePrice}
                onChange={e => setGamePrice(e.target.value)}
            />


            <button onClick={addGame}>Add Game</button>


        </>
    )
}

export default AddGame