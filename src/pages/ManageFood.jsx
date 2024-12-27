import axios from "axios";
import React, { useContext, useEffect, useState } from "react";
import FoodManageTab from "../commponents/FoodManageTab";
import { AuthContext } from "../providers/AuthProvider";
import { MdDelete } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import Swal from "sweetalert2";

const ManageFood = () => {
  const { user } = useContext(AuthContext);
  const [foods, setFoods] = useState([]);
  useEffect(() => {
    fetchAllFood();
  }, []);
  const fetchAllFood = async () => {
    const { data } = await axios.get(
      `${import.meta.env.VITE_API_URL}/food/${user?.email}`
    );
    setFoods(data);
  };

  const handleDelete = (_id) => {
   
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`${import.meta.env.VITE_API_URL}/food/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your  movie has been deleted.",
                icon: "success",
              });
             const remainingFoods = foods.filter(f => f._id !== _id);
                setFoods(remainingFoods);
              
            }
          });
      }
    });
  };
  const handleEdit = () => {};

  return (
    <div className="pt-20 w-11/12 mx-auto">
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Food Name</th>
              <th>Food Quantity</th>
              <th>Pickup Location</th>
              <th>Expired DateTime</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {/* row 1 */}
            {foods.map((food) => (
              <tr key={food._id}>
                <td>{food.foodName}</td>
                <td>{food.foodQuantity}</td>
                <td>{food.pickupLocation}</td>
                <td>{food.expiredDateTime}</td>
                <td>
                  {" "}
                  <FaRegEdit size={20} onClick={handleEdit} />{" "}
                </td>
                <td>
                  {" "}
                  <MdDelete
                    size={20}
                    onClick={() => handleDelete(food._id)}
                  />{" "}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageFood;
