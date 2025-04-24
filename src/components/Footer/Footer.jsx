import React from "react";
import "./Footer.css";
import twitter from "../../assets/twitter_icon.png";
import instagram from "../../assets/instagram_icon.png";
import facebook from "../../assets/facebook_icon.png";
import youtube from "../../assets/youtube_icon.png";

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-icons">
        <img src={twitter} alt="" />
        <img src={facebook} alt="" />
        <img src={instagram} alt="" />
        <img src={youtube} alt="" />
      </div>
      <ul>
        <li>Music Discription</li>
        <li>Gift Cards</li>
        <li>Help Centre</li>
        <li>Media Centre</li>
        <li>Investor Relations</li>
        <li>Jobs</li>
        <li>Terms of Use</li>
        <li>Privacy</li>
        <li>Legal Notices</li>
        <li>Cookie Prefrences</li>
        <li>Coperate Information</li>
        <li>Contact Us</li>
      </ul>
    </div>
  );
};

export default Footer;
