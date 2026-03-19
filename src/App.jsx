import Navbar from "./components/Navbar";
import ParticlesBackground from "./components/ParticlesBackground";
import Home from "./pages/Home";
import Work from "./pages/Work";
import About from "./pages/About";
import Contact from "./pages/Contact";

export default function App() {
  return (
    <div className="relative min-h-screen">
      <ParticlesBackground />
      <Navbar />
      <Home />
      <Work />
      <About />
      <Contact />
    </div>
  );
}
