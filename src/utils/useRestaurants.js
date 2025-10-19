import { useState,useEffect } from "react";
import {FETCH_MENU_URL} from "../utils/constants"

const useRestaurant = (id) =>{
    const [restaurant,setRestaurant] = useState(null);

    // Get data from API/MockData
    useEffect(() => {
    if (id) getRestaurantInfo();
    }, [id]);


    async function getRestaurantInfo() {
        const data = await fetch(
            (FETCH_MENU_URL)
        );
        const json = await data.json();
        
        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        
        const restaurant = restaurants.find(res => res.info.id === id);
        
        if(restaurant) {
            setRestaurant(restaurant.info.name);
        }
    }

    //return restaurant data

    return restaurant;
}

export default useRestaurant;