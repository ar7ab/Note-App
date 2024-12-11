import Navbar from "../components/Home/Navbar";
import { Notes } from "../assets/data/data";
import Note from "../components/Note";

const All = () => {
  return (
    <div className="px-24 pt-8 text-black">
      {/* Title */}
      <h2 className="text-2xl font-semibold w-full">Your Notes</h2>
      {/* Navbar Section*/}
      <div className="flex justify-between items-center mt-5">
        <Navbar />
        <div className="flex justify-center items-center gap-2">
          <input
            type="checkbox"
            id="showOnly"
            className="appearance-none h-4 w-4 border 
            border-gray-400 rounded bg-transparent checked:bg-blue-500
             checked:border-blue-500 flex-shrink-0 cursor-pointer"
          />
          <label htmlFor="showOnly" className="text-lg">
            Show only completed notes
          </label>
        </div>
      </div>
      {/* Notes Section */}
      <div className="grid grid-cols-3 gap-5 mt-8">
        {Notes.slice(0, 6).map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default All;
