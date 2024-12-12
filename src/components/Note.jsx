import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
import { useNotes } from "../context/notesContext";
import { IoCheckmarkDoneCircleSharp } from "react-icons/io5";
import { FaClock } from "react-icons/fa6";

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
    updateNotes(note.id);
  };

  const handleDeleteNote = () => {
    deleteNote(note.id); // Call deleteNote to remove the note
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
              className="appearance-none bg-transparent border-2 cursor-pointer border-gray-300 rounded-md w-4 h-4 checked:bg-green-500 checked:border-green-500 transition duration-300 ease-in-out transform hover:scale-105 focus:outline-none"
              aria-label="Mark as completed"
            />
          </label>
          <FaPen
            className="cursor-pointer text-blue-500 hover:text-blue-700 active:text-blue-900 transition duration-300"
            title="Edit note"
          />
          <FaTrashAlt
            onClick={handleDeleteNote} // Add the delete handler here
            className="cursor-pointer text-red-500 hover:text-red-700 active:text-red-900 transition duration-300"
            title="Delete note"
          />
        </div>
      </div>
      <h1
        className={`text-xl font-bold my-3 ${
          note.noteIsCompleted ? "text-gray-500" : ""
        }`}
      >
        {note.title}
      </h1>
      <p>{note.text}</p>
      {note.noteIsCompleted ? (
        <span className="absolute left-5 bottom-4 text-green-600">
          <IoCheckmarkDoneCircleSharp className="text-3xl" />
        </span>
      ) : (
        <span className="absolute left-6 bottom-5 text-gray-400">
          <FaClock className="text-2xl" />
        </span>
      )}
      <span className="absolute right-4 bottom-4 text-sm text-gray-500">
        {note.date}
      </span>
    </div>
  );
};

export default Note;
