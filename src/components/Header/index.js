import React, { useState } from 'react';

import { Container, Buttons, ResponsiveMenu } from './styles';

import logo from '../../assets/logo.png';

import { BiFootball, BiMenu } from "react-icons/bi";
import { IoMdTimer, IoMdClose } from "react-icons/io";
import { BsFillSuitSpadeFill } from "react-icons/bs";
import { TbLivePhoto } from "react-icons/tb";
import { RiPlaneFill } from "react-icons/ri";
import { IoRocket } from "react-icons/io5";
import { IoLogoGameControllerB } from "react-icons/io";
import { SiCounterstrike } from "react-icons/si";

function Header() {
  const [showModal, setShowModal] = useState(false);

  return (
    <Container>
      <img src={logo} onClick={() => window.location = "/"} />
      <Buttons>
        <a href="https://estrelabet.com/ptb/bet/main" target="_blank"><BiFootball />Esportes</a>
        <a href="https://estrelabet.com/ptb/bet/live" target="_blank"><IoMdTimer /> Apostas ao Vivo</a>
        <a href="https://estrelabet.com/ptb/games/casino" target="_blank"><BsFillSuitSpadeFill /> Cassino</a>
        <a href="https://estrelabet.com/ptb/games/livecasino" target="_blank"><TbLivePhoto />Cassino ao Vivo</a>
        <a href="https://estrelabet.com/ptb/games/detail/casino/demo/7787" target="_blank"><RiPlaneFill /> Aviator</a>
        <a href="https://estrelabet.com/ptb/games/detail/casino/demo/19364" target="_blank"><IoRocket /> Spaceman</a>
        <a href="https://estrelabet.com/ptb/bet/virtuals" target="_blank"><IoLogoGameControllerB /> Esportes Virtuais</a>
        <a href="https://estrelabet.com/ptb/bet/ultraplay-esports" target="_blank"><SiCounterstrike /> E-Sports</a>
      </Buttons>
      <ResponsiveMenu>
        <BiMenu onClick={() => setShowModal(true)} />
        {showModal &&
          <div className="modal-mobile">
            <IoMdClose onClick={() => setShowModal(false)} className="close-button" />
            <a href="https://estrelabet.com/ptb/bet/main" target="_blank"><BiFootball />Esportes</a>
            <a href="https://estrelabet.com/ptb/bet/live" target="_blank"><IoMdTimer /> Apostas ao Vivo</a>
            <a href="https://estrelabet.com/ptb/games/casino" target="_blank"><BsFillSuitSpadeFill /> Cassino</a>
            <a href="https://estrelabet.com/ptb/games/livecasino" target="_blank"><TbLivePhoto />Cassino ao Vivo</a>
            <a href="https://estrelabet.com/ptb/games/detail/casino/demo/7787" target="_blank"><RiPlaneFill /> Aviator</a>
            <a href="https://estrelabet.com/ptb/games/detail/casino/demo/19364" target="_blank"><IoRocket /> Spaceman</a>
            <a href="https://estrelabet.com/ptb/bet/virtuals" target="_blank"><IoLogoGameControllerB /> Esportes Virtuais</a>
            <a href="https://estrelabet.com/ptb/bet/ultraplay-esports" target="_blank"><SiCounterstrike /> E-Sports</a>
          </div>
        }
      </ResponsiveMenu>
    </Container>
  );
}

export default Header;