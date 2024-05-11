import { Link } from "react-router-dom";

function Card({ id, image, name, gender }) {
    
    return (
        <div className="bg-black border-4 border-lime-500 rounded-lg hover:-translate-y-6">
            <img src={image} alt={name} className="rounded-md"/>
            <Link to={`/detail/${id}`}>
                <h3 className="text-center text-white text-lg">{name}</h3>
            </Link>
            <h5 className="text-center text-white">{gender}</h5>
        </div>
    )
}

export default Card;