import React from "react";

const FoodCard = ({food}) => {
    const {foodName,foodImage,foodQuantity,pickupLocation,_id}=food || {}
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img 
            className="w-[200px] h-[200px]"
            src={foodImage}
            alt={foodName}
          />
        </figure>
        <div className="card-body">
          
          <h2 className="card-title">Food Name : {foodName} </h2>
          <p>Quantity : {foodQuantity}</p>
          <p>Pickup-Location : {pickupLocation}</p>
        
          <div className="card-actions justify-end">
            <button className="btn btn-primary">Details</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FoodCard;
