import { useEffect, useState, useContext } from "react";
import { Link } from "react-router-dom";
import restaurantData from "../mockData/mockdata";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { IMG_CDN_URL, RES_LIST_URL } from "../utils/constants";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";

function filterData(query, hotels) {
  return hotels.filter((hotel) =>
    hotel?.name?.toLowerCase()?.includes(query?.toLowerCase())
  );
}

function Body() {
  const [filteredHotels, setFilteredHotels] = useState([]);
  const [allHotels, setAllHotels] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const { user, setUser } = useContext(userContext);

  useEffect(() => {
    fetchData();
  }, []);

  async function fetchData() {
    try {
      setLoading(true);
      const data = await fetch(RES_LIST_URL);
      const json = await data.json();

      const restaurants =
        json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle
          ?.restaurants || [];

      const formatted = restaurants.map((res) => ({
        id: res.info.id,
        name: res.info.name,
        image: IMG_CDN_URL + res.info.cloudinaryImageId,
        location: res.info.areaName,
        description: res.info.cuisines?.join(", "),
        rating: res.info.avgRating,
      }));

      setFilteredHotels(formatted);
      setAllHotels(formatted);
    } catch (error) {
      console.error("Error fetching data:", error);
    } finally {
      setLoading(false);
    }
  }

  const isOnline = useOnline();
  if (!isOnline)
    return (
      <h1 className="text-center text-red-600 font-semibold mt-20 text-xl">
        ⚠️ Please check your internet connection ⚠️
      </h1>
    );

  if (loading) return <Shimmer />;

  return (
    <>
      {/* 🔍 Search Bar */}
      <div className="flex items-center max-w-lg mx-auto p-2 sm:p-3 bg-white border border-gray-200 rounded-xl shadow-sm my-6">
        <input
          type="text"
          className="flex-grow px-4 py-2 rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-gray-800 placeholder-gray-500"
          placeholder="Search Restaurant or Food..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <button
          className="h-10 px-4 bg-blue-600 hover:bg-blue-700 text-white rounded-r-lg flex items-center justify-center transition duration-300"
          onClick={() => {
            const data = filterData(query, allHotels);
            setFilteredHotels(data);
          }}
        >
          <img
            src="https://static.thenounproject.com/png/4009566-200.png"
            alt="Search"
            className="h-5 w-5"
          />
        </button>
      </div>

      {/* 🏨 Restaurant Grid */}
      {filteredHotels.length === 0 ? (
        <h2 className="text-center text-gray-600 mt-10 text-lg font-medium">
          No restaurants found 🍽️
        </h2>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 px-6 pb-10">
          {filteredHotels.map((res) => (
            <Link
              to={`/restaurant/${res.id}`}
              key={res.id}
              className="text-inherit no-underline"
            >
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
      )}
    </>
  );
}

export default Body;
