import { FaPen } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";

const Note = ({ note }) => {
  return (
    <div
      key={note.id}
      className="bg-white p-5 rounded-md shadow-lg h-56 relative"
    >
      <div className="flex justify-between">
        <span className="px-3 py-1.5 bg-red-300 rounded-full flex justify-center items-center">
          {note.category}
        </span>
        <div className="flex justify-between gap-5 items-center">
          <input
            type="checkbox"
            className="appearance-none bg-transparent border border-gray-300 rounded-sm w-4 h-4 checked:bg-blue-500"
          />
          <FaPen />
          <FaTrashAlt />
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
