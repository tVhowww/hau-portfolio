import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import "./App.css";
import Contact from "./pages/Contact";
import NavBar from "./components/NavBar";
import { PageTransition } from "./components/PageTransition";
import { Footer } from "./components/Footer";

function App() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-brand-bg text-brand-dark">
      <NavBar />
      <main className="flex-1">
        <PageTransition>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
    </div>
  );
}

export default App;
