    import restaurantData from "../mockData/mockdata";
    import RestaurantCard from "./RestaurantCard";
    function Body(){
        return(
            <>
                <div className="search">
                    <input type="text" className="search-input" placeholder="Search Hotel/Food" />
                    <button className="search-btn"><img src="https://static.thenounproject.com/png/4009566-200.png" alt="Search" className="search-icon" /></button>
                    
                </div>
                <div className="restaurant-list">
                    {restaurantData.map((res,index)=>(
                        <RestaurantCard 
                            key={index}
                            image={res.image}
                            name={res.name}
                            location={res.location}
                            description={res.description}
                            rating={res.rating}
                        />
                    ))}
                </div>
                
            </>
        )
    }
    export default Body;
