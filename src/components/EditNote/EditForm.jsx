import { useState, useCallback } from "react";
import { useNotes } from "../../context/NotesContext";
import { FaEdit } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const EditForm = ({ note }) => {
  const { updateNotes } = useNotes();

  const [noteTitle, setNoteTitle] = useState(note.title);
  const [noteText, setNoteText] = useState(note.text);
  const [noteCategory, setNoteCategory] = useState(note.category || "personal");

  const navigate = useNavigate();

  const handleSubmit = useCallback(
    (e) => {
      e.preventDefault();

      if (!noteTitle || !noteText || !noteCategory) {
        alert("Please fill all the fields.");
        return;
      }

      // Update the note in the context
      updateNotes(note.id, {
        title: noteTitle,
        text: noteText,
        category: noteCategory,
      });

      navigate("/");
    },
    [noteTitle, noteText, noteCategory, updateNotes, note.id, navigate]
  );

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {/* Title Input */}
      <input
        type="text"
        className="bg-white py-2.5 pl-5 rounded-md border border-gray-400 outline-none focus:border-blue-400"
        value={noteTitle}
        onChange={(e) => setNoteTitle(e.target.value)}
        aria-label="Note Title"
      />
      {/* Text Input */}
      <textarea
        className="w-full h-36 bg-white py-2.5 pl-5 rounded-md border border-gray-400 outline-none focus:border-blue-400"
        value={noteText}
        onChange={(e) => setNoteText(e.target.value)}
        aria-label="Note Text"
      />
      {/* Category Radio Inputs */}
      <div className="">
        <label className="text-xl font-semibold pl-2">Category:</label>
        <div className="flex flex-col gap-1.5 pl-3 mt-2">
          {["personal", "home", "business"].map((category) => (
            <label
              key={category}
              className="flex items-center gap-1 cursor-pointer"
            >
              <input
                type="radio"
                name="category"
                id={category}
                value={category}
                className="appearance-none bg-transparent border-2 border-gray-400 w-4 h-4 rounded-full checked:bg-blue-500 checked:border-transparent cursor-pointer"
                checked={noteCategory === category}
                onChange={(e) => setNoteCategory(e.target.value)}
              />
              {category}
            </label>
          ))}
        </div>
      </div>
      {/* Submit Button */}
      <div className="w-full flex justify-center sm:justify-end mt-5">
        <button
          type="submit"
          className="flex justify-between items-center gap-1 bg-[#3FA2F6] text-white outline-none border-none py-2.5 px-7 rounded-full hover:bg-[#0D92F4] transition-all duration-300 ease-linear"
          disabled={!noteTitle || !noteText || !noteCategory}
        >
          <FaEdit className="text-lg" />
          <span>Edit</span>
        </button>
      </div>
    </form>
  );
};

export default EditForm;
