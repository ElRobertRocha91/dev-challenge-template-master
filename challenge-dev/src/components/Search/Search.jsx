function Search({ value, handleChange, handleSearch }) {

    return (
        <div className="flex flex-col space-y-4 justify-center mx-8 pt-4 md:flex-row md:space-x-4 md:items-center">
            <div className="md:mt-4">
                <input type="text" value={value} placeholder="Search characters..." onChange={handleChange}
                    className="bg-green w-full rounded-full md:px-8" />
            </div>
            <div>
                <button type="button" onClick={handleSearch} 
                className="w-full rounded-full border-4 border-lime-500 bg-green-500 md:px-8">
                    Search
                </button>
            </div>
        </div>
    )
}

export default Search;