import React, { useEffect, useState } from 'react';
import Modal from 'react-modal';

import api from '../../services/api';

import { Container, Box, ImageFullScreen, CloseModal } from './styles';
import { ModalStyle } from './styles';
import { AiOutlineClose } from "react-icons/ai";

function GameInfo() {
  const [gameInfo, setGameInfo] = useState({});
  const [screenshots, setScreenshots] = useState([]);

  const [isOpen, setIsOpen] = useState(false);

  const [openedImage, setOpenedImage] = useState('');

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const game = urlParams.get('id');
    getGameInfo(game);
  }, [])

  function closeModal() {
    setIsOpen(false);
  }

  async function getGameInfo(game) {
    try {
      let response = (await api.get(`game?id=${game}`)).data;
      setGameInfo(response);
      setScreenshots(response.screenshots);
    } catch (error) {
      console.log(error);
    }
  }

  function generateDescription(description) {
    let regex = /(<([^>]+)>)/ig;
    if (description) {
      let body = description;
      let result = body.replace(regex, "");
      return result;
    }
  }

  return (
    <Container>
      <Modal
        isOpen={isOpen}
        onRequestClose={closeModal}
        style={ModalStyle}
      >
        <CloseModal onClick={closeModal}><AiOutlineClose /> Fechar</CloseModal>
        <ImageFullScreen className="fullscreen-image" src={openedImage} />
      </Modal>
      <Box>
        <h3>{gameInfo.title}</h3>
        <a href={gameInfo.game_url} target="_blank">Site Oficial</a>
        <div className="overview">
          <div className="left">
            <img src={gameInfo.thumbnail} />
          </div>
          <div className="right">
            <p>{gameInfo.short_description}</p>
            <span><span className="title">Desenvolvedora:</span> {gameInfo.developer}</span>
            <span><span className="title">Categoria:</span> {gameInfo.genre}</span>
            <span><span className="title">Plataforma:</span> {gameInfo.platform}</span>
            <span><span className="title">Publicadora:</span> {gameInfo.publisher}</span>
            <span><span className="title">Data de lançamento:</span> {gameInfo.release_date}</span>
            <span><span className="title">Status:</span> {gameInfo.status}</span>
          </div>
        </div>
        <div className="screenshots">
          <h3>Screenshots</h3>
          <div className="images">
            {screenshots.map(screenshot => (
              <img key={screenshot.id} src={screenshot.image} onClick={() => { setIsOpen(true); setOpenedImage(screenshot.image) }} />
            ))}
          </div>
        </div>
        <div className="description">
          <h3>Descrição completa</h3>
          <p>{generateDescription(gameInfo.description)}</p>
        </div>
        <div className="system-requirements">
          {gameInfo.minimum_system_requirements &&
            <>
              <h3>Requisitos mínimos</h3>
              <p><span className="title">SO:</span> {gameInfo.minimum_system_requirements?.os}</p>
              <p><span className="title">Processador:</span> {gameInfo.minimum_system_requirements?.processor}</p>
              <p><span className="title">Placa de vídeo:</span> {gameInfo.minimum_system_requirements?.graphics}</p>
              <p><span className="title">Memória:</span> {gameInfo.minimum_system_requirements?.memory}</p>
              <p><span className="title">Armazenamento:</span> {gameInfo.minimum_system_requirements?.storage}</p>
            </>
          }
        </div>
      </Box>
    </Container>
  );
}

export default GameInfo;