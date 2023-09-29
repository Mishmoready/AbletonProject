import "./App.css";
import React from "react";
import Header from "./components/Header";
import HeroVideo from "./components/HeroVideo";
import SecondHeroMessage from "./components/SecondHeroMessage";
import ThirdComImages from "./components/ThirdComImages";
import ForthMessages from "./components/ForthMessages";
import FifthVideo from "./components/FifthVideo";
import SixthMessages from "./components/SixthMessages";
import SeventhImages from "./components/SeventhImages";
import EighthMessage from "./components/EighthMessage";
import NinthVideo from "./components/NinthVideo";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroVideo />
      <SecondHeroMessage />
      <ThirdComImages />
      <ForthMessages />
      <FifthVideo />
      <SixthMessages />
      <SeventhImages />
      <EighthMessage />
      <NinthVideo />
    </div>
  );
}

export default App;
