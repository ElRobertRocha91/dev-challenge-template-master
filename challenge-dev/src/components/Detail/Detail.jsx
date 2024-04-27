import { useQuery, gql} from "@apollo/client";
import { useParams } from "react-router-dom";
import CardDetail from "./CardDetail/CardDetail";

const GET_CHARACTER_BY_ID = gql`
query Character($id: ID!) {
    character (id: $id) {
        id
        image
        name
        species
        status
        origin{name}
    }
}`

function Detail(){
    const { id } = useParams();
    
    const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID, {
        variables: { id: id }});
    
    if(loading) return <p>Loading...</p>
    if(error) return <p>Error: {error.message}</p>

    return (
        <div className='p-4'>
            <h3 className="text-center">Detail of Character</h3>
            <CardDetail data={data}/>
        </div>
    )
}

export default Detail;