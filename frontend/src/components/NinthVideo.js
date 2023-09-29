import React from "react";
import AbletonLive from "./video/AbletonLive.mp4";

export default function NinthVideo() {
  return (
    <div className="NinthVideo">
      <video controls>
        <source src={AbletonLive} type="video/mp4" />
      </video>
    </div>
  );
}
