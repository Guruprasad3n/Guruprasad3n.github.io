import "./calender.css"
import GitCalender from "./GitCalender";
import Stats from "./Stats";


function Calender() {
  return (
<section className="calender section" id="calender">
<h2 className="section_title"> Calender </h2>
<span className="section__subtitle">GitHub Calender</span>
<GitCalender/>
<br />
<Stats/>
</section>
  );
}
export default Calender;
  
