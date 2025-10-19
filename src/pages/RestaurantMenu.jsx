import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mockMenuData from "../mockData/menuMockData";
import useRestaurant from "../utils/useRestaurants";

const RestaurantMenu = () => {
    const {id} = useParams();
    const restaurant = useRestaurant(id);

    

    return (
        <div className="menu">
            <h1 className="hotel-name">{restaurant || "Loading..."}</h1>
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