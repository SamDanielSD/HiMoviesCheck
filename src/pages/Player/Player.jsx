import React, { useEffect, useState } from "react";
import "./Player.css";
import back_arrow_icon from "../../assets/back_arrow_icon.png";
import { useNavigate, useParams } from "react-router-dom";

const Player = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [apiData, setApiData] = useState({
    name: "",
    key: "",
    published_at: "",
    type: "", // ✅ fixed typo (was "typeof")
  });

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      Authorization:
        "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI2OTNmODZmNDg2OWE1YTZhZjkyOTMzOGQyNGQxMTM4ZiIsIm5iZiI6MTc0NDg2ODE5NS4wMzgsInN1YiI6IjY4MDA5MzYzYzc3ZmQxZGY3NGFkMjBlZCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.UKZfiBBSD0ix6Gp4voorcG1JXi4-_Tj4aEl_a8yQCEM",
    },
  };

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}/videos?language=en-US`,
      options
    )
      .then((res) => res.json())
      .then((res) => setApiData(res.results[0] || {})) // ✅ handle undefined results
      .catch((err) => console.error(err));
  }, [id]); // ✅ added id to dependencies

  return (
    <div className="player">
      <img
        src={back_arrow_icon}
        alt="back"
        className="back-arrow"
        onClick={() => navigate(-2)} // ✅ adjusted to -1 for single-step back
      />

      <iframe
        width="90%"
        height="90%"
        src={`https://www.youtube.com/embed/${apiData.key}`}
        title="trailer"
        frameBorder="0"
        allowFullScreen
      ></iframe>

      <div className="player-info">
        <p>{apiData.published_at?.slice(0, 10)}</p>
        <p>{apiData.name}</p>
        <p>{apiData.type}</p>
      </div>
    </div>
  );
};

export default Player;
