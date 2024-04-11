import DisplayCharacters from "../DisplayCharacters/DisplayCharacters";


function HomePage() {
    return (
        <main className=''>
            <div>
                <h1 className="text-3xl font-bold underline text-center">My App RickAndMorty</h1>
            </div>
            <br />
            <div>
                <h3 className='text-center'>===== Search Results =====</h3>
            </div>
            <DisplayCharacters />
        </main>
    )
}

export default HomePage;