import { useState } from "react";
import { Link } from "react-router-dom";

const loggedInUser =() =>{
    // API call to check Authentication
    return true;
}

function Navbar(){
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    return(
        <>
            <div className="navbar">
                <img src="https://m.media-amazon.com/images/I/51gmgLecQsL.jpg" alt="Bhooka" className="logo" />
                <h1>Always BHOOKA!</h1>
                <div className="nav-btn">
                    <Link to="/"><button>Home</button></Link>                    
                    <Link to="/about"><button>About Us</button></Link>
                    <Link to="/contact"><button>Contact Us</button></Link>
                    
                    <button>Cart</button>
                </div>
                {
                    (isLoggedIn)?<button onClick={()=>setIsLoggedIn(false)}>Logout</button>:<button onClick={()=>setIsLoggedIn(true)}>Login</button>
                }
                
                
            </div>
            
        </>
        
    )
}

export default Navbar;