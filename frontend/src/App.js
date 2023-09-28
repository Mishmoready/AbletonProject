import "./App.css";
import React from "react";
import Header from "./components/Header";
import HeroVideo from "./components/HeroVideo";
import SecondHeroMessage from "./components/SecondHeroMessage";
import ThirdComImages from "./components/ThirdComImages";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroVideo />
      <SecondHeroMessage />
      <ThirdComImages />
    </div>
  );
}

export default App;
