import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import HeroPage from "./components/HeroPage";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="min-h-screen relative bg-black text-white border-box">
      <NavBar />
      <HeroPage />
      <Skills />
      <Footer />
    </div>
  );
}

export default App;
