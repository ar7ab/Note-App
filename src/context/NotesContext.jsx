import { createContext, useContext, useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";

const NotesContext = createContext();

export const NotesProvider = ({ children }) => {
  const loadNotesFromLocalStorage = () => {
    const savedNotes = localStorage.getItem("notes");
    return savedNotes ? JSON.parse(savedNotes) : [];
  };

  const [notes, setNotes] = useState(loadNotesFromLocalStorage());

  useEffect(() => {
    if (notes.length > 0) {
      localStorage.setItem("notes", JSON.stringify(notes));
    }
  }, [notes]);

  const addNote = (title, text, category) => {
    setNotes((prevNotes) => [
      ...prevNotes,
      {
        id: uuidv4(),
        title,
        text,
        category,
        noteIsCompleted: false,
        date: new Date().toLocaleDateString(),
      },
    ]);
  };

  const updateNotes = (id, updatedNote) => {
    setNotes((prevNotes) =>
      prevNotes.map((note) =>
        note.id === id
          ? {
              ...note,
              ...updatedNote,
              date: new Date().toLocaleDateString(),
            }
          : note
      )
    );
  };

  const deleteNote = (id) => {
    setNotes((prevNotes) => {
      const updatedNotes = prevNotes.filter((note) => note.id !== id);
      localStorage.setItem("notes", JSON.stringify(updatedNotes));
      return updatedNotes;
    });
  };

  return (
    <NotesContext.Provider value={{ notes, addNote, updateNotes, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = () => useContext(NotesContext);
