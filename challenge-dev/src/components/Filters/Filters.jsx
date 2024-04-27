function Filters({ value, handleFilter, handleClean}){
  
    return (
        <div className="flex justify-center p-2">
        <select name="status" value={value.status || ""} onChange={handleFilter}>
          <option value="">Status</option>
          <option value="Alive">Alive</option>
          <option value="Dead">Dead</option>
          <option value="unknown">Unknown</option>
        </select>
        <select name="species" value={value.species || ""} onChange={handleFilter}>
          <option value="">Specie</option>
          <option value="Human">Human</option>
          <option value="Alien">Alien</option>
          <option value="Robot">Robot</option>
          <option value="Humanoid">Humanoid</option>
          <option value="Mythological Creature">Mythological Creature</option>
          <option value="Unknown">Unknown</option>
        </select>
        <select name="gender" value={value.gender || ""} onChange={handleFilter}>
          <option value="">Gender</option>
          <option value="Female">Female</option>
          <option value="Male">Male</option>
          <option value="Genderless">Genderless</option>
          <option value="unknown">Unknown</option>
        </select>
        <button onClick={handleClean}>
          Clean
        </button>
      </div>
    )
}

export default Filters;