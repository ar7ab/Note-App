import { NavLink } from "react-router-dom";
import Logo from "./Logo";
import SearchBox from "./SearchBox";
import { IoAddSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className="px-3 sm:px-24 bg-[#ffffff] w-full hidden shadow-lg sm:py-4 py-4  items-center gap-1.5 sm:gap-5">
      {/* Logo */}
      <Logo />
      {/* Search Box */}
      <SearchBox />
      {/* Add Button */}
      <div className="add-btn">
        <NavLink
          to={"/addnote"}
          className="flex justify-between items-center gap-0.5 sm:gap-1 bg-[#3FA2F6] 
          text-white outline-none border-none  py-1.5 sm:py-2 px-2 sm:px-4 rounded-full 
          hover:bg-[#0D92F4] transition-all duration-300 ease-linear"
        >
          <IoAddSharp className="text-xl" />
          <span className="text-sm sm:text-lg">Add</span>
        </NavLink>
      </div>
    </div>
  );
};

export default Header;
