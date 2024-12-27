import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const UpdateFood = () => {
  const food = useLoaderData();
  const navigate=useNavigate()
  const { user } = useContext(AuthContext);
  
  const [expiredDate, setExpiredDateTime] = useState(new Date());
  const {
    foodName,
    foodImage,
    foodQuantity,
    pickupLocation,
    expiredDateTime,
    additionalNotes,
    donatorName,
    donatorEmail,
    donatorImage,
  } = food;
  return (
    <div className="pt-20 w-11/12 mx-auto">
      <div className="min-h-screen flex items-center justify-center bg-gray-100 pt-20">
        <div className="max-w-md w-full bg-white shadow-md rounded-lg p-6">
          <h2 className="text-2xl font-bold mb-4 text-black">Add Food</h2>
          <form className="space-y-4" >
            <div>
              <label
                htmlFor="foodName"
                className="block text-sm font-medium text-gray-700"
              >
                Food Name
              </label>
              <input
                type="text"
                id="foodName"
                name="foodName"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                id="foodImage"
                name="foodImage"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                type="number"
                id="foodQuantity"
                name="foodQuantity"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                id="pickupLocation"
                name="pickupLocation"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="expiredDateTime"
                className="block text-sm font-medium text-gray-700"
              >
                Expired Date
              </label>
              <DatePicker
                id="expiredDateTime"
                name="expiredDateTime"
                selected={expiredDate}
                onChange={(date) => setExpiredDateTime(date)}
                dateFormat="yyyy/MM/dd"
                className="mt-1 block p-3 w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <div>
              <label
                htmlFor="additionalNotes"
                className="block text-sm font-medium text-gray-700"
              >
                Additional Notes
              </label>
              <textarea
                id="additionalNotes"
                name="additionalNotes"
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                id="userImage"
                name="userImage"
                defaultValue={user?.photoURL}
                disabled
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                id="userName"
                name="userName"
                defaultValue={user?.displayName}
                disabled
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
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
                type="email"
                id="userEmail"
                name="userEmail"
                defaultValue={user?.email}
                disabled
                className="mt-1 p-3 block w-full rounded-md border-gray-300 shadow-sm focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
              />
            </div>
            <button
              type="submit"
              className="w-full py-2 px-4 bg-blue-600 text-white rounded-md shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
            >
              Add
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateFood;
