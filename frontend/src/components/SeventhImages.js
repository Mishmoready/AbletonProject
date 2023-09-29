import React from "react";
import ComputerMixer from "./images/ComputerMixer.jpg";
import WhiteboardDrawing from "./images/ManWhiteboardDrawing.jpg";
import MixerImages from "./images/MixerImages.jpg";
import "./SeventhImages.css";

export default function SeventhImages() {
  return (
    <div className="ImagesStack">
      <img className="ComputerMixer" src={ComputerMixer} alt="Computer Mixer" />
      <img
        className="WhiteboardDrawing"
        src={WhiteboardDrawing}
        alt="Whiteboard Drawing"
      />
      <img className="MixerImages" src={MixerImages} alt="Mixer Images" />
      <div className="Square" />
    </div>
  );
}
