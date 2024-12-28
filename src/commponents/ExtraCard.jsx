import React from "react";

const ExtraCard = ({ food }) => {
  return (
    <div>
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            className="w-[250px] h-[250px] rounded-md"
            src={food?.foodimg}
            alt={food?.foodtitle}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{food?.foodtitle}</h2>
          <p>{food?.description}</p>
          
        </div>
      </div>
    </div>
  );
};

export default ExtraCard;
