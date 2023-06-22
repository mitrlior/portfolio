import Home from "./components/Home/Home";
import AboutME from "./components/AboutMe/AboutMe";
import Skills from "./components/Skills/Skills";
import NavBar from "./components/NavBar/NavBar";
import MyProjects from "./components/MyProjects/MyProjects";
import ContactMe from "./components/ContactMe/ContactMe";

import "./App.css";

const App = () => {
  const reveal = () => {
    const reveals = document.querySelectorAll(".reveal");

    for (let i = 0; i < reveals.length; i++) {
      const windowHeight = window.innerHeight;
      const elementTop = reveals[i].getBoundingClientRect().top;
      const elementVisible = 150;

      if (elementTop < windowHeight - elementVisible) {
        reveals[i].classList.add("active");
      } else {
        reveals[i].classList.remove("active");
      }
    }
  };
  window.addEventListener("scroll", reveal);

  return (
    <div className="App">
      <NavBar />
      <Home />
      <AboutME />
      <Skills />
      <MyProjects />
      <ContactMe />
    </div>
  );
};

export default App;
