import React, { lazy,Suspense } from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import ErrorPage from "./components/Error";
import RestaurantMenu from "./pages/RestaurantMenu";
import Login from "./pages/Login";
import Profile from "./pages/ClassProfile";
import AboutUs from "./pages/AboutUs";
import Profile1 from "./pages/Profile";
import Shimmer from "./components/Shimmer";

const InstaMangao = lazy(() =>
  import("./pages/InstaMangao")
)



const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,              
    errorElement: <ErrorPage />,  
    children: [
      { path:"/", index: true, element: <Home /> },       
      { path: "/about", element: <AboutUs />, 
        children:[
          { path:"profile", element: <Profile/>},
          {path:"profile1", element:<Profile1/>}
        ] 
      }, 
      {path:"/contact", element: <Contact/>} ,
      { path:"/restaurant/:id", element:<RestaurantMenu />},
      {path:"/login",element:<Login/>},
      {path:"/instamangao",element:
      <Suspense fallback={<Shimmer/>}>
          <InstaMangao/>
      </Suspense>}
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <RouterProvider router={router} />
);
