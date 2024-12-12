import { IoAddSharp } from "react-icons/io5";
import { useEffect, useState } from "react";
import { useNotes } from "../../context/NotesContext";

const AddForm = () => {
  const { notes, addNote } = useNotes();

  const [noteTitle, setNoteTitle] = useState("");
  const [noteText, setNoteText] = useState("");
  const [noteCategory, setNoteCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!noteTitle || !noteText || !noteCategory) {
      alert("Please fill all the fields.");
      return;
    }

    addNote(noteTitle, noteText, noteCategory);

    // Reset form fields after adding a note
    setNoteTitle("");
    setNoteText("");
    setNoteCategory("");
  };

  useEffect(() => console.log(notes), [notes]);

  return (
    <form className="flex flex-col gap-4" onSubmit={handleSubmit}>
      {/* Title Input */}
      <div className="w-full flex flex-col gap-0.5">
        <label htmlFor="note-title" className="text-xl font-semibold pl-2">
          Title
        </label>
        <input
          type="text"
          className="bg-white py-2.5 pl-5 rounded-md border border-gray-400 outline-none focus:border-blue-400"
          id="note-title"
          placeholder="Note Title*"
          required
          value={noteTitle}
          onChange={(e) => setNoteTitle(e.target.value)}
        />
      </div>
      {/* Text Input */}
      <div className="w-full flex flex-col gap-0.5">
        <label htmlFor="note-text" className="text-xl font-semibold pl-2">
          Text
        </label>
        <textarea
          id="note-text"
          className="w-full h-36 bg-white py-2.5 pl-5 rounded-md border border-gray-400 outline-none focus:border-blue-400"
          placeholder="Note Text*"
          required
          value={noteText}
          onChange={(e) => setNoteText(e.target.value)}
        />
      </div>
      {/* Category Input */}
      <div>
        <p className="text-xl font-semibold pl-2">Choose Category:</p>
        <div className="flex flex-col gap-1.5 pl-3 mt-2">
          {["personal", "home", "business"].map((category) => (
            <div
              className="flex items-center gap-1 cursor-pointer"
              key={category}
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
              <label htmlFor={category}>
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </label>
            </div>
          ))}
        </div>
      </div>
      {/* Add Button */}
      <div className="w-full flex justify-center sm:justify-end mt-5">
        <button
          type="submit"
          className="flex justify-between items-center gap-1 bg-[#3FA2F6] text-white outline-none border-none py-2.5 px-7 rounded-full hover:bg-[#0D92F4] transition-all duration-300 ease-linear"
          disabled={!noteTitle || !noteText || !noteCategory}
        >
          <IoAddSharp className="text-lg" />
          <span>Add</span>
        </button>
      </div>
    </form>
  );
};

export default AddForm;
