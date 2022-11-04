import React, { useEffect, useState } from 'react';

//Components
import GameCard from '../GameCard';

//Serviços
import api from '../../services/api';

//Styled-Components
import { Container, Filter, Search, Dropdowns, Content, Pagination } from './styles';

//Icons 
import { MdNavigateBefore, MdNavigateNext } from "react-icons/md";
import { AiOutlineSearch } from "react-icons/ai";

function Games() {
  //Array com todos os jogos para ser paginado
  const [allGames, setAllGames] = useState([]);
  //Array paginado
  const [games, setGames] = useState([]);
  //Indexação de paginação do array geral
  const [start, setStart] = useState(0);
  const [end, setEnd] = useState(60);
  //Página atual
  const [page, setPage] = useState(1);
  //Quantidade total de páginas retornadas na
  const [pages, setPages] = useState(0);
  //Categoria dos jogos
  const [category, setCategory] = useState('all');
  //Plataforma dos jogos
  const [platform, setPlatform] = useState('all');
  //Estado responsável pela pesquisa de jogos
  const [search, setSearch] = useState('');
  const [searchHolder, setSearchHolder] = useState('');

  //useEffect responsável por filtrar os jogos sempre que os dropdowns (selects) mudarem
  useEffect(() => {
    getGames();
  }, [category, platform])

  //useEffect para deixar a pesquisa perfomática com um debounce de 1.5 segundos
  useEffect(() => {
    const debounce = setTimeout(() => {
      setSearchHolder(search);
    }, 1500)

    return () => clearTimeout(debounce)
  }, [search])

  //Função para gerar a query baseada na categoria e plataforma
  function generateQuery() {
    let query = '/games';

    if (category === 'all' && platform === 'all') {
      return query;
    }

    if (category === 'all') {
      query = query + `?platform=${platform}`;
      return query;
    }

    if (category !== 'all') {
      query = query + `?category=${category}` + `&platform=${platform}`;
      return query;
    }
  }

  //Função para requisição dos jogos com a query gerada pela função generateQuery
  async function getGames() {
    try {
      let query = generateQuery();
      const response = (await api.get(query)).data;
      setAllGames(response);
      setGames(response.slice(start, end));

      let nPages = response.length / 60;
      nPages = Math.ceil(nPages);
      setPages(nPages);
    } catch (error) {
      console.log(error);
    }
  }

  //Função responsável por voltar uma página no array
  function previousPage() {
    setGames(allGames.slice(start - 60, end - 60));
    setPage(oldProps => oldProps - 1);
    setStart(oldProps => oldProps - 60);
    setEnd(oldProps => oldProps - 60);
  }

  //Função responsável para avançar uma página no array
  function nextPage() {
    setGames(allGames.slice(start + 60, end + 60));
    setPage(oldProps => oldProps + 1);
    setStart(oldProps => oldProps + 60);
    setEnd(oldProps => oldProps + 60);
  }

  return (
    <Container>
      <Filter>
        <Dropdowns>
          <select className="genre-dropdown" onChange={e => setCategory(e.target.value)}>
            <option value="all">Gênero (Todos)</option>
            <option value="2d">2D</option>
            <option value="3d">3D</option>
            <option value="anime">Anime</option>
            <option value="battle-royale">Battle Royale</option>
            <option value="card">Cartas</option>
            <option value="racing">Corrida</option>
            <option value="space">Espaço</option>
            <option value="sports">Esportes</option>
            <option value="strategy">Estratégia</option>
            <option value="fantasy">Fantasia</option>
            <option value="fighting">Luta</option>
            <option value="mmorpg">MMORPG</option>
            <option value="moba">MOBA</option>
            <option value="open-world">Mundo aberto</option>
            <option value="sailing">Navegação</option>
            <option value="pixel">Pixel</option>
            <option value="first-person">Primeira Pessoa</option>
            <option value="pvp">PvP</option>
            <option value="sandbox">Sandbox</option>
            <option value="sci-fi">Sci-fi</option>
            <option value="survival">Sobrevicência</option>
            <option value="social">Social</option>
            <option value="superhero">Superherói</option>
            <option value="tank">Tank</option>
            <option value="third-person">Terceira Pessoa</option>
            <option value="horror">Terror</option>
            <option value="shooter">Tiro</option>
            <option value="turn-based">Turnos</option>
            <option value="zombie">Zumbi</option>
          </select>
          <select onChange={e => setPlatform(e.target.value)}>
            <option value="all">Plataforma (Ambas)</option>
            <option value="pc">PC Windows</option>
            <option value="browser">Navegador</option>
          </select>
        </Dropdowns>
        <Search>
          <div className="icon">
            <AiOutlineSearch />
          </div>
          <input placeholder="Pesquisar..." onChange={e => setSearch(e.target.value)} />
        </Search>
      </Filter>
      <Content>
        {searchHolder === '' ?
          games.map(game => (
            <GameCard key={game.id} gameInfo={game} />
          ))
          : allGames.filter(game => game.title.toLocaleLowerCase().includes(searchHolder.toLocaleLowerCase())).map(game => (
            <GameCard key={game.id} gameInfo={game} />
          ))
        }
      </Content>
      {searchHolder === '' &&
        <Pagination>
          <button type="button" onClick={previousPage} className="left" disabled={page === 1}><MdNavigateBefore /></button>
          <span>{page} de {pages}</span>
          <button type="button" onClick={nextPage} disabled={page === pages}><MdNavigateNext /></button>
        </Pagination>
      }
    </Container>
  );
}

export default Games;