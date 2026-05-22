import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Admissions from "./pages/Admissions";
import Courses from "./pages/Courses";
import Contact from "./pages/Contact";
import Register from "./pages/Register";


function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/admissions" element={<Admissions />} />
      <Route path="/register" element={<Register />} />
      <Route path="/courses" element={<Courses />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;