import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HeroPage from "./components/HeroPage";
import Skills from "./components/Skills";
import Projects from "./components/Projects";

import { FaCss3Alt, FaHtml5, FaJs, FaPhp, FaBootstrap } from "react-icons/fa6";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiMysql, SiPhp } from "react-icons/si";

function App() {
  return (
    <div className="min-h-screen bg-black text-white border-box">
      <NavBar />
      <HeroPage />
      <Skills />
      <Projects />
      <Footer />
    </div>
  );
}

export default App;
