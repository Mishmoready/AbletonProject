import React from "react";
import "./Header.css";
import logo from "./images/AbletonLogo2.png";

export default function Header() {
  return (
    <div className="navbar">
      <img src={logo} alt="Ableton Logo" />
      <div>
        <a href="#live">Live</a>
        <a href="#push">Push</a>
        <a href="#link">Link</a>
        <a href="#shop">Shop</a>
        <a href="#packs">Packs</a>
        <a href="#help">Help</a>
        <a href="#more">More</a>
      </div>
      <div className="navbarRight">
        <a href="#tryLiveForFree">Try Live For Free</a>
        <a href="#cart">Account</a>
        <a href="#logout">Logout</a>
        <a href="#About">About</a>
        <a href="#careers">Careers</a>
      </div>
    </div>
  );
}
