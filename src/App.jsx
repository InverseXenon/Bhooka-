import './App.css'
import Navbar from './components/Navbar'
import Body from './components/Body'
import Footer from './components/Footer'
import {Outlet} from "react-router-dom";
import About from './components/About';
import Home from './pages/Home';


function App() {
  return (
    <>
           
        <Navbar />
        <Outlet />
        <Footer />
    </>
  )
}

export default App
