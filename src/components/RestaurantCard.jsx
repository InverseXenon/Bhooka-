function RestaurantCard({name, location, description, image, rating}){
    return(
        <>
            <div className="card">
                <img src={image} alt={name} className="card-img" />
                <h2>{name}</h2>
                <h3>📍{location}</h3>
                <p>{description}</p>
                <h3>{rating} stars</h3>
            </div>
        </>
    )
}

export default RestaurantCard;