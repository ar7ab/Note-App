import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className="relative flex-1 flex justify-between gap-5 items-center">
      <input
        type="text"
        placeholder="Search"
        className="bg-[#eee] text-black placeholder-black pl-12 py-2.5 rounded-md focus:outline-none flex-1"
      />
      <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-black ">
        <FaSearch />
      </div>
      <button className="bg-[#3FA2F6] text-white outline-none border-none py-3.5  px-6 rounded-full hover:bg-[#0D92F4] transition-all duration-300 ease-linear">
        <FaSearch />
      </button>
    </div>
  );
};

export default SearchBox;
