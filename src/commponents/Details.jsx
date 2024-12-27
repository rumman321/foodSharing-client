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
  //if(user.email==donatorEmail ) request pathaite dibo na retun kore dibo
  return (
    <div className="pt-28 flex justify-center">
      <div className="card card-compact bg-base-100 w-96 shadow-xl">
        <figure>
          <img
            referrerPolicy="no-referrer"
            className="w-[200px] h-[200px]"
            src={foodImage}
            alt={foodName}
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">Food Name : {foodName} </h2>
          <p>Quantity : {foodQuantity}</p>
          <p>Pickup-Location : {pickupLocation}</p>
          <p>Expired-Date : {expiredDateTime}</p>
          <p>Additional-Notes : {additionalNotes}</p>
          <p>Status : {foodStatus}</p>
          <h2 className="card-title">Donar Info :</h2>
          <div className="flex items-center gap-5">
            <img className="rounded-full w-10" src={donatorImage} alt="" />
            <div>
              <p>
                {" "}
                Name : <strong>{donatorName}</strong>
              </p>
              <p>
                {" "}
                Email : <strong>{donatorEmail}</strong>
              </p>
            </div>
          </div>

          <div className="card-actions justify-end">
            <button
              className="btn"
              onClick={() => {
                document.getElementById(_id).showModal()

            }}
            >
              Request
            </button>
            <ReqModal _id={_id}  data={data}></ReqModal>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Details;
