import axios from "axios";
import React, { useEffect, useState } from "react";
import FoodCard from "../commponents/FoodCard";

const AvailableFood = () => {
    //jehteu foods data gula array hisebe thake tai map korte gele jano error na khay tai state e man akta empty erray [] dici
    const [foods, setFoods]=useState([])
    useEffect(()=>{
        fetchAllFood()
    },[])
    const fetchAllFood= async()=>{
        //{data} korar karon axios akta obj return kore er vitor data namok obj sob data thake
        const {data}=await axios.get(`${import.meta.env.VITE_API_URL}/foods`,)
        setFoods(data)
        
    }
    // console.log(foods)

  return (
    <div className="pt-20 w-11/12 mx-auto">
      <div className="flex flex-col md:flex-row items-center  md:items-center md:justify-center ">
        <form>
          <div className="flex p-1 overflow-hidden border rounded-lg    focus-within:ring focus-within:ring-opacity-40 focus-within:border-blue-400 focus-within:ring-blue-300">
            <input
              className="px-5 py-2 text-gray-700 placeholder-gray-500 bg-white outline-none focus:placeholder-transparent"
              type="text"
              name="search"
              placeholder="Enter Job Title"
              aria-label="Enter Job Title"
            />

            <button className="px-1 md:px-4 py-3 text-sm font-medium tracking-wider text-gray-100 uppercase transition-colors duration-300 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:bg-gray-600 focus:outline-none">
              Search
            </button>
          </div>
        </form>
        <div>
          <select
            name="category"
            id="category"
            className="border p-4 rounded-md"
          >
            <option value="">Sort By date</option>
            <option value="dsc">Descending Date</option>
            <option value="asc">Ascending Date</option>
          </select>
        </div>
      </div>
      <div className='grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4'>
          {
            foods.map(food=> <FoodCard key={food._id} food={food}/>)
          }
        </div>
    </div>
  );
};

export default AvailableFood;
