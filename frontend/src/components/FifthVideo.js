import React from "react";
import VideoInterview from "./video/MartinAbletonCorpus.mp4";

export default function FifthVideo() {
  return (
    <div className="VideoInterview">
      <video controls>
        <source src={VideoInterview} type="video/mp4" />
      </video>
    </div>
  );
}
