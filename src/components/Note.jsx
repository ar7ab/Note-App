import { FaPen, FaTrashAlt } from "react-icons/fa";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";
import { Link } from "react-router-dom";
import { useNotes } from "../context/NotesContext";

const Note = ({ note }) => {
  const { updateNotes, deleteNote } = useNotes();

  const categoryColors = {
    personal: "bg-[#FFCB7E]",
    business: "bg-[#A4D6A6]",
    home: "bg-[#b39ddc]",
    default: "bg-gray-300",
  };

  const getCategoryColor = (category) =>
    categoryColors[category] || categoryColors.default;

  const handleCheckboxChange = () => {
    updateNotes(note.id, { noteIsCompleted: !note.noteIsCompleted });
  };

  const handleDeleteNote = () => {
    deleteNote(note.id);
  };

  return (
    <div className="bg-white p-5 rounded-md shadow-lg min-h-52 relative">
      <div className="flex justify-between">
        <span
          className={`px-5 pt-0.5 pb-1.5 rounded-full flex justify-center items-center ${getCategoryColor(
            note.category
          )}`}
        >
          {note.category || "Uncategorized"}
        </span>
        <div className="flex gap-5 items-center">
          <label htmlFor={`checkbox-${note.id}`} className="flex items-center">
            <input
              id={`checkbox-${note.id}`}
              type="checkbox"
              checked={note.noteIsCompleted}
              onChange={handleCheckboxChange}
              className="appearance-none bg-transparent border-2 cursor-pointer border-gray-300 rounded-md w-4 h-4 checked:bg-green-500 checked:border-green-500 transition duration-300 ease-in-out"
              aria-label="Mark as completed"
            />
          </label>
          <Link to={`/editnote/${note.id}`}>
            <FaPen
              className="cursor-pointer text-blue-500 hover:text-blue-700 active:text-blue-900"
              title="Edit note"
            />
          </Link>
          <FaTrashAlt
            onClick={handleDeleteNote}
            className="cursor-pointer text-red-500 hover:text-red-700 active:text-red-900"
            title="Delete note"
          />
        </div>
      </div>
      <h1
        className={`text-lg sm:text-xl font-bold my-3 ${
          note.noteIsCompleted ? "text-gray-500" : ""
        }`}
      >
        {note.title}
      </h1>
      <p className="text-sm sm:text-base truncate line-clamp-2">{note.text}</p>
      {note.noteIsCompleted ? (
        <span className="absolute left-5 bottom-4 items-center flex gap-1 text-green-600 sm:text-base">
          <IoCheckmarkDoneCircleSharp className="text-2xl sm:text-3xl" />
          <span className="font-semibold">Completed</span>
        </span>
      ) : (
        <span className="absolute left-6 bottom-5 items-center flex gap-1 text-gray-400 sm:text-base">
          <FaClock className="text-xl sm:text-2xl" />
          <span className="font-semibold">Pending</span>
        </span>
      )}
      <span className="absolute right-4 bottom-4 text-xs sm:text-sm text-gray-500">
        {note.date}
      </span>
    </div>
  );
};

export default Note;
