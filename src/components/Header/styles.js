import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;
  height: 100px;
  padding: 0 80px;
  display: flex;
  align-items: center;
  background: #003566;

  img {
    position: relative;
    top: -5px;
    cursor: pointer;
  }

  @media(max-width: 1700px) {
    padding: 0 20px;
  }

  @media(max-width: 1580px) {
    img {
      width: 270px;
    }
  }

  @media(max-width: 1450px) {
    img {
      width: 200px;
    }
  }

  @media(max-width: 1450px) {
    img {
      width: 150px;
    }
  }

  @media(max-width: 1200px) {
    place-content: space-between;
    padding: 0 40px;

    img {
      width: 200px;
    }
  }

  @media(max-width: 380px) {
    padding: 0 20px;

    img {
      width: 180px;
    }
  }
`;

export const Buttons = styled.div`
  margin-left: 60px;
  display: flex;

  a {
    height: 50px;
    margin-right: 20px;
    display: flex;
    align-items: center;
    color: #FFF;
    text-decoration: none;
    cursor: pointer;
    transition: all 0.2s;

    &:hover {
      color: #ffd60a;
      border-bottom: 2px solid #FFD60A;
    } 

    svg {
      margin-right: 10px;
      color: #FFD60A;
      font-size: 20px;
    }
  }

  @media(max-width: 1450px) {
    margin-left: 20px;

    a {
      font-size: 15px;
    }
  }

  @media (max-width: 1300px) {
    a {
      font-size: 14px;
    }
  }

  @media (max-width: 1200px) {
    display: none;
  }
`

export const ResponsiveMenu = styled.div`
  position: relative;
  display: none;

  @media(max-width: 1200px) {
    display: block;
  }

  svg {
    font-size: 35px;
    color: #FFF;
  }

  .modal-mobile {
    width: 200px;
    background-color: #02529c;
    padding: 20px;
    padding-bottom: 10px;
    border-radius: 4px;
    position: absolute;
    right: 0;
    display: flex;
    flex-direction: column;

    a {
      font-size: 16px;
      text-decoration: none;
      display: flex;
      align-items: center;
      margin-bottom: 10px;
      color: #FFF;
    }

    svg {
      font-size: 20px;
      margin-right: 10px;
      color: #FFD60A;
    }

    .close-button {
      position: absolute;
      right: -5px;
      top: 5px;
      font-size: 25px;
      color: #FFF;
      cursor: pointer;
    }
  }
`
