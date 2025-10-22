import { useSelector, useDispatch } from "react-redux";
import { clearCart } from "../utils/cartSlice";
import FoodItem from "../components/FoodItems";
import Shimmer from "../components/Shimmer";
import { useEffect, useState } from "react";

const Cart = () => {
  const dispatch = useDispatch();
  const cartItems = useSelector((store) => store.cart.items);
  const [loading, setLoading] = useState(true);

  const handleClearCart = () => {
    dispatch(clearCart());
  };

  // 👇 Add artificial 1-second delay for shimmer
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1000);
    return () => clearTimeout(timer);
  }, []);

  if (loading) return <Shimmer />;

  if (cartItems.length === 0)
    return (
      <div className="flex flex-col items-center justify-center h-[60vh] text-gray-600 animate-fadeIn">
        <img
          src="https://cdn-icons-png.flaticon.com/512/2038/2038854.png"
          alt="Empty Cart"
          className="w-24 mb-4 opacity-70"
        />
        <h2 className="text-xl font-semibold mb-2">Your cart is empty 🛒</h2>
        <p className="text-sm text-gray-500">
          Add some delicious items to your cart!
        </p>
      </div>
    );

  return (
    <div className="max-w-6xl mx-auto p-6 animate-fadeIn">
      {/* Header */}
      <div className="flex justify-between items-center mb-6 border-b pb-3">
        <h1 className="font-bold text-3xl text-gray-800">
          Cart Items ({cartItems.length})
        </h1>
        <button
          className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg shadow-md transition-all duration-300"
          onClick={handleClearCart}
        >
          Clear Cart
        </button>
      </div>

      {/* Items */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {cartItems.map((item) => (
          <FoodItem key={item.id} {...item} />
        ))}
      </div>

      {/* Checkout Section */}
      <div className="flex justify-end mt-10">
        <button className="bg-green-500 hover:bg-green-600 text-white px-6 py-3 rounded-lg font-semibold shadow-md transition-all duration-300">
          Proceed to Checkout
        </button>
      </div>
    </div>
  );
};

export default Cart;
