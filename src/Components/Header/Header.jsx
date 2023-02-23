import { useState } from "react";
// import resume from "../Files/Guruprasad-Behera.pdf"
import "./header.css";
function Header() {
  window.addEventListener("scroll", function () {
    const header = document.querySelector(".header");
    if (this.scrollY >= 80) header.classList.add("scroll-header");
    else header.classList.remove("scroll-header");
  });

  // Header TOggle Menu

  const [Toggle, setToggle] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");

  return (
    <header className="header">
      <nav className="nav container">
        <a href="index.html" className="nav__logo">
          Guru Prasad
        </a>
        <div className={Toggle ? "nav__menu show-menu" : "nav__menu"}>

          {/* //////////////////////////// NAVBAR    ////////////////////////////// */}
          
          <ul className="nav__list grid">
            {/* LI */}
            <li className="nav__item">
              <a
                href="#home"
                onClick={() => setActiveNav("#home")}
                className={
                  activeNav === "#home" ? "nav__link active-link" : "nav__link"
                }
              >
                <i className="uil uil-home nav__icon"></i> Home
              </a>
            </li>
            {/* LI */}
            <li className="nav__item">
              <a href="#about"   onClick={() => setActiveNav("#about")}
                className={
                  activeNav === "#about" ? "nav__link active-link" : "nav__link"
                }>
                <i className="uil uil-user nav__icon"></i> About
              </a>
            </li>
            {/* LI */}
            <li className="nav__item">
              <a href="#skills"onClick={() => setActiveNav("#skills")}
                className={
                  activeNav === "#skills" ? "nav__link active-link" : "nav__link"
                }>
                <i className="uil uil-file-alt nav__icon"></i>Skills
              </a>
            </li>
            {/* LI */}
            <li className="nav__item">
              <a href="#projects" onClick={() => setActiveNav("#projects")}
                className={
                  activeNav === "#projects" ? "nav__link active-link" : "nav__link"
                }>
                <i className="uil uil-suitcase nav__icon"></i>
                Projects
              </a>
            </li>
            {/* LI */}
            <li className="nav__item">
              <a href="#contact" onClick={() => setActiveNav("#contact")}
                className={
                  activeNav === "#contact" ? "nav__link active-link" : "nav__link"
                }>
                <i className="uil uil-message nav__icon"></i>
                Contact
              </a>
            </li>
            {/* LI */}
            <li className="nav__item" download>
              <a
                href="https://drive.google.com/file/d/1-LwIBtWhBsTOC_vdX85aD6vDPyK92a35/view?usp=sharing"
                className="nav__link"
                target="_blank"
                download
              >
                <i className="uil uil-scenery nav__icon"></i>
                Resume
              </a>
            </li>
            {/* https://drive.google.com/file/d/1-LwIBtWhBsTOC_vdX85aD6vDPyK92a35/view */}
          </ul>
          <i
            class="uil uil-times  nav__close"
            onClick={() => setToggle(!Toggle)}
          ></i>
          {/* /////////////////// END NAVBAR    /////////////////////// */}
        </div>

        <div className="nav__toggle" onClick={() => setToggle(!Toggle)}>
          <i class="uil uil-bars"></i>
        </div>
      </nav>
    </header>
  );
}
export default Header;
