import React, { useEffect, useState } from "react";
import Carousel from "../commponents/Carousel";
import axios from "axios";
import FoodCard from "../commponents/FoodCard";
import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
//   const [data, setData] = useState(foods.slice(0, 6));
  useEffect(() => {
    fetchAllFood();
  }, []);
  const fetchAllFood = async () => {
    //{data} korar karon axios akta obj return kore er vitor data namok obj sob data thake
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/foods`);
    setFoods(data);
  };
  console.log(foods);
  return (
    <div className="pt-16">
      <Carousel></Carousel>
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 ">
        {foods?.slice(0,6)?.map((food) => (
          <FoodCard key={food._id} food={food} />
        ))}
      </div>
      <div className="text-center">
        <button className="btn mt-10 " onClick={()=>navigate('/availableFood')}>
            View All
        </button>
      </div>
    </div>
  );
};

export default Home;
