function CardDetail({ data }){
    return (
        <div>
            {data && (
                <div>
                    <img src={data.character.image} alt={data.character.name}/>
                    <br/>
                    <h3>{data.character.name}</h3>
                    <p>Species: {data.character.species}</p>
                    <p>Status: {data.character.status}</p>
                    <p>Origin: {data.character.origin.name}</p>
                </div>
            )}
        </div>
    )
}

export default CardDetail;