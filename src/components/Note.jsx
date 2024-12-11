import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const Note = ({ note }) => {
  const categoryColors = {
    personal: "bg-[#FFCB7E]",
    business: "bg-[#A4D6A6]",
    home: "bg-[#b39ddc]",
    default: "bg-gray-300",
  };

  const getCategoryColor = (category) =>
    categoryColors[category] || categoryColors.default;

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
          <input
            type="checkbox"
            checked={note.isCompleted}
            className="appearance-none bg-transparent border border-gray-300 rounded-sm w-4 h-4 checked:bg-blue-500"
            aria-label="Mark as completed"
          />
          <FaPen className="cursor-pointer" title="Edit note" />
          <FaTrashAlt className="cursor-pointer" title="Delete note" />
        </div>
      </div>
      <h1 className="text-xl font-bold my-3">{note.title}</h1>
      <p>{note.text}</p>
      <span className="absolute right-4 bottom-4 text-sm text-gray-500">
        {note.date}
      </span>
    </div>
  );
};

export default Note;
