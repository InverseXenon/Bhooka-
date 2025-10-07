    import restaurantData from "../mockData/mockdata";
    import RestaurantCard from "./RestaurantCard";
    import { useState } from "react";

    function filterData(query, hotels){
        return hotels.filter((hotels)=>
             hotels.name.includes(query)


        )
    }

    function Body(){
        const [hotels, setHotels] = useState(restaurantData);
        const [query, setQuery] = useState("");

        return(
            <>
            
                <div className="search">
                    
                    <input type="text"
                     className="search-input" 
                     placeholder="Search Hotel/Food" 
                     value={query}
                     onChange={(e) =>{
                        setQuery(e.target.value);
                     }}/>
                    <button className="search-btn" 
                     onClick={()=>{
                        const data = filterData(query,hotels);
                        setHotels(data);
                     }}
                    ><img src="https://static.thenounproject.com/png/4009566-200.png" alt="Search" className="search-icon" /></button>
                    
                </div>
                <div className="restaurant-list">
                    {hotels.map((res,index)=>(
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
