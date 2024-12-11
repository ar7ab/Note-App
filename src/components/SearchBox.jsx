import { FaSearch } from "react-icons/fa";

const SearchBox = () => {
  return (
    <div className="flex relative flex-1">
      <input
        type="text"
        placeholder="Search"
        className="bg-[#eee] text-black placeholder-black pl-12 py-2.5 rounded-md focus:outline-none flex-1"
      />
      <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-black ">
        <FaSearch />
      </div>
    </div>
  );
};

export default SearchBox;
