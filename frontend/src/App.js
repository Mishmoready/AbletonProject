import "./App.css";
import React from "react";
import Header from "./components/Header";
import HeroVideo from "./components/HeroVideo";
import SecondHeroMessage from "./components/SecondHeroMessage";
import ThirdComImages from "./components/ThirdComImages";
import ForthMessages from "./components/ForthMessages";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroVideo />
      <SecondHeroMessage />
      <ThirdComImages />
      <ForthMessages />
    </div>
  );
}

export default App;
