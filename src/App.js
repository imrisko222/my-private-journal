import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import earth from "./icons/earth.png";
import data from "./data/data.js";
import "./styles/App.css";

function App() {
  const component = data.map((item) => (
    <Hero
      key={item.id}
      title={item.title}
      location={item.location}
      googleMaps={item.googleMapsUrl}
      startDate={item.startDate}
      endDate={item.endDate}
      description={item.description}
      image={item.imageUrl}
    />
  ));

  return (
    <div className="App">
      <Navbar img={earth} />
      {component}
    </div>
  );
}

export default App;
