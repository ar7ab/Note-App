import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="border-b-2 border-gray-300 flex justify-between gap-5 pb-2">
      <NavLink
        to="/"
        className={({ isActive }) =>
          `px-1 sm:px-3 text-center relative border-b-2 ${
            isActive
              ? "border-blue-500 -mb-2.5 text-blue-500"
              : "border-transparent"
          }`
        }
      >
        ALL
      </NavLink>

      <NavLink
        to="/personal"
        className={({ isActive }) =>
          `px-1 sm:px-3 text-center relative border-b-2 ${
            isActive
              ? "border-blue-500 -mb-2.5 text-blue-500"
              : "border-transparent"
          }`
        }
      >
        PERSONAL
      </NavLink>

      <NavLink
        to="/home"
        className={({ isActive }) =>
          `px-1 sm:px-3 text-center relative border-b-2 ${
            isActive
              ? "border-blue-500 -mb-2.5 text-blue-500"
              : "border-transparent"
          }`
        }
      >
        HOME
      </NavLink>

      <NavLink
        to="/business"
        className={({ isActive }) =>
          `px-1 sm:px-3 text-center relative border-b-2 ${
            isActive
              ? "border-blue-500 -mb-2.5 text-blue-500"
              : "border-transparent"
          }`
        }
      >
        BUSINESS
      </NavLink>
    </nav>
  );
};

export default Navbar;
