const projects = [
  {
    image:
      "https://3.bp.blogspot.com/-unh8D92TmRI/WOaB0KstnnI/AAAAAAAAt4g/DGI3qrYJUzk2U80UbCmJ28WJ2e3xHfB7wCLcB/s1600/bath%2Band%2Bbody%2Bworks%2Bapril%2B5%2B2017%2Bwebsite%2Bchanges.png",
    name: "Bath & Body Works",
    TechStacks: "HTML, CSS, Java Script",
    description:
      "This is a Body-Care Ecommerce Website we Can Purchase in this website Body Care Products like Soaps, Sanitizers etc..",
    github: "https://github.com/s10shashi/Bath-BodyWash",
    netlify: "https://tranquil-salmiakki-c4ee29.netlify.app/",
  },

  {
    image:
      "https://bloghubstaffcom.lightningbasecdn.com/wp-content/uploads/2021/01/My-Hours@2x.png",
    name: "My Hours",
    TechStacks: "HTML, CSS, Java Script",
    description:
      "MyHours - Clone; Our goal was replicate functionality where user can tracking time, maintain client details and can purchase plan according to the requirement",
    github: "https://github.com/sushank678/mutual-cart-3380",
    netlify: "https://silver-sfogliatella-0c9664.netlify.app/",
  },

  {
    image:
      "https://ik.imagekit.io/evzj5evyul/wp-content/uploads/2022/09/Hubspot-Overview-Homepage.webp",
    name: "Hubspot.com",
    TechStacks: "React Js, Chakra Ui, Node Js",
    description:
      "HubSpot is a Cloud-Based CRM. HubSpot is a Software platform designed to help Company market and sell more effectively",
    github: "https://github.com/Guruprasad3n/HubSpot.com---Clone",
    netlify: "https://animated-narwhal-cecc2b.netlify.app/",
  },

  {
    image:
      "https://raw.githubusercontent.com/raghavendra7992/outstanding-partner-9831/c9dd3d70056324f1c1f5c1f08c247e2598f073f9/reliance-d/src/AdminDashBoard/icons/Reliance%20Digital%20Project.jpg",
    name: "Reliance Digital",
    TechStacks: ["React Js", "Chakra Ui", "Node Js", "Express Js"],
    description:
      "Reliance Digital is an Indian consumer electronics retailer. It is a subsidiary of Reliance Retail, a wholly owned subsidiary of Reliance Industries. Reliance Digital opened its first store on 24 April 2007 in Delhi",
    github: "https://github.com/raghavendra7992/outstanding-partner-9831",
    netlify: "https://digital-shopping.netlify.app/",
  },
];

function ProjectsCard() {
  return (
    <div className="project__container">
      {projects.map((e) => (
        <div className="project-card">
          <img src={e.image} alt={e.name} className="project__image" />
          <h3 className="project-title">{e.name}</h3>
          <p className="project-tech-stack">{`Tech Stacks:-  ${e.TechStacks}`}</p>
          <span className="projects__button">
            View More{" "}
            <i className="uil uil-arrow-right projects__button-icon"></i>{" "}
          </span>
          <p className="project-description">{e.description}</p>
          <div className="buttons__github-netlify">
            <button>
              <a
                className="netlify__github-button project-github-link"
                href={e.github}
                target="_blank"
              >
                Github
              </a>
            </button>
            <button>
              <a
                className="netlify__github-button project-deployed-link"
                href={e.netlify}
                target="_blank"
              >
                Netlify
              </a>
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}
export default ProjectsCard;
