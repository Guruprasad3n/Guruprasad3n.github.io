import "./skillsup.css"
import Skills from "./Skill"
import { useState } from "react"
 function SkillsUp() {


const [data, setData] = useState(Skills)
const filterItem=(cate)=>{
const updateItem = Skills.filter((e)=>{
  return e.category === cate
})
setData(updateItem)
}


  return (
    <section className="skills section" id="skills">
    <h2 className="section_title"> Skills </h2>
    <span className="section__subtitle">Techinical Skills</span>

    <div className="skill_buttons">
    <button className="buttonsClas" onClick={()=>setData(Skills)}>All</button>
    <button className="buttonsClas" onClick={()=>filterItem('fornt-end')}>Front-End</button>
    <button className="buttonsClas" onClick={()=>filterItem('back-end')}>Back-End</button>

    </div>

    <div className="skills__container container grid">
{
  data.map((el)=>(
<div className="skills_icons" key={el.id} id={el.id}>
<img src={el.image} alt={el.name} />
<p>{el.name}</p>
</div>
  ))
}




    </div>
  </section>   
  )
}
export default SkillsUp