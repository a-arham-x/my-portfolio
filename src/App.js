import "./styles.css";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import TechStack from "./components/TechStack";
import AboutMe from "./components/AboutMe";
import Education from "./components/Education";
import Experience from "./components/Experience";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hobbies from "./components/Hobbies";

function App() {
  return (
    <>
      <Header />
      <Navbar />
      <TechStack />
      <AboutMe />
      <Education />
      <Experience />
      <Skills />
      <Projects />
      <Hobbies />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
