import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className="relative flex-1 flex justify-between gap-1 sm:gap-5 items-center">
      <input
        type="text"
        placeholder="Search"
        className="bg-[#eee] text-black w-full placeholder-black pl-8 sm:pl-12 py-1.5 sm:py-2.5 rounded-md focus:outline-none"
      />
      <div className="absolute left-2 sm:left-5 top-1/2 transform -translate-y-1/2 text-black">
        <FaSearch />
      </div>
      <button className="bg-[#3FA2F6] text-white outline-none border-none py-2.5 sm:py-3.5 px-3.5 sm:px-6 rounded-full hover:bg-[#0D92F4] transition-all duration-300 ease-linear">
        <FaSearch className="text-sm sm:text-lg" />
      </button>
    </div>
  );
};

export default SearchBox;
