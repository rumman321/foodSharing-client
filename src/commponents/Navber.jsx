import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";

const Navber = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div className="fixed z-20 w-full">
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn bg-orange-600 lg:hidden"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {user ? (
                <>
                  {" "}
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
                            : " hover:text-red-500 hover:font-bold"
                        }`
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/availableFood"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
                            : " hover:text-red-500 hover:font-bold"
                        }`
                      }
                    >
                      AvailableFood
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/addFood"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
                            : " hover:text-red-500 hover:font-bold"
                        }`
                      }
                    >
                      AddFood
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/manageFood"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
                            : " hover:text-red-500 hover:font-bold"
                        }`
                      }
                    >
                      ManageFood
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/foodRequest"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
                            : " hover:text-red-500 hover:font-bold"
                        }`
                      }
                    >
                      FoodRequest
                    </NavLink>
                  </li>
                </>
              ) : (
                <>
                  {" "}
                  <li>
                    <NavLink
                      to="/"
                      className={({ isActive }) =>
                        `${
                          isActive
                            ? "bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
                            : " hover:text-red-500 hover:font-bold"
                        }`
                      }
                    >
                      Home
                    </NavLink>
                  </li>
                  <li>
                    <NavLink to="/availableFood">AvailableFood</NavLink>
                  </li>
                </>
              )}
            </ul>
          </div>
          <a className="  text-xl font-bold">Food-Maker</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {user ? (
              <>
                {" "}
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
                          : " hover:text-red-500 hover:font-bold"
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/availableFood"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
                          : " hover:text-red-500 hover:font-bold"
                      }`
                    }
                  >
                    AvailableFood
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/addFood"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
                          : " hover:text-red-500 hover:font-bold"
                      }`
                    }
                  >
                    AddFood
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/manageFood"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
                          : " hover:text-red-500 hover:font-bold"
                      }`
                    }
                  >
                    ManageFood
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/foodRequest"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
                          : " hover:text-red-500 hover:font-bold"
                      }`
                    }
                  >
                    FoodRequest
                  </NavLink>
                </li>
              </>
            ) : (
              <>
                {" "}
                <li>
                  <NavLink
                    to="/"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
                          : " hover:text-red-500 hover:font-bold"
                      }`
                    }
                  >
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink
                    to="/availableFood"
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-red-500 hover:bg-red-600 text-white font-semibold rounded-lg transition duration-300"
                          : " hover:text-red-500 hover:font-bold"
                      }`
                    }
                  >
                    AvailableFood
                  </NavLink>
                </li>
              </>
            )}
          </ul>
        </div>
        <div className="navbar-end flex items-center gap-3">
          {/* <img src={userIcon} alt="" /> */}
          <div className=" ">
            {user && user?.email ? (
              <div className=" cursor-pointer">
                <img
                  className="w-10 rounded-full"
                  title={user.displayName}
                  src={user?.photoURL}
                  alt=""
                />
              </div>
            ) : (
              <img src={userIcon} alt="" />
            )}
          </div>

          {/* btn section */}
          {user && user?.email ? (
            <button onClick={logOut} className="btn bg-red-500 ">
              Log Out
            </button>
          ) : (
            <Link to="/Login" className="btn bg-red-500 ">
              Login
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navber;
