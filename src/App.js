import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SozialLinks from "./components/SozialLinks";
import Experience from "./components/Experience";
import Contact from "./components/Contact";

function App() {
  return (
   <div>
    <NavBar />
    <Home />
    <About />
    <Portfolio />
    <Experience />
    <Contact />

    <SozialLinks />
   </div>
  );
}

export default App;
