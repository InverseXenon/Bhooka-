import { useState } from "react";

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
                    <button>Home</button>
                    <button>About Us</button>
                    <button>Contact Us</button>
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