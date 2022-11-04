import { Router } from 'react-router-dom';
import history from './services/history';
import { GlobalStyle } from './styles/global';
import Routes from './routes';
import Modal from 'react-modal';

Modal.setAppElement('#root');

function App() {

  return (
    <Router history={history}>
      <GlobalStyle />
      <Routes />
    </Router>
  );
}

export default App;
