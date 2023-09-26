import React from "react";
import Video from "./video/Push3.mp4";
import "./HeroVideo.css";

export default function HeroVideo() {
  return (
    <div className="videoPlayer">
      <video autoPlay muted>
        <source src={Video} type="video/mp4" />
      </video>
    </div>
  );
}
