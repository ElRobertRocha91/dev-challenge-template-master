import { Link } from "react-router-dom";

function Card({ id, image, name, gender }) {
    // console.log(id);
    return (
        <div>
            <img src={image} alt={name} />
            <Link to={`/detail/${id}`}>
                <h3>{name}</h3>
            </Link>
            <br />
            <h5>{gender}</h5>
        </div>
    )
}

export default Card;