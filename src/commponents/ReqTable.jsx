import React from "react";

const ReqTable = ({ food }) => {
  const {donatorName,expiredDateTime,pickupLocation,requestDate,foodStatus} = food || {};
  return (
    <div>
      <div className="card bg-base-100  shadow-xl">
        <div className="card-body">
          
          <p>Donar Name : <strong>{donatorName}</strong></p>
          <p>Pickup Location : <strong>{pickupLocation}</strong></p>
          <p>Food Status : <strong><span className="bg-red-400 rounded px-2">{foodStatus}</span></strong></p>
          <p>Request Date : <strong>{requestDate}</strong></p>
          <p>Expired Date : <strong>{expiredDateTime}</strong></p>
         
        </div>
      </div>
    </div>
  );
};

export default ReqTable;
