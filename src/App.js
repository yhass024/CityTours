import React from "react";
import Navbar from "./components/NavBar/Navbar.js";
import TourList from "../src/components/TourList/index";
import "../src/App.scss";

function App() {
  return (
    <main>
      <Navbar />
      <TourList />
    </main>
  );
}

export default App;
