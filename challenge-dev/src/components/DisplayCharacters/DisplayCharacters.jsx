import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import Search from "../Search/Search";
import Cards from "../Cards/Cards";
import Filters from "../Filters/Filters";

const GET_CHARACTERS = gql`
query GetCharacters($page: Int!, $filter: FilterCharacter) {
  characters(page: $page, filter: $filter){
    results {
      id
      image
      name
      gender
    }
    info {
      count
      pages
      next
      prev
    }
  }
}`

function DisplayCharacters() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [character, setCharacter] = useState("");
  const [filter, setFilter] = useState({
    status: "",
    species: "",
    gender: ""
  });
  
  const { loading, error, data, } = useQuery(GET_CHARACTERS, {
    variables: {
      page: page,
      filter: {
        name: character,
        ...filter
      }
    }
  });

  const handleChange = (e) => {
    setName(e.target.value);
  }

  const handleSearch = () => {
    setCharacter(name);
    setPage(1);
    setName("");
  }

  const handleFilter = (e) => {
    const { name, value } = e.target;
    setFilter((prevFilter) => ({
      ...prevFilter,
      [name]: value
    }));
  }

  const handleClean = () => {
    setCharacter("");
    setFilter({
      status: "",
      species: "",
      gender: ""
    });
  } 

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <Search value={name} handleChange={handleChange} handleSearch={handleSearch} />
      <Filters value={filter} handleFilter={handleFilter} handleClean={handleClean} />
      <div className="flex justify-around p-4">
        <button disabled={page === 1} onClick={() => setPage((num) => num - 1)}>Previous</button>
        <span>Page {page}</span>
        <button disabled={!data.characters.info.next} onClick={() => setPage((num) => num + 1)}>Next</button>
      </div>
      <Cards data={data} />
    </div>
  )
}

export default DisplayCharacters;