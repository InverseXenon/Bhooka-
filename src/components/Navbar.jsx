import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

function Navbar() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const isOnline = useOnline();
  const { user } = useContext(userContext);
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <nav className="bg-gradient-to-r from-purple-100 via-pink-50 to-red-50 shadow-lg sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-28">
          {/* Logo */}
          <Link to="/">
            <img
              src="https://m.media-amazon.com/images/I/51gmgLecQsL.jpg"
              alt="Bhooka Logo"
              className="h-20 md:h-24 rounded-lg shadow-sm hover:scale-105 transition-transform duration-300"
            />
          </Link>

          {/* Title + Online Status */}
          <h1 className="text-2xl md:text-4xl font-extrabold text-gray-800 px-4">
            {isOnline ? "✅" : "⚠️"}  BHOOKA!
          </h1>

          {/* Navigation Links */}
          <div className="hidden md:flex items-center space-x-3">
            <Link to="/">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                Home
              </button>
            </Link>
            <Link to="/about">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                About Us
              </button>
            </Link>
            <Link to="/contact">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                Contact Us
              </button>
            </Link>
            <Link to="/instamangao">
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300">
                InstaMangao
              </button>
            </Link>
            <Link to="/cart">
              <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition duration-300">
                Cart ({cartItems.length})
              </button>
            </Link>
          </div>

          {/* User Info + Login/Logout */}
          <div className="flex items-center space-x-3">
            {user?.name && (
              <span className="font-semibold text-gray-700 hidden md:inline-block">
                {user.name}
              </span>
            )}

            <button
              onClick={() => setIsLoggedIn(!isLoggedIn)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition duration-300"
            >
              {isLoggedIn ? "Logout" : "Login"}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu (Optional) */}
      {/* You can add a hamburger menu here if needed */}
    </nav>
  );
}

export default Navbar;
