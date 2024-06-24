import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Header from "./components/Header";
import About from "./components/About";
import Skills from "./components/Skills";
import Project from "./components/Project";
import Contact from "./components/Contact";
import { useThemeStore } from "./zustand/themeStore";

function App() {
  const { darkMode } = useThemeStore();

  return (
    <div className={`${darkMode && "dark"}`}>
      <div className="bg-gradient-to-t bg-blue-100 dark:bg-black/70">
        <Navbar />
        <Header />
        <About />
        <Skills />
        <Project />
        <Contact />
        <Footer />
      </div>
    </div>
  );
}

export default App;
