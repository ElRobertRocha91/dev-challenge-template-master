import { Link } from "react-router-dom";

function Card({ id, image, name, gender }) {
    
    return (
        <div className="border-4 border-sky-500 rounded-lg hover:-translate-y-6">
            <img src={image} alt={name} className="rounded-md"/>
            <Link to={`/detail/${id}`}>
                <h3 className="text-center">{name}</h3>
            </Link>
            <br />
            <h5 className="text-center">{gender}</h5>
        </div>
    )
}

export default Card;