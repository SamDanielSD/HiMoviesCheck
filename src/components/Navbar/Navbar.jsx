import React, { useEffect, useRef } from "react";
import "./NavBar.css";
import logo from "../../assets/logo.png";
import searchIco from "../../assets/search_icon.svg";
import bellIco from "../../assets/bell_icon.svg";
import profile_img from "../../assets/profile_img.png";
import dropdown_icon from "../../assets/caret_icon.svg";
import { logout } from "../../firebase";

const Navbar = () => {
  const scrollRef = useRef();

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (scrollY >= 150) {
        scrollRef.current.classList.add("nav-dark");
      } else {
        scrollRef.current.classList.remove("nav-dark");
      }
    });
  }, []);

  return (
    <div className="navbar" ref={scrollRef}>
      <div className="navbar-left">
        <h1 className="hi-movies">H!Movies</h1>
        <ul>
          <li>Home</li>
          <li>TV Shows</li>
          <li>Movies</li>
          <li>New & Popular</li>
          <li>My List</li>
          <li>Browse by Language</li>
        </ul>
      </div>
      <div className="navbar-right">
        <img src={searchIco} alt="search" className="icons" />
        <p className="depri">Chidren</p>
        <img src={bellIco} alt="bellicon" className="icons depri" />
        <div className="navbar-profile ">
          <img src={profile_img} alt="profile_img" className="profile" />
          <img src={dropdown_icon} className="depri" alt="dropdown_icon" />
          <div className="dropdown">
            <p
              onClick={() => {
                logout();
              }}
            >
              Sign out of Netflix
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
