import React, { useEffect, useState } from "react";
import Marquee from "react-fast-marquee";
import ExtraCard from "./ExtraCard";

const Extra1 = () => {
    const [foods,setFoods]=useState([])
    useEffect(()=>{
fetch('./data.json').then(res=>res.json()).then(data=> setFoods(data))
    },[])
  return (
    <div>
      <Marquee className="font-semibold px-12 text-white py-3 bg-red-400">
        <h2 className="ml-10">Upcoming Foods !</h2>
        <h2 className="ml-10">Upcoming Foods !</h2>
        <h2 className="ml-10">Upcoming Foods !</h2>
        <h2 className="ml-10">Upcoming Foods !</h2>
        <h2 className="ml-10">Upcoming Foods !</h2>
        <h2 className="ml-10">Upcoming Foods !</h2>
        <h2 className="ml-10">Upcoming Foods !</h2>
        <h2 className="ml-10">Upcoming Foods !</h2>
      </Marquee>
      <div className="grid grid-cols-1 gap-8 mt-8 xl:mt-16 md:grid-cols-2 lg:grid-cols-3 ">
        {foods?.map((food) => (
          <ExtraCard key={food.id} food={food}></ExtraCard>
        ))}
      </div>
    </div>
  );
};

export default Extra1;
