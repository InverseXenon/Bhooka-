import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mockMenuData from "../mockData/menuMockData";

const RestaurantMenu = () => {
    const {id} = useParams();
    const [restaurantName, setRestaurantName] = useState("");

    useEffect(()=>{
        getRestaurantInfo();
    },[]);

    async function getRestaurantInfo() {
        const data = await fetch(
            `https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.07480&lng=72.88560&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING`
        );
        const json = await data.json();
        
        const restaurants = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants || [];
        
        const restaurant = restaurants.find(res => res.info.id === id);
        
        if(restaurant) {
            setRestaurantName(restaurant.info.name);
        }
    }

    return (
        <div className="menu">
            <h1 className="hotel-name">{restaurantName || "Loading..."}</h1>
            <h3>Restaurant ID: {id}</h3>
            
            
            <div className="menu-categories">
                {mockMenuData.categories.map((category, index) => (
                    <div key={index} className="category">
                        <h2>{category.title}</h2>
                        <div className="menu-items">
                            {category.items.map((item) => (
                                <div key={item.id} className="menu-item">
                                    <div className="item-details">
                                        <h3>{item.name}</h3>
                                        <p className="item-price">₹{item.price}</p>
                                        <p className="item-description">{item.description}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RestaurantMenu;