import "./About.css";
import AboutMe from "./AboutMe";
import myIng from "../Files/About_Photo.jpg";
import Resume from "../Files/Guruprasad-Behera-Resume.pdf";

function About() {

  const downloadResume = ()=>{
    window.open("https://drive.google.com/file/d/1FRhsIvoRxJDCei92mNXSq-7RGJmVhcGp/view?usp=sharing","_blank");
  }

  return (
    <section className="about section" id="about">
      <h2 className="section_title"> About Me </h2>
      <span className="section__subtitle">My Introduction</span>

      <div className="about__container container grid">
        <img src={myIng} alt="" className="home-img" />
        <div className="about__data">
          <AboutMe />
          <p className="about__description" id="user-detail-intro">
            {/* Hi, My Name is Guru Prasad Behera I am Full Stack Web Developer and
            I enjoy learning new things in Web Development. Front i  */}
            Hi, My Name is Guru Prasad Behera I am Full Stack Web Developer
            proficient in tech Stacks like JavaScript, React Js, Node Js and
            MongoDB. Love to make Interactive UI's. I am a Quick learner who is
            constantly seeking new challenges and opportunities to grow and
            develop my skills. I am a highly motivated Full Stack Developer with
            good technical skills and a passion for creating innovative and
            effective solutions.
          </p>
          {/* <a
                id="resume-link-2"
                href={Resume}
                download={"Guruprasad-Behera-Resume"}
              >
                <button
                  id="resume-button-2"
                >
                  Resume
                </button>
              </a> */}

          <button id="resume-button-2"
           onClick={downloadResume}
          >
            <a
              id="resume-link-2"
              href={Resume}
              download={"Guruprasad-Behera-Resume"}
              className="button button--flex"
            >
              Resume
              <svg
                class="button__icon"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
              >
                <path
                  fill="#fff"
                  d="M14.29,17.29,13,18.59V13a1,1,0,0,0-2,0v5.59l-1.29-1.3a1,1,0,0,0-1.42,1.42l3,3a1,1,0,0,0,.33.21.94.94,0,0,0,.76,0,1,1,0,0,0,.33-.21l3-3a1,1,0,0,0-1.42-1.42ZM18.42,6.22A7,7,0,0,0,5.06,8.11,4,4,0,0,0,6,16a1,1,0,0,0,0-2,2,2,0,0,1,0-4A1,1,0,0,0,7,9a5,5,0,0,1,9.73-1.61,1,1,0,0,0,.78.67,3,3,0,0,1,.24,5.84,1,1,0,1,0,.5,1.94,5,5,0,0,0,.17-9.62Z"
                />
              </svg>
            </a>
          </button>
          {/* <i class="uil uil-cloud-download"></i> */}
        </div>
      </div>
    </section>
  );
}
export default About;
