import { useState } from "react";
import { useParams } from "react-router-dom";
import mockMenuData from "../mockData/menuMockData";
import useRestaurant from "../utils/useRestaurants";
import { addItem } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const RestaurantMenu = () => {
  const { id } = useParams();
  const restaurant = useRestaurant(id);
  const dispatch = useDispatch();

  const [openCategory, setOpenCategory] = useState(null);

  const addFoodItem = (item) => {
    dispatch(addItem(item));
  };

  const toggleCategory = (index) => {
    setOpenCategory(openCategory === index ? null : index);
  };

  return (
    <div className="flex flex-col md:flex-row gap-6 p-6">
      {/* Left section - Restaurant info */}
      <div className="w-full md:w-1/3 bg-white shadow-md p-4 rounded-2xl">
        <h1 className="text-3xl font-bold mb-2">
          {restaurant || "Loading..."}
        </h1>
        <h3 className="text-gray-600">Restaurant ID: {id}</h3>
      </div>

      {/* Right section - Menu Categories */}
      <div className="w-full md:w-2/3 bg-white shadow-md p-4 rounded-2xl">
        {mockMenuData.categories.map((category, index) => (
          <div
            key={index}
            className="border-b border-gray-300 mb-2 rounded-md"
          >
            <button
              onClick={() => toggleCategory(index)}
              className="w-full flex justify-between items-center p-3 text-left bg-gray-100 hover:bg-gray-200 rounded-md"
            >
              <span className="font-semibold text-lg">{category.title}</span>
              <span className="text-gray-600">
                {openCategory === index ? "▲" : "▼"}
              </span>
            </button>

            {openCategory === index && (
              <div className="p-3 bg-gray-50 rounded-md transition-all">
                {category.items.map((item) => (
                  <div
                    key={item.id}
                    className="flex justify-between items-center border-b border-gray-200 py-2"
                  >
                    <div>
                      <h3 className="font-medium text-base">{item.name}</h3>
                      <p className="text-sm text-gray-600">
                        {item.description}
                      </p>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="font-semibold">₹{item.price}</span>
                      <button
                        className="px-2 py-1 bg-green-100 hover:bg-green-200 text-sm rounded"
                        onClick={() => addFoodItem(item)}
                      >
                        Add
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default RestaurantMenu;
