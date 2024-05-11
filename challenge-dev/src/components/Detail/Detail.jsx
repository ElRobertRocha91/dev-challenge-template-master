import { useQuery, gql } from "@apollo/client";
import { useParams } from "react-router-dom";
import CardDetail from "./CardDetail/CardDetail";
import Loading from "../Loading/Loading";

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

function Detail() {
    const { id } = useParams();

    const { loading, error, data } = useQuery(GET_CHARACTER_BY_ID, {
        variables: { id: id }
    });

    if (loading) return <Loading />
    if (error) return <p>Error: {error.message}</p>

    return (
        <div className="flex justify-center items-center min-h-screen bg-green-900">
            <div className="absolute w-full h-full">
                <div className="flex flex-col justify-center">
                    <div className="p-10">
                        <h3 className="text-center text-2xl font-bold text-white">Detail of Character</h3>
                    </div>
                    <CardDetail data={data} />
                </div>
            </div>
        </div>
    )
}

export default Detail;