import About from "./components/About";
import Home from "./components/Home";
import NavBar from "./components/NavBar";
import Portfolio from "./components/Portfolio";
import SozialLinks from "./components/SozialLinks";
import Experience from "./components/Experience";
import Contact from "./components/Contact";
import BottomSpacer from "./components/BottomSpacer";

function App() {
  return (
   <div>
    <NavBar />
    <Home />
    <About />
    <Portfolio />
    <Experience />
    <Contact />
    <BottomSpacer />

    <SozialLinks />
   </div>
  );
}

export default App;
