import axios from "axios";
import React, { useEffect, useState } from "react";
import ReqTable from "../commponents/ReqTable";

const FoodRequest = () => {
  //jehteu foods data gula array hisebe thake tai map korte gele jano error na khay tai state e man akta empty erray [] dici
  const [reqFoods, setReqFoods] = useState([]);
  useEffect(() => {
    fetchAllFood();
  }, []);
  const fetchAllFood = async () => {
    //{data} korar karon axios akta obj return kore er vitor data namok obj sob data thake
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/request`,{withCredentials:true});
    setReqFoods(data);
  };
  return (
    <div className="w-11/12 mx-auto">
      <div className="pt-20">
        
        <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {reqFoods.map((food) => (
            <ReqTable key={food._id} food={food}></ReqTable>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FoodRequest;
