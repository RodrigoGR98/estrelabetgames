import React from 'react';

import { Container } from './styles';

import { IoLogoWindows, IoMdBrowsers } from "react-icons/io";

function GameCard({ gameInfo }) {

  function getYear(year) {
    let newYear = year.substring(0, 4);
    return newYear
  }

  function getPlataform(plataform) {
    if (plataform.includes('Windows') && plataform.includes('Browser')) {
      return (
        <div>
          <IoLogoWindows />
          <IoMdBrowsers />
        </div>
      )
    } else if (plataform.includes('Windows')) {
      return (
        <div>
          <IoLogoWindows />
        </div>
      )
    } else if (plataform.includes('Browser')) {
      return (
        <div>
          <IoMdBrowsers />
        </div>
      )
    }
  }

  return (
    <Container onClick={() => window.location = `/game?id=${gameInfo.id}`}>
      <img src={gameInfo.thumbnail} />
      <div className="game-info">
        <h3>{gameInfo.title}</h3>
        <p>{gameInfo.short_description}</p>
        <div className="subinfo">
          <span className="year">{getYear(gameInfo.release_date)}</span>
          <div className="genre-platform">
            <span className="genre">{gameInfo.genre}</span>
            <span>{getPlataform(gameInfo.platform)}</span>
          </div>
        </div>
      </div>
    </Container>
  );
}

export default GameCard;