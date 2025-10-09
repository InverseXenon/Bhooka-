    import restaurantData from "../mockData/mockdata";
    import RestaurantCard from "./RestaurantCard";
    import { useEffect, useState } from "react";
    import Shimmer from "./Shimmer";

    function filterData(query, hotels){
        return hotels.filter((hotels)=>
             hotels.name.includes(query)


        )
    }

    function Body(){
        const [filteredHotels, setFilteredHotels] = useState([]);
        const [allHotels,setAllHotels] = useState(restaurantData);
        const [query, setQuery] = useState("");

        useEffect(()=>{
            fetchData();
        },[]);

        // Conditional Rendering!
        // If restaurant is empty => Shimmer UI
        // If restaurant has data => Actual Data UI

        async function fetchData(){
            const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING")
            const json = await data.json();
            console.log(json);

            const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

             console.log("✅ API Restaurants:", restaurants);
             const formatted = restaurants.map((res)=>({
                name: res.info.name,
                image: "https://media-assets.swiggy.com/" + res.info.cloudinaryImageId,
                location: res.info.areaName,
                description: res.info.cuisines?.join(", "),
                rating: res.info.avgRating,
             }));

             setFilteredHotels(formatted);
             setAllHotels(formatted);
            
        }

        return filteredHotels.length === 0 ?( <Shimmer />):(
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
                        const data = filterData(query,allHotels);
                        setFilteredHotels(data);
                     }}
                    ><img src="https://static.thenounproject.com/png/4009566-200.png" alt="Search" className="search-icon" /></button>
                    
                </div>
                <div className="restaurant-list">
                    {filteredHotels.map((res,index)=>(
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
