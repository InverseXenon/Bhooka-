import { useState } from "react";
import { Link } from "react-router-dom";
import useOnline from "../utils/useOnline";

const loggedInUser =() =>{
    // API call to check Authentication
    return true;
}

function Navbar(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const isOnline = useOnline();

    return(
        <>
            <div className="flex justify-between bg-purple-50 shadow-lg sm:bg-red-50">
                
                <img src="https://m.media-amazon.com/images/I/51gmgLecQsL.jpg" alt="Bhooka" className="h-28" />
                <h1 className="px-2 py-10 text-4xl">{isOnline? "✅": "⚠️"}Always BHOOKA!</h1>
                
                <div className="flex py-10 justify-between">
                    <Link to="/"><button className="px-4 py-2 mx-1 bg-blue-700 text-white rounded hover:bg-blue-800 transition">Home</button></Link>                    
                    <Link to="/about"><button className="px-4 py-2 mx-1 bg-blue-700 text-white rounded hover:bg-blue-800 transition">About Us</button></Link>
                    <Link to="/contact"><button className="px-4 py-2 mx-1 bg-blue-700 text-white rounded hover:bg-blue-800 transition">Contact Us</button></Link>
                    <Link to="/instamangao"><button className="px-4 py-2 mx-1 bg-blue-700 text-white rounded hover:bg-blue-800 transition">InstaMangao</button></Link>
                    <button className="px-4 py-2 bg-blue-700 text-white rounded hover:bg-blue-800 transition">Cart</button>
                    
                </div>
                
                {
                    (isLoggedIn)?<button className="px-4 py-2 mx-1 bg-blue-700 text-white rounded hover:bg-blue-800 transition" onClick={()=>setIsLoggedIn(false)}>Logout</button>:<button className="px-4 py-2 mx-1 bg-blue-700 text-white rounded hover:bg-blue-800 transition" onClick={()=>setIsLoggedIn(true)}>Login</button>
                }
                
                
            </div>
            
        </>
        
    )
}

export default Navbar;