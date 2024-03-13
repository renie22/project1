import { useSelector } from "react-redux";
import About from "./components/About";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";

function App() {
  const { darkMode } = useSelector((state) => state.theme);

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="bg-gradient-to-t bg-blue-100 dark:bg-black/70">
        <Navbar />
        <Header />
        <About />
        <Projects />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
