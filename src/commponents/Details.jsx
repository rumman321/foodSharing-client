import React from "react";
import { useLoaderData } from "react-router-dom";
import ReqModal from "./modal/ReqModal";

const Details = () => {
  const data = useLoaderData();
  console.log(data);
  const {
    _id,
    foodName,
    foodImage,
    foodQuantity,
    pickupLocation,
    additionalNotes,
    donatorEmail,
    donatorImage,
    donatorName,
    expiredDateTime,
    foodStatus,
  } = data;

  return (
    <div className="pt-28 flex justify-center px-4">
      <div className="card w-full max-w-2xl bg-base-100 shadow-xl rounded-lg overflow-hidden">
        {/* Food Image */}
        <figure className="w-full">
          <img
            referrerPolicy="no-referrer"
            className="w-full h-64 object-cover"
            src={foodImage}
            alt={foodName}
          />
        </figure>

        {/* Food Details */}
        <div className="card-body">
          <h2 className="text-2xl font-semibold text-gray-800">{foodName}</h2>
          <p className="text-gray-600">
            <strong>Quantity:</strong> {foodQuantity}
          </p>
          <p className="text-gray-600">
            <strong>Pickup Location:</strong> {pickupLocation}
          </p>
          <p className="text-gray-600">
            <strong>Expires On:</strong> {expiredDateTime}
          </p>
          <p className="text-gray-600">
            <strong>Notes:</strong> {additionalNotes || "No additional notes"}
          </p>
          <p className={`text-lg font-semibold ${foodStatus === "Available" ? "text-green-600" : "text-red-500"}`}>
            Status: {foodStatus}
          </p>

          {/* Donor Information */}
          <div className="mt-4 p-4 bg-gray-100 rounded-lg">
            <h3 className="text-xl font-semibold text-gray-800">Donor Info</h3>
            <div className="flex items-center gap-4 mt-2">
              <img
                className="w-12 h-12 rounded-full border"
                src={donatorImage || "https://via.placeholder.com/100"}
                alt={donatorName}
              />
              <div>
                <p className="text-gray-700">
                  <strong>Name:</strong> {donatorName}
                </p>
                <p className="text-gray-700">
                  <strong>Email:</strong> {donatorEmail}
                </p>
              </div>
            </div>
          </div>

          {/* Request Button */}
          <div className="card-actions justify-end mt-4">
            <button
              className="btn btn-primary text-white px-6 py-2 rounded-lg shadow-md transition-transform transform hover:scale-105"
              onClick={() => {
                document.getElementById(_id).showModal();
              }}
            >
              Request Food
            </button>
            <ReqModal _id={_id} data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
