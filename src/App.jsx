import { Route, Routes } from "react-router-dom";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import All from "./pages/All";
import Personal from "./pages/Personal";
import Business from "./pages/Business";

const App = () => {
  return (
    <div className="app bg-[#eee] min-h-screen">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/all" element={<All />} />
        <Route path="/personal" element={<Personal />} />
        <Route path="/business" element={<Business />} />
      </Routes>
    </div>
  );
};

export default App;
