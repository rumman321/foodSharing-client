import React from "react";
import { NavLink } from "react-router-dom";

const FoodCard = ({ food }) => {
  const {
    foodName,
    foodImage,
    foodQuantity,
    pickupLocation,
    _id,
    expiredDateTime,
  } = food || {};
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img className="w-[200px] h-[200px]" src={foodImage} alt={foodName} />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Food Name : {foodName} </h2>
          <p>Quantity : {foodQuantity}</p>
          <p>Pickup-Location : {pickupLocation}</p>
          <p>Expired-Date : {expiredDateTime}</p>

          <div className="card-actions justify-end">
            <NavLink to={`/food/${_id}`}>
              <button className="btn btn-primary " >
                Details
              </button>
            </NavLink>
          </div>
        </div>
      </div>
      
      
    </div>
  );
};

export default FoodCard;
