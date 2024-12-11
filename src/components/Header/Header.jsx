import Logo from "./Logo";
import SearchBox from "./SearchBox";
import { IoAddSharp } from "react-icons/io5";

const Header = () => {
  return (
    <div className="px-24 bg-[#ffffff] w-full shadow-lg py-5 flex items-center gap-5">
      {/* Logo */}
      <Logo />
      {/* Search Box */}
      <SearchBox />
      {/* Add Button */}
      <div className="add-btn">
        <button className="flex justify-between items-center gap-1 bg-[#3FA2F6] text-white outline-none border-none py-2.5  px-4 rounded-full hover:bg-[#0D92F4] transition-all duration-300 ease-linear">
          <IoAddSharp className="text-2xl" /> Add
        </button>
      </div>
    </div>
  );
};

export default Header;
