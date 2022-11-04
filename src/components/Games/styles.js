import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Filter = styled.div`
  width: 100%;
  height: 80px;
  margin-bottom: 50px;
  background-color: #001D3D;
  display: flex;
  align-items: center;
  place-content: end;
  padding: 0 70px;

  @media (max-width: 760px) {
    padding: 0 10px;
  }

  @media (max-width: 640px) {
    height: auto;
    padding: 10px 80px;
    flex-direction: column;
  }

  @media (max-width: 560px) {
    padding: 10px 40px;
  }

  @media (max-width: 460px) {
    padding: 10px;
  }
`

export const Dropdowns = styled.div`
  select {
    height: 40px;
    margin-right: 20px;
    padding: 0 10px;
    border: none;
    border-radius: 5px;
    background-color: #003566;
    color: #FFF;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      background-color: #02529c;
    }

    @media (max-width: 640px) {
      width: 100%;
      margin-right: 0;
    }
  }

  @media (max-width: 640px) {
    width: 100%;
    margin-bottom: 10px;
    display: flex;
    place-content: space-evenly;

    .genre-dropdown {
      margin-right: 10px;
    }
  }

  @media (max-width: 400px) {
    flex-direction: column;

    .genre-dropdown {
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
`

export const Search = styled.div`
  display: flex;
  align-items: center;
  border-radius: 4px;
  overflow: hidden;

  .icon {
    height: 40px;
    width: 40px;
    background-color: #FFF;
    display: flex;
    align-items: center;
    place-content: center;
  }

  svg {
    font-size: 20px;
  }

  input {
    height: 40px;
    border: none;

    &:focus {
      outline: none
    }

    @media (max-width: 640px) {
      width: 100%;
    }
  }

  @media (max-width: 640px) {
      width: 100%;
    }
`

export const Content = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  gap: 2rem;

  @media(max-width: 1700px) {
    grid-template-columns: repeat(5, 1fr);
  }

  @media(max-width: 1425px) {
    grid-template-columns: repeat(4, 1fr);
  }

  @media(max-width: 1150px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media(max-width: 850px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media(max-width: 580px) {
    grid-template-columns: repeat(1, 1fr);
  }
`

export const Pagination = styled.div`
  width: 100%;
  text-align: center;
  margin: 2.5rem 0;
  display: flex;
  align-items: center;
  place-content: center;

  span {
    margin: 0 16px;
    color: #FFF;
  }

  button {
    border: none;
    display: flex;
    align-items: center;
    place-content: center;
    border-radius: 50%;
    padding: 0.5rem;
    background-color: #FFD60A;
    
    svg { 
      font-size: 30px;
      color: white;
    }
  }
`
