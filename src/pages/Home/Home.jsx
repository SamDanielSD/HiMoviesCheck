import React from "react";
import Navbar from "../../components/Navbar/Navbar.jsx";
import TitleCards from "../../components/TitleCards/TitleCards.jsx";
import "./Home.css";
import hero_banner from "../../assets/hero_banner.jpg";
import hero_title from "../../assets/hero_title.png";
import play_icon from "../../assets/play_icon.png";
import info_icon from "../../assets/info_icon.png";
import Footer from "../../components/Footer/Footer.jsx";

const Home = () => {
  return (
    <div className="home">
      <Navbar />
      <div className="hero">
        <img src={hero_banner} alt="" className="banner-img" />
        <div className="hero-caption">
          <img src={hero_title} alt="" className="caption-img" />
          <p className="p">
            Discoverin his ties to a secret ancient order, a young man living in
            modern Istanbul embarks on a quest to save the city form a imortal
            enemy
          </p>
          <div className="hero-btns">
            <button className="btn">
              <img src={play_icon} alt="" />
              Play
            </button>
            <button className="btn dark-btn">
              <img src={info_icon} alt="" />
              More Info
            </button>
          </div>
          <TitleCards title="Popular on HiMovies" type="all" categary="" />
        </div>
      </div>
      <div className="more-cards">
        <TitleCards title="Now Streaming" categary="now_playing" type="movie" />

        <TitleCards title="Popular Movies" categary="popular" type="movie" />

        <TitleCards
          title="Top Rated TV Series"
          categary="top_rated"
          type="tv"
        />
      </div>
      <Footer />
    </div>
  );
};

export default Home;
