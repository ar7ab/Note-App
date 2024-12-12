import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import All from "./pages/All";
import Personal from "./pages/Personal";
import Business from "./pages/Business";
import AddNote from "./pages/AddNote";
import EditNote from "./pages/EditNote";
import Search from "./pages/Search";

const App = () => {
  return (
    <div className="app bg-[#eee] min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<All />} />
        <Route path="/home" element={<Home />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/business" element={<Business />} />
        <Route path="/addnote" element={<AddNote />} />
        <Route path="/editnote/:id" element={<EditNote />} />
        <Route path="/search" element={<Search />} />
      </Routes>
    </div>
  );
};

export default App;
