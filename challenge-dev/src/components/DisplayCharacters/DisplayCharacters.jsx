import { useQuery, gql } from "@apollo/client";
import { useState } from "react";
import Search from "../Search/Search";
import Cards from "../Cards/Cards";

const GET_CHARACTERS = gql`
query GetCharacters($page: Int!, $name: String!) {
  characters(page: $page, filter: {name: $name}){
    results {
      id
      image
      name
      gender
    }
    info {
      next
    }
  }
}`

function DisplayCharacters() {
  const [page, setPage] = useState(1);
  const [name, setName] = useState("");
  const [character, setCharacter] = useState("");
  const { loading, error, data, } = useQuery(GET_CHARACTERS, {
    variables: {
      page: page,
      name: character,
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

  if (loading) return <p>Loading...</p>
  if (error) return <p>Error: {error.message}</p>

  return (
    <div>
      <Search name={name} handleChange={handleChange} handleSearch={handleSearch} />
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