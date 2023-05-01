// const stats=[
//     {href:"http://www.github.com/guruprasad3n",
//     src:"https://github-readme-stats.vercel.app/api?username=guruprasad3n&show_icons=true&hide=&count_private=true&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=1c1917&hide_border=true&show_icons=true",
//     alt:"guruprasad3n's GitHub stats"
// }
// ]

function Stats() {
  return (
    <div>
      <div style={{ padding: "", marginBottom: "2rem" }}>
        <p align="center">
          <a href="http://www.github.com/guruprasad3n">
            <img
              id="github-stats-card"
              style={{ height: "150px" }}
              align="center"
              src="https://github-readme-stats.vercel.app/api?username=guruprasad3n&show_icons=true&hide=&count_private=true&title_color=0891b2&text_color=ffffff&icon_color=0891b2&bg_color=1c1917&hide_border=true&show_icons=true"
              alt="guruprasad3n's GitHub stats"
            />
          </a>
          <a href="http://www.github.com/guruprasad3n">
            <img
              id="github-streak-stats"
              align="center"
              style={{ height: "150px" }}
              src="https://github-readme-streak-stats.herokuapp.com/?user=guruprasad3n&stroke=ffffff&background=1c1917&ring=0891b2&fire=0891b2&currStreakNum=ffffff&currStreakLabel=0891b2&sideNums=ffffff&sideLabels=ffffff&dates=ffffff&hide_border=true"
            />
          </a>
        </p>
      </div>
    </div>
  );
}
export default Stats;
