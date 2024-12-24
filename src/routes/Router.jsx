import {
    createBrowserRouter,
    
  } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import AvailableFood from "../pages/AvailableFood";
import AddFood from "../pages/AddFood";
import ManageFood from "../pages/ManageFood";
import FoodRequest from "../pages/FoodRequest";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

  export const router = createBrowserRouter([
    {
      path: "/",
      element: <MainLayout></MainLayout>,
      children:[
        {
            path:"/",
            element:<Home></Home>
        },
        {
            path:"/availableFood",
            element:<AvailableFood></AvailableFood>
        },
        {
            path:"/addFood",
            element:<AddFood></AddFood>
        },
        {
            path:"/manageFood",
            element:<ManageFood></ManageFood>,

        },
        {
            path:"/foodRequest",
            element:<FoodRequest></FoodRequest>
        },
        {
            path:"/Login",
            element:<Login></Login>
        },
        {
            path:"/Signup",
            element:<Signup></Signup>
        }
      ]
    },
  ]);