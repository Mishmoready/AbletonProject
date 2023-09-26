import "./App.css";
import React from "react";
import Header from "./components/Header";
import HeroVideo from "./components/HeroVideo";
import SecondHeroMessage from "./components/SecondHeroMessage";

function App() {
  return (
    <div className="App">
      <Header />
      <HeroVideo />
      <SecondHeroMessage />
    </div>
  );
}

export default App;
