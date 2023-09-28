import React from "react";
import SpeakerImage from "./images/SpeakerPic.jpg";
import AbletonPushThree from "./images/AbletonPushThree.jpg";
import "./ThirdComImages.css";

export default function ThirdComImages() {
  return (
    <div className="ThirdHeroImagesContainer">
      <div className="ThirdHeroImages">
        <img
          className="AbletonPushThree"
          src={AbletonPushThree}
          alt="Ableton Push Three"
        />
        <img className="SpeakerImage" src={SpeakerImage} alt="Speaker" />
        <div className="Square"></div>
      </div>
    </div>
  );
}
