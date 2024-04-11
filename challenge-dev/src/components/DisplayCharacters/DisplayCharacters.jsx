import { useQuery, gql } from "@apollo/client"; 
import Cards from "../Cards/Cards";

const GET_CHARACTERS = gql`
query GetCharacters {
  characters {
    results {
      id
      image
      name
      gender
    }
  }
}`

function DisplayCharacters() {
  const { loading, error, data } = useQuery(GET_CHARACTERS);

  if(loading) return <p>Loading...</p>
  if(error) return <p>Error: {error.message}</p>
  
  return (
    <div>
      <h1>Characters</h1>
      <Cards data={data}/>
    </div>
  )
}

export default DisplayCharacters;