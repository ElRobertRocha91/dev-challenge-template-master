import Card from "../Card/Card";

function Cards({ data }) {
    // console.log(data);
    return (
        <div>
            {data.characters.results.map(character => (
                <Card
                    key={character.id}
                    id={character.id}
                    image={character.image}
                    name={character.name}
                    gender={character.gender} />
            ))}
        </div>
    )
}

export default Cards;