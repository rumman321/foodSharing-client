import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import MainLayout from "../layouts/MainLayout";
import AvailableFood from "../pages/AvailableFood";
import AddFood from "../pages/AddFood";
import ManageFood from "../pages/ManageFood";
import FoodRequest from "../pages/FoodRequest";
import Login from "../pages/Login";
import Signup from "../pages/Signup";
import Details from "../commponents/Details";
import UpdateFood from "../commponents/UpdateFood";
import PrivateRoute from "./PrivateRoute";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout></MainLayout>,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/availableFood",
        element: <AvailableFood></AvailableFood>,
      },
      {
        path: "/food/:id",
        element: <PrivateRoute><Details></Details></PrivateRoute> ,
        loader: async ({ params }) => {
          const res = await fetch(`${import.meta.env.VITE_API_URL}/foods`);
          const data = await res.json();
          const singleData = data.find((d) => d._id == params.id);

          return singleData;
        },
      },
      {
        path: "/addFood",
        element: <PrivateRoute><AddFood></AddFood></PrivateRoute> ,
      },
      {
        path: "/manageFood",
        element: <PrivateRoute><ManageFood></ManageFood></PrivateRoute> ,
      },
      {
        path: "/foodRequest",
        element: <PrivateRoute><FoodRequest></FoodRequest></PrivateRoute> ,
      },
      {
        path: "/update/:id",
        element:<UpdateFood></UpdateFood>,
        loader: ({params})=>fetch(`${import.meta.env.VITE_API_URL}/foods/${params.id}`)
      },
      {
        path: "/Login",
        element: <Login></Login>,
      },
      {
        path: "/Signup",
        element: <Signup></Signup>,
      },
      
    ],
  },
]);
