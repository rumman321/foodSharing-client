import React from "react";

const ReqTable = ({ food }) => {
  const { donatorName, expiredDateTime, pickupLocation, requestDate, foodStatus } = food || {};

  return (
    <div className="h-full">
      <div className="card bg-base-100 shadow-xl h-full min-h-[250px] flex flex-col">
        <div className="card-body flex flex-col justify-between">
          {/* Card Content */}
          <div className="space-y-2">
            <p>Donor Name: <strong>{donatorName}</strong></p>
            <p>Pickup Location: <strong>{pickupLocation}</strong></p>
            <p>Food Status: 
              <strong>
                <span className="bg-red-400 text-white rounded px-2">{foodStatus}</span>
              </strong>
            </p>
            <p>Request Date: <strong>{requestDate}</strong></p>
            <p>Expired Date: <strong>{expiredDateTime}</strong></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReqTable;
