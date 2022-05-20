import React from "react";
import "./styles.css";
import { PokeCards } from "./components/PokeCards.jsx";
import { Navbar } from "./components/Navbar";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <h1>2o. Challenge: Loops</h1>
      <PokeCards />
      <h6>By Anahi Rosas</h6>
    </div>
  );
}
