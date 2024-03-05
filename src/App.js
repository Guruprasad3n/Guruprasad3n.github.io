import "./App.css";
import About from "./Components/About/About";
import Contact from "./Components/Contact/Contact";
import Footer from "./Components/Footer/Footer";
import Calender from "./Components/Github-Calender/Calender";
import Header from "./Components/Header/Header";
import Home from "./Components/Home";
import Projects from "./Components/Projects/Project";
import ScrollUp from "./Components/Scrollup/ScrollUp";
import SkillsUp from "./Components/SkillsUpdated/SkillsUp";

function App() {
  return (
    <div>
      <Header />
      <main className="main">
        <Home />
        <About />
        {/* <Skills/> */}
        {/* <Services/>  */}
        <SkillsUp />
        <Projects />
        <Calender />
        <Contact />
      </main>
      <Footer />
      <ScrollUp />
    </div>
  );
}

export default App;
