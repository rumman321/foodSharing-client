import React, { useEffect, useState } from "react";
import Carousel from "../commponents/Carousel";
import axios from "axios";
import FoodCard from "../commponents/FoodCard";
import { useNavigate } from "react-router-dom";
import Extra1 from "../commponents/Extra1";
import AOS from 'aos';
import 'aos/dist/aos.css'; // Import the CSS file for AOS

const Home = () => {
  const navigate = useNavigate();
  const [foods, setFoods] = useState([]);
  
  useEffect(() => {
    AOS.init({
      duration: 1200, // Animation duration
    });
  }, []);

  useEffect(() => {
    fetchAllFood();
  }, []);
  
  const fetchAllFood = async () => {
    const { data } = await axios.get(`${import.meta.env.VITE_API_URL}/foods`);
    setFoods(data);
  };
  
  return (
    <div className="pt-16 w-11/12 mx-auto">
      <div data-aos="fade-up">
        <Carousel />
      </div>
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 ">
        {foods?.slice(0, 6)?.map((food) => (
          <div data-aos="fade-up" key={food._id}>
            <FoodCard food={food} />
          </div>
        ))}
      </div>
      <div className="text-center" data-aos="fade-up">
        <button
          className="btn mt-10"
          onClick={() => navigate("/availableFood")}
        >
          View All
        </button>
      </div>
      <div className="pt-10" data-aos="fade-up">
        <Extra1 />
      </div>
    </div>
  );
};

export default Home;
