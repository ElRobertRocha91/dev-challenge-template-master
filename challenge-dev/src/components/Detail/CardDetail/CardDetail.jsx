function CardDetail({ data }) {
    return (
        <div className="flex justify-center">
            {data && (
                <div className="flex flex-col justify-center space-x-5 border-4 border-lime-600 rounded-lg bg-black">
                    <div>
                        <img className="rounded"
                        src={data.character.image} 
                        alt={data.character.name} />
                    </div>
                    <div className="flex flex-col justify-center">
                        <h3 className="text-white text-center text-xl">{data.character.name}</h3>
                        <p className="text-white">Species: {data.character.species}</p>
                        <p className="text-white">Status: {data.character.status}</p>
                        <p className="text-white">Origin: {data.character.origin.name}</p>
                    </div>
                </div>
            )}
        </div>
    )
}

export default CardDetail;