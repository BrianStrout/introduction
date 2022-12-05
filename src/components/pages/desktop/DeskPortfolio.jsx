import React, { useState } from "react";
import "./Desk.css";
import PortfolioMasha from "./Desk_Portfolio_Slides/Desk_Portfolio_Masha";
import PortfolioFugitiva from "./Desk_Portfolio_Slides/Desk_Portfolio_Fugitiva";
import PortfolioTarget from "./Desk_Portfolio_Slides/Desk_Portfolio_Target";
import PortfolioGames from "./Desk_Portfolio_Slides/Desk_Portfolio_Games";
import PortfolioTodo from "./Desk_Portfolio_Slides/Desk_Portfolio_Todo";
import PortfolioIntro from "./Desk_Portfolio_Slides/Desk_Portfolio_Intro";

import DeskPortSlide from "./DeskPortSlide";
import Tune from "./Tune";
import { FaHandHolding } from "react-icons/fa";

const DeskPortfolio = () => {
  const [portfolioCalled, updatePortfolioCalled] = useState(<PortfolioIntro />);

  const handleClickForSlide = (name) => updatePortfolioCalled(name);

  // if (portfolioCalled === "PortfolioMasha")
  return (
    <div className="desk_container">
      <div className="dPortfolio dcontent">
        <h2>Portfolio</h2>
        <p>
          As this site is meant to be used to display this young model's
          portfolio it was created with a focus on asthetic. It is coded in
          React v6 with Framer.Motion v.2
        </p>
        <h6></h6>
        <br />
        {/* <PortfolioMasha /> */}
        {portfolioCalled}
      </div>

      <div className="portfolio_linker">
        <div className="portfolio_linker_row">
          <div
            className="portfolio_thumb"
            onClick={() => handleClickForSlide(<PortfolioMasha />)}
          >
            Masha
          </div>

          <div
            className="portfolio_thumb"
            onClick={() => handleClickForSlide(<PortfolioFugitiva />)}
          >
            La Fugitiva
          </div>
          <div
            className="portfolio_thumb"
            onClick={() => handleClickForSlide(<PortfolioTarget />)}
          >
            Target
          </div>
        </div>

        <div className="portfolio_linker_row">
          <div
            className="portfolio_thumb"
            onClick={() => handleClickForSlide(<PortfolioGames />)}
          >
            Games
          </div>

          <div
            className="portfolio_thumb"
            onClick={() => handleClickForSlide(<PortfolioTodo />)}
          >
            ToDo
          </div>
          <div
            className="portfolio_thumb"
            onClick={() => handleClickForSlide(<PortfolioIntro />)}
          >
            Intro
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeskPortfolio;
