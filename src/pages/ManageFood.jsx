import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import FoodManageTab from "../commponents/FoodManageTab";
import { AuthContext } from "../providers/AuthProvider";

const ManageFood = () => {
    const {user}=useContext(AuthContext)
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetchAllFood();
  }, []);
  const fetchAllFood = async () => {
    //{data} korar karon axios akta obj return kore er vitor data namok obj sob data thake
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/food/${user?.email}`);
    setFoods(data);
    console.log(data)
  };
  return (
    <div className="pt-20 w-11/12 mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Food Name</th>
              <th>foodQuantity</th>
              <th>Favorite Color</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {foods.map((food) => (
              <tr key={food._id}>
                <td>{food.foodName}</td>
                <td>{food.foodQuantity}</td>
                <td>Blue</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageFood;
