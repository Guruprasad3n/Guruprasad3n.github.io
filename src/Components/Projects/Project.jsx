
import ProjectsCard from "./ProjectsCard"
import "./project.css"

function Projects() {
  return (
    <section className="projects section" id="projects">
      <h2 className="section_title"> Projects </h2>
      <span className="section__subtitle">What i Did</span>

      <div className="projects__container container grid">
        <ProjectsCard />
      </div>
    </section>
  )
}
export default Projects