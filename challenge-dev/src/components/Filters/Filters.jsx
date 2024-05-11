function Filters({ value, handleFilter, handleClean }) {

  return (
    <div className="flex flex-col space-y-4 justify-center mx-8 pt-4 md:grid md:grid-cols-4 md:gap-4 md:space-x-2 md:items-center">
      <div className="md:mt-4">
        <select name="status" value={value.status || ""} onChange={handleFilter}
        className="rounded-full w-full px-4 border-2 border-green-900">
          <option value="">Status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div>
        <select name="species" value={value.species || ""} onChange={handleFilter}
        className="rounded-full w-full px-4 border-2 border-green-900">
          <option value="">Specie</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
          <option value="Robot">Robot</option>
          <option value="Humanoid">Humanoid</option>
          <option value="Mythological Creature">Mythological Creature</option>
          <option value="Unknown">Unknown</option>
        </select>
      </div>
      <div>
        <select name="gender" value={value.gender || ""} onChange={handleFilter}
        className="rounded-full w-full px-4 border-2 border-green-900">
          <option value="" className="">Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
      </div>
      <div>
        <button onClick={handleClean} className="rounded-full w-full px-3 bg-green-500 border-4 border-lime-500">
          Clean
        </button>
      </div>
    </div>
  )
}

export default Filters;