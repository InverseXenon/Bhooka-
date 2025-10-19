import restaurantData from "../mockData/mockdata";
import RestaurantCard from "./RestaurantCard";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import {IMG_CDN_URL,RES_LIST_URL} from "../utils/constants";
import useOnline from "../utils/useOnline";

function filterData(query, hotels){
    return hotels.filter((hotels)=>
            hotels?.name?.toLowerCase()?.includes(query?.toLowerCase())
    )
}

function Body(){
    const [filteredHotels, setFilteredHotels] = useState([]);
    const [allHotels,setAllHotels] = useState(restaurantData);
    const [query, setQuery] = useState("");

    useEffect(()=>{
        fetchData();
    },[]);

    async function fetchData(){
        const data = await fetch(RES_LIST_URL)
        const json = await data.json();
        
        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];

        const formatted = restaurants.map((res)=>({
            id: res.info.id,
            name: res.info.name,
            image: IMG_CDN_URL + res.info.cloudinaryImageId,
            location: res.info.areaName,
            description: res.info.cuisines?.join(", "),
            rating: res.info.avgRating,
        }));

        setFilteredHotels(formatted);
        setAllHotels(formatted);
    }

    const isOnline = useOnline();

    if (!isOnline){
        return <h1 className="warning">⚠️Check your Internet Connection⚠️</h1>
    }

    if(!allHotels) return null;

    return filteredHotels?.length === 0 ?( <Shimmer />):(
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
                {
                filteredHotels.map((res)=>(
                    <Link to={`/restaurant/${res.id}`} key={res.id} style={{textDecoration: 'none', color: 'inherit'}}>
                        <RestaurantCard 
                            image={res.image}
                            name={res.name}
                            location={res.location}
                            description={res.description}
                            rating={res.rating}
                        />
                    </Link>
                ))}
            </div>
        </>
    )
}
export default Body;