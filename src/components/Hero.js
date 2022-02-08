import React from "react";
import location from "../icons/location-pointer.png";
import "../styles/Hero.css";

function Hero(props) {
  return (
    <section className="heroContainer">
      <img src={props.image} alt="Fuji mountain" className="mountain" />
      <div className="infoSection">
        <div className="locationSection">
          <img src={location} alt="location pointer" />
          <p>{props.location}</p>
          <a href={props.googleMaps}>View on Google Maps</a>
        </div>
        <div className="infoSection">
          <h3>{props.title}</h3>
          <p className="date">
            {props.startDate} - {props.endDate}
          </p>
          <p className="descriptionInfo">{props.description}</p>
        </div>
      </div>
    </section>
  );
}

export default Hero;
