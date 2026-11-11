import AddGame from './components/AddGame'
import FindById from './components/FindById'
import ShowAllGames from './components/ShowAllGames'
import UpdateGame from './components/UpdateGame'


function App() {


    return (
        <>
            <h1 className="text-4xl font-bold text-blue-500">
                Game Store
            </h1>

            <AddGame />
            <FindById />
            <ShowAllGames />
            <UpdateGame/>

        </>
    )
}

export default App