import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import About from "./components/About";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ErrorPage from "./components/Error";
import RestaurantMenu from "./pages/RestaurantMenu";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,              
    errorElement: <Error />,  
    children: [
      { path:"/", index: true, element: <Home /> },       
      { path: "/about", element: <About /> }, 
      {path:"/contact", element: <Contact/>} ,
      { path:"/restaurant/:id", element:<RestaurantMenu />}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
