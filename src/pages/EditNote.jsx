import { useParams } from "react-router-dom"; // To get params from the URL
import { useNotes } from "../context/NotesContext";
import EditForm from "../components/EditNote/EditForm";
import Note from "../components/Note";

const EditNote = () => {
  const { id } = useParams(); // Get the id from the URL params
  const { notes } = useNotes(); // Access notes from context
  const noteToEdit = notes.find((note) => note.id === id); // Find the note to edit

  // If the note isn't found, display an error message
  if (!noteToEdit) {
    return <p>Note not found!</p>;
  }

  return (
    <div className="px-3 sm:px-24 pt-10 sm:pt-12 text-black block sm:flex sm:flex-row sm:gap-16">
      {/* Left Column - Form */}
      <div className="sm:flex-1">
        <h2 className="text-2xl font-semibold sm:font-bold  mb-4">
          Edit Your Note
        </h2>
        <EditForm note={noteToEdit} /> {/* Pass the note to the form */}
      </div>

      {/* Right Column - Notes */}
      <div className="w-1/3 hidden sm:block">
        <h2 className="text-2xl font-semibold mb-4">Examples</h2>
        <div className="flex flex-col gap-4">
          {notes.slice(0, 2).map((note) => (
            <Note key={note.id} note={note} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default EditNote;
