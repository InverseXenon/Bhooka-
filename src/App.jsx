import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
import {Outlet} from "react-router-dom";
import About from './components/About';
import Home from './pages/Home';
import { useState } from 'react';
import userContext from './utils/userContext';
import {Provider} from "react-redux";
import store from './utils/store';


function App() {
  const [user,setUser] = useState({
    name:"John Doe",
    email:"johndoe123@gmail.com"
  })

  return (
    <>        
        <Provider store={store}>    
          <userContext.Provider value={{
            user:user,
            setUser:setUser
            }}> 
            <Navbar />
            <Outlet />
            <Footer />
          </userContext.Provider>
        </Provider>
    </>
  )
}

export default App
