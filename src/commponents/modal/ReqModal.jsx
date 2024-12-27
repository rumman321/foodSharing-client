import React, { useContext, useEffect } from "react";

import axios from "axios";
import { useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

const ReqModal = ({ _id, data }) => {
    const navigate=useNavigate()
    const handleFoodReq= async(e)=>{
        const form = e.target;
        const foodName = form.foodName.value;
        const foodImage = form.foodImage.value;
        const foodQuantity = form.foodQuantity.value;
        const pickupLocation = form.pickupLocation.value;
        const expiredDateTime = form.expiredDateTime.value;
        const additionalNotes = form.additionalNotes.value;
        const donatorName = form.userName.value; 
        const donatorEmail = form.userEmail.value; 
        const donatorImage = form.userImage.value;
        
        
       
    const reqFood = {
        id:_id,
        foodName,
        foodImage,
        foodQuantity,
        pickupLocation,
        expiredDateTime,
        additionalNotes,
        donatorName,
        donatorEmail,
        donatorImage,
        foodStatus: "requested",
      };

        try {
            const {data}= await axios.post(`${import.meta.env.VITE_API_URL}/addrequest`,reqFood)
            form.reset()
            

            navigate('/foodRequest')
        } catch (error) {
            console.log(error)
           
        }
    }
 

 

  return (
    <div>
      {/* Open the modal using document.getElementById('ID').showModal() method */}

      <dialog id={_id} className="modal modal-bottom sm:modal-middle">
        <div className="modal-box">
        <form method="dialog" onSubmit={handleFoodReq}>
          <div>
            <div>
              <label
                htmlFor="foodName"
                className="block text-sm font-medium text-gray-700"
              >
                Food Name
              </label>
              <input
                type="text"
                name="foodName"
                value={data?.foodName}
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>
            <div>
              <label
                htmlFor="foodImage"
                className="block text-sm font-medium text-gray-700"
              >
                Food Image
              </label>
              <input
                type="text"
                name="foodImage"
                value={data?.foodImage}
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>
            <div>
              <label
                htmlFor="foodQuantity"
                className="block text-sm font-medium text-gray-700"
              >
                Food Quantity
              </label>
              <input
                type="text"
                name="foodQuantity"
                value={data?.foodQuantity}
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>
            <div>
              <label
                htmlFor="pickupLocation"
                className="block text-sm font-medium text-gray-700"
              >
                Pickup Location
              </label>
              <input
                type="text"
                name="pickupLocation"
                value={data?.pickupLocation}
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>
            <div>
              <label
                htmlFor="additionalNotes"
                className="block text-sm font-medium text-gray-700"
              >
                Additional Notes
              </label>
              <input
                type="text"
                name="additionalNotes"
                defaultValue={data?.additionalNotes}
                placeholder="Type here"
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>
            <div>
              <label
                htmlFor="expiredDateTime"
                className="block text-sm font-medium text-gray-700"
              >
                Expired Date
              </label>
              <input
                type="text"
                name="expiredDateTime"
                value={data?.expiredDateTime}
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>
            <div>
              <label
                htmlFor="pickupLocation"
                className="block text-sm font-medium text-gray-700"
              >
                User Email
              </label>
              <input
                type="text"
                name="userEmail"
                value={data?.donatorEmail}
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>
            <div>
              <label
                htmlFor="foodImage"
                className="block text-sm font-medium text-gray-700"
              >
                User Image
              </label>
              <input
                type="text"
                name="userImage"
                value={data?.donatorImage}
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>
            <div>
              <label
                htmlFor="pickupLocation"
                className="block text-sm font-medium text-gray-700"
              >
                User Name
              </label>
              <input
                type="text"
                name="userName"
                value={data?.donatorName}
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>
            <div>
            <label
                htmlFor="foodStatus"
                className="block text-sm font-medium text-gray-700"
              >
               Food Status
              </label>
              <input
                type="text"
                value={data?.foodStatus}
                className="input input-bordered input-sm w-full max-w-xs"
              />
            </div>
            <div className="modal-action">
            
              {/* if there is a button in form, it will close the modal */}
              <button className="btn">Request</button>
            
          </div>
          </div>
          </form>
          {/* <div className="modal-action">
            <form method="dialog">
             
              <button className="btn">Close</button>
            </form>
          </div> */}
         
        </div>
      </dialog>
    </div>
  );
};

export default ReqModal;
