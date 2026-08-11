import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Resume from "./pages/Resume";
import Skills from "./pages/Skills";
import Projects from "./pages/Projects";
import "./App.css";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";
import NavBar from "./components/NavBar";
import { PageTransition } from "./components/PageTransition";
import { Footer } from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  const location = useLocation();

  return (
    <div className="flex min-h-screen flex-col bg-background text-foreground transition-colors duration-300 dark:bg-gray-900 dark:text-gray-100">
      <NavBar />
      <main className="flex-1">
        <PageTransition>
          <Routes location={location} key={location.pathname}>
            <Route path="/" element={<Home />} />
            <Route path="/resume" element={<Resume />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </PageTransition>
      </main>
      <Footer />
      <ScrollToTop />
    </div>
  );
}

export default App;
