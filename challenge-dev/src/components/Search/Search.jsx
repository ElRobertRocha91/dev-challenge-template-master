function Search({ value, handleChange, handleSearch }) {

    return (
        <div className="flex justify-center p-4">
            <input type="text" value={value} placeholder="Search characters..." onChange={handleChange} />
            <button type="button" onClick={handleSearch}>Search</button>
        </div>
    )
}

export default Search;