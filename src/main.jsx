import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { HashRouter as Router } from "react-router-dom";
import { NotesProvider } from "./context/notesContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NotesProvider>
      <Router>
        <App />
      </Router>
    </NotesProvider>
  </StrictMode>
);