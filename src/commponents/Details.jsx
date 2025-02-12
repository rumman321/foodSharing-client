import React, { useState } from "react";
import { useLoaderData } from "react-router-dom";
import ReqModal from "./modal/ReqModal";

const Details = () => {
  const data = useLoaderData();
  const [showFullImage, setShowFullImage] = useState(false);

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
      <div className="w-full max-w-5xl bg-base-100 shadow-xl rounded-lg overflow-hidden p-6">
        {/* Main Layout (Flex on md & lg, Column on sm) */}
        <div className="flex flex-col md:flex-row gap-6">
          {/* Left: Food Image (Full Width on lg/md) */}
          <div className="md:w-1/2">
            <img
              referrerPolicy="no-referrer"
              className="w-full h-auto object-cover rounded-lg cursor-pointer"
              src={foodImage}
              alt={foodName}
              onClick={() => setShowFullImage(true)}
            />
          </div>

          {/* Right: Food Details */}
          <div className="md:w-1/2 flex flex-col justify-center">
            <h2 className="text-3xl font-bold text-gray-800">{foodName}</h2>
            <p className="text-gray-600 mt-2"><strong>Quantity:</strong> {foodQuantity}</p>
            <p className="text-gray-600"><strong>Pickup Location:</strong> {pickupLocation}</p>
            <p className="text-gray-600"><strong>Expires On:</strong> {expiredDateTime}</p>
            <p className="text-gray-600"><strong>Notes:</strong> {additionalNotes || "No additional notes"}</p>
            <p className={`text-lg font-semibold mt-2 ${foodStatus === "Available" ? "text-green-600" : "text-red-500"}`}>
              Status: {foodStatus}
            </p>

            {/* Donor Information */}
            <div className="mt-4 p-4 bg-gray-100 rounded-lg">
              <h3 className="text-xl font-semibold text-gray-800">Donor Info</h3>
              <div className="flex items-center gap-4 mt-2">
                <img
                  className="w-14 h-14 rounded-full border"
                  src={donatorImage || "https://via.placeholder.com/100"}
                  alt={donatorName}
                />
                <div>
                  <p className="text-gray-700"><strong>Name:</strong> {donatorName}</p>
                  <p className="text-gray-700"><strong>Email:</strong> {donatorEmail}</p>
                </div>
              </div>
            </div>

            {/* Request Button */}
            <div className="mt-6">
              <button
                className="btn btn-primary w-full md:w-auto px-6 py-2 text-white rounded-lg shadow-md transition-transform transform hover:scale-105"
                onClick={() => document.getElementById(_id).showModal()}
              >
                Request Food
              </button>
              <ReqModal _id={_id} data={data} />
            </div>
          </div>
        </div>
      </div>

      {/* Full-Size Image Modal */}
      {showFullImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50"
          onClick={() => setShowFullImage(false)}
        >
          <img
            src={foodImage}
            alt={foodName}
            className="max-w-full max-h-[90vh] object-contain rounded-lg shadow-lg"
          />
        </div>
      )}
    </div>
  );
};

export default Details;
