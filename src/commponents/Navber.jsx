import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";
import { Link, NavLink } from "react-router-dom";
import userIcon from "../assets/user.png";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);

  // Define navigation links
  const navLinks = [
    { path: "/", label: "Home" },
    { path: "/availableFood", label: "Available Food" },
  ];

  // Add extra links for authenticated users
  if (user) {
    navLinks.push(
      { path: "/addFood", label: "Add Food" },
      { path: "/manageFood", label: "Manage Food" },
      { path: "/foodRequest", label: "Food Request" }
    );
  }

  return (
    <div className="fixed z-20 w-full">
      <div className="navbar bg-base-100">
        {/* Navbar Start Section */}
        <div className="navbar-start">
          {/* Mobile Dropdown */}
          <div className="dropdown">
            <button tabIndex={0} className="btn bg-red-500 lg:hidden">
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
            </button>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
            >
              {navLinks.map(({ path, label }) => (
                <p key={path}>
                  <NavLink
                    to={path}
                    className={({ isActive }) =>
                      `${
                        isActive
                          ? "bg-red-500 text-white font-semibold rounded-lg transition duration-300"
                          : "hover:text-red-500 hover:font-bold"
                      } p-1`
                    }
                  >
                    {label}
                  </NavLink>
                </p>
              ))}
            </ul>
          </div>
          <span className="text-xl font-bold">Food-Maker</span>
        </div>

        {/* Navbar Center Section - Desktop Menu */}
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            {navLinks.map(({ path, label }) => (
              <p key={path}>
                <NavLink
                  to={path}
                  className={({ isActive }) =>
                    `${
                      isActive
                        ? "bg-red-500 text-white font-semibold rounded-lg transition duration-300"
                        : "hover:text-red-500 hover:font-bold"
                    } p-2`
                  }
                >
                  {label}
                </NavLink>
              </p>
            ))}
          </ul>
        </div>

        {/* Navbar End Section - User Profile & Auth Buttons */}
        <div className="navbar-end flex items-center gap-3">
          <div className="cursor-pointer">
            {user?.photoURL ? (
              <img
                className="w-10 rounded-full"
                title={user.displayName}
                src={user.photoURL}
                alt="User"
              />
            ) : (
              <img className="w-10" src={userIcon} alt="Default User" />
            )}
          </div>

          {/* Authentication Button */}
          {user ? (
            <button onClick={logOut} className="btn bg-red-500">Log Out</button>
          ) : (
            <Link to="/Login" className="btn bg-red-500">Login</Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
