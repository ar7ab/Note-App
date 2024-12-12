import { Notes } from "../assets/data/data";
import AddForm from "../components/AddNotes/AddForm";
import Note from "../components/Note";

const AddNote = () => {
  return (
    <div className="px-3 sm:px-24 pt-10 sm:pt-12 text-black block sm:flex sm:flex-row sm:gap-16">
      {/* Left Column - Form */}
      <div className=" sm:flex-1">
        {/* Title */}
        <h2 className="text-2xl font-semibold mb-4">Add Your Notes</h2>
        {/* Form Section */}
        <AddForm />
      </div>

      {/* Right Column - Notes */}
      <div className="w-1/3 hidden sm:block">
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>
        <div className="flex flex-col gap-4">
          {Notes.slice(0, 2).map((note) => (
            <Note key={note.id} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default AddNote;
