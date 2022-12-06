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

  const [isShowing, updateIsShowing] = useState("true");

  return (
    <div className="desk_container">
      <div className="dPortfolio dcontent">
        <h2>Portfolio</h2>
        <p>
          Here are some examples of projects I have done independently along my
          journey...
        </p>

        <br />
        <br />
        <br />
        {/* <PortfolioMasha /> */}
        {portfolioCalled}
      </div>

      <div className="portfolio_linker">
        <div className="portfolio_linker_row">
          <div
            className="portfolio_thumb "
            onClick={() => updatePortfolioCalled(<PortfolioMasha />)}
          >
            <div className="thumb_names">
              <h5> Masha</h5>
            </div>
            <div id="portfolio_thumb_masha" className="thumb_pics"></div>
          </div>

          <div
            className="portfolio_thumb"
            onClick={() => updatePortfolioCalled(<PortfolioFugitiva />)}
          >
            <div className="thumb_names">
              <h5> fu</h5>
            </div>
            <div id="portfolio_thumb_fugitiva" className="thumb_pics"></div>
          </div>
          <div
            className="portfolio_thumb"
            onClick={() => updatePortfolioCalled(<PortfolioTarget />)}
          >
            <div className="thumb_names">
              <h5> Target</h5>
            </div>
            <div id="portfolio_thumb_target" className="thumb_pics"></div>
          </div>
        </div>

        <div className="portfolio_linker_row">
          <div
            className="portfolio_thumb"
            onClick={() => updatePortfolioCalled(<PortfolioGames />)}
          >
            <div className="thumb_names">
              <h5> Games</h5>
            </div>
            <div id="portfolio_thumb_games" className="thumb_pics"></div>
          </div>

          <div
            className="portfolio_thumb"
            onClick={() => updatePortfolioCalled(<PortfolioTodo />)}
          >
            <div className="thumb_names">
              <h5> To Do</h5>
            </div>
            <div id="portfolio_thumb_todo" className="thumb_pics"></div>
          </div>
          <div
            className="portfolio_thumb"
            onClick={() => updatePortfolioCalled(<PortfolioIntro />)}
          >
            <div className="thumb_names">
              <h5> Intro</h5>
            </div>
            <div id="portfolio_thumb_intro" className="thumb_pics"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DeskPortfolio;
