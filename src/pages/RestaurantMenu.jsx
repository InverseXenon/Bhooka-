import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import mockMenuData from "../mockData/menuMockData";
import useRestaurant from "../utils/useRestaurants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
    const {id} = useParams();
    const restaurant = useRestaurant(id);
    const dispatch = useDispatch();
    
    const addFoodItem = (item)=>{
        dispatch(addItem(item))
    }
    

    return (
        <div className="flex">
            <div>
            <h1 className="hotel-name">{restaurant || "Loading..."}</h1>
            
            <h3>Restaurant ID: {id}</h3>
            </div>
            
            
            <div className="menu-categories">
                {mockMenuData.categories.map((category, index) => (
                    <div key={index} className="category">
                        <h2>{category.title}</h2>
                        <div className="menu-items">
                            {category.items.map((item) => (
                                <div key={item.id} className="menu-item">
                                    <div className="item-details">
                                        <h3>{item.name}</h3>
                                        <p className="item-price">₹{item.price} - 
                                            <button className="p-1 m-1 bg-green-100"
                                                onClick={()=>addFoodItem(item)}>Add</button></p>
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