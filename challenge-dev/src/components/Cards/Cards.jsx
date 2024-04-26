import Card from "../Card/Card";

function Cards({ data }) {
    // console.log(data);
    return (
        <div className="grid grid-cols-4 gap-x-4 gap-y-8 justify-items-center py-4">
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