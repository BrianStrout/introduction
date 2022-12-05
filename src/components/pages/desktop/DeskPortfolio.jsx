import React from "react";
import "./Desk.css";
import PortfolioMasha from "./Desk_Portfolio_Slides/Desk_Portfolio_Masha";

const DeskPortfolio = () => {
  return (
    <div className="desk_container">
      <div className="dPortfolio dcontent">
        <h2>Portfolio</h2>
        <p>
          As this site is meant to be used to display this young model's
          portfolio it was created with a focus on asthetic. It is coded in
          React v6 with Framer.Motion v.2
        </p>
        <br />
        <PortfolioMasha />
      </div>
      <div className="portfolio_linker">
        <div className="portfolio_thumb">HI</div>
        <div className="portfolio_thumb">HI</div>
        <div className="portfolio_thumb">HI</div>
      </div>
    </div>
  );
};

export default DeskPortfolio;
