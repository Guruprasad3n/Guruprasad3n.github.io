import Social from "./SocialMedia";
import "./CSS/home.css";
import Data from "./Data";
// import Scroll from "./ScrollButton";

function Home() {

  return (
    <div >
      <section className="home section" id="home">
        <div className="home__container container grid">
          <div className="home__content grid">
            <Social/>
            <div className="home__img">
            </div>
                <Data/>
          </div>
          {/* <Scroll/> */}
        </div>
      </section>
    </div>
  );
}
export default Home;
