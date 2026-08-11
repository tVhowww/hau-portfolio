import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import "./App.css";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="min-h-screen bg-brand-bg text-brand-dark">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/resume" element={<Resume />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  );
}

export default App;
