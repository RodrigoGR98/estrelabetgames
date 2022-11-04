import React from 'react';

import Header from '../../components/Header';
import GameInfo from '../../components/GameInfo';

import { Container } from './styles';

function GamePage() {
  return (
    <Container>
      <Header />
      <GameInfo />
    </Container>
  );
}

export default GamePage;