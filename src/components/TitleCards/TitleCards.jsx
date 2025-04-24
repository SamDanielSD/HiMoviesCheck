import React, { useEffect, useRef, useState } from "react";
import "./TitleCards.css";
import { Link } from "react-router-dom";

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from "react-responsive-carousel";

const TitleCards = ({ title, type, categary }) => {
  const cardsRef = useRef();
  const [apiData, setApiData] = useState([]);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTNmODZmNDg2OWE1YTZhZjkyOTMzOGQyNGQxMTM4ZiIsIm5iZiI6MTc0NDg2ODE5NS4wMzgsInN1YiI6IjY4MDA5MzYzYzc3ZmQxZGY3NGFkMjBlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UKZfiBBSD0ix6Gp4voorcG1JXi4-_Tj4aEl_a8yQCEM",
    },
  };

  const handleWheel = (e) => {
    e.preventDefault();
    cardsRef.current.scrollLeft += e.deltaY;
  };

  const urlPath = () => {
    if (type === "all")
      return "https://api.themoviedb.org/3/trending/all/day?language=en-US";
    else if (type === "movie")
      return `https://api.themoviedb.org/3/movie/${categary}?language=en-US&page=1`;
    else if (type === "tv")
      return `https://api.themoviedb.org/3/tv/${categary}?language=en-US&page=1`;
  };

  useEffect(() => {
    cardsRef.current.addEventListener("wheel", handleWheel);
    fetch(urlPath(), options)
      .then((res) => res.json())
      .then((res) => setApiData(res.results))
      .catch((err) => console.error(err));
  }, []);

  // Show and remove vote

  const voteRef = useRef();

  return (
    <div className="title-cards">
      <h2>{title ? title : "Popular on HiMovies"}</h2>
      <div className="card-list" ref={cardsRef}>
        {apiData.map((card, index) => {
          return (
            <Link to={`/player/${card.id}`} className="card" key={index}>
              <div className="img-wrapper">
                <img
                  src={`https://image.tmdb.org/t/p/w500` + card.backdrop_path}
                  alt={card.title ? card.name : card.title}
                />
              </div>
              <p>{card.name ? card.name : card.title}</p>
              <p id="vote">⭐{Math.round(card.vote_average * 10) / 10}</p>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default TitleCards;
