import Navbar from "../components/Home/Navbar";
import { Notes } from "../assets/data/data";
import Note from "../components/Note";
import { useState } from "react";

const Personal = () => {
  const [showOnlyCompleted, setShowOnlyCompleted] = useState(false);

  const PersonalNotes = Notes.filter((note) => note.category === "personal");

  const filteredNotes = showOnlyCompleted
    ? PersonalNotes.filter((note) => note.isCompleted)
    : PersonalNotes;
  return (
    <div className="px-2.5 sm:px-24 pt-4 sm:pt-8 text-black pb-5">
      {/* Title */}
      <h2 className="text-2xl font-semibold w-full text-center sm:text-left">
        Your Notes
      </h2>
      {/* Navbar Section*/}
      <div className="flex justify-between flex-col sm:flex-row items-center mt-3 sm:mt-5">
        <Navbar />
        <div className="flex justify-center items-center gap-2 mt-3 sm:mt-0">
          <input
            type="checkbox"
            id="showOnly"
            className="appearance-none h-4 w-4 border 
            border-gray-400 rounded bg-transparent checked:bg-blue-500
             checked:border-blue-500 flex-shrink-0 cursor-pointer"
            checked={showOnlyCompleted}
            onChange={(e) => setShowOnlyCompleted(e.target.checked)}
          />
          <label htmlFor="showOnly" className="text-lg cursor-pointer">
            Show only completed notes
          </label>
        </div>
      </div>
      {/* Notes Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5 mt-8">
        {filteredNotes.slice(0, 10).map((note) => (
          <Note key={note.id} note={note} />
        ))}
      </div>
    </div>
  );
};

export default Personal;
