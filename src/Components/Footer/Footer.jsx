import "./footer.css"
function Footer(){
    return(
        <footer className="footer">
<div className="footer__container container">
    <h1 className="footer__title">Guru Prasad Behera</h1>

    <ul className="footer__list">
        <li>
            <a href="#about" className="footer__link">About</a>
        </li>
        <li>
            <a href="#projects" className="footer__link">Projects</a>
        </li>
        <li>
            <a href="#home" className="footer__link">Home</a>
        </li>
    </ul>


    <div className="footer__social">
    <a href="https://github.com/Guruprasad3n" className="footer__social-link" target="_blank">
    <i class='bx bxl-github' ></i>
        </a>
        <a href="https://www.linkedin.com/in/guruprasad0/" className="footer__social-link" target="_blank">
        <i class='bx bxl-linkedin' ></i>
        </a>
    </div>



<span className="footer__copy">Copyrights @ Guru Prasad</span>


</div>
        </footer>
    )
}
export default Footer