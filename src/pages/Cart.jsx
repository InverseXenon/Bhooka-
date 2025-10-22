import { useSelector } from "react-redux";
import FoodItem from "../components/FoodItems";
import { clearCart } from "../utils/cartSlice";
import { useDispatch } from "react-redux";

const Cart = () =>{
    const dispatch = useDispatch();
    const handleClearCart =() => dispatch(clearCart());
    const cartItems = useSelector((store) => store.cart.items)
    return(
        <>
            <div>
                <div className="flex justify-between">
                    <h1 className="font-bold text-3xl ">Cart Items - {cartItems.length}</h1>
                    <button className="bg-red-200 p-2 m-5" onClick={()=> handleClearCart()}>Clear Cart</button>
                </div>
                
            <div className="flex flex-wrap">
                 {cartItems.map(item => <FoodItem key={item.id} {...item} />)}
            </div>
            </div>
            
            

        </>
        
    )
}
export default Cart;