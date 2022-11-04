import React from 'react';

//Componentes
import Header from '../../components/Header';
import Games from '../../components/Games';

import { Container } from './styles';

function Home() {
  return (
    <Container>
      <Header />
      <Games />
    </Container>
  );
}

export default Home;