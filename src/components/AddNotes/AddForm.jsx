import { IoAddSharp } from "react-icons/io5";

const AddForm = () => {
  return (
    <form className="flex flex-col gap-4">
      {/* Title Input */}
      <div className="w-full flex flex-col gap-0.5 ">
        <label htmlFor="note-title" className="text-xl font-semibold pl-2">
          Title
        </label>
        <input
          type="text"
          className=" bg-white py-2.5 pl-5 rounded-md border border-gray-400 outline-none focus:border-blue-400"
          id="note-title"
          placeholder="Note Title*"
          required
        />
      </div>
      {/* Text Input */}
      <div className="w-full flex flex-col gap-0.5 ">
        <label htmlFor="note-text" className="text-xl font-semibold pl-2">
          Text
        </label>
        <textarea
          id="note-text"
          className="w-full h-36 bg-white py-2.5 pl-5 rounded-md border border-gray-400 outline-none focus:border-blue-400"
          placeholder="Note Text*"
          required
        />
      </div>
      {/* Category Input */}
      <div>
        <p className="text-xl font-semibold pl-2">Choose Category:</p>
        <div className="flex flex-col gap-1.5 pl-3 mt-2">
          <div className="flex items-center gap-1 cursor-pointer">
            <input
              type="radio"
              name="category"
              checked
              id="personal"
              value="personal"
              className="appearance-none bg-transparent border-2 border-gray-400 w-4 h-4 rounded-full checked:bg-blue-500 checked:border-transparent cursor-pointer"
            />
            <label htmlFor="personal">Personal</label>
          </div>
          <div className="flex items-center gap-1 cursor-pointer">
            <input
              type="radio"
              name="category"
              id="home"
              value="home"
              className="appearance-none bg-transparent border-2 border-gray-400 w-4 h-4 rounded-full checked:bg-blue-500 checked:border-transparent cursor-pointer"
            />
            <label htmlFor="home">Home</label>
          </div>
          <div className="flex items-center gap-1 ">
            <input
              type="radio"
              name="category"
              id="business"
              value="business"
              className="appearance-none bg-transparent border-2 border-gray-400 w-4 h-4 rounded-full checked:bg-blue-500 checked:border-transparent cursor-pointer"
            />
            <label htmlFor="business" className="mr-2">
              Business
            </label>
          </div>
        </div>
      </div>
      {/* Add Button */}
      <div className="w-full flex justify-center sm:justify-end mt-5">
        <button className="flex justify-between items-center gap-1 bg-[#3FA2F6] text-white outline-none border-none py-2.5  px-7 rounded-full hover:bg-[#0D92F4] transition-all duration-300 ease-linear">
          <IoAddSharp className="text-lg" />
          <span>Add</span>
        </button>
      </div>
    </form>
  );
};

export default AddForm;
