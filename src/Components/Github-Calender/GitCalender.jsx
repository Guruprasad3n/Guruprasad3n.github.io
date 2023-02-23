import GitHubCalendar from "react-github-calendar";

function GitCalender(){
    return(
        <div className="calender__container container grid">
<GitHubCalendar style={{margin:"auto", color:"black"}}  username="guruprasad3n" year={new Date().getFullYear()} />
</div>
    )
}
export default GitCalender