import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  place-content: center;
  padding: 30px;

  @media (max-width: 550px) {
    padding: 30px 10px;
  }
`;

export const ImageFullScreen = styled.img`
  width: 100%; 
`

export const CloseModal = styled.button`
  position: absolute;
  display: flex;
  align-items: center;
  background: none;
  border: none;
  color: #FFF;
  font-size: 20px;
  right: 0;
  top: -30px;

  svg {
    font-size: 20px;
    position: relative;
    margin-right: 5px;
    top: 1px;
  }
`

export const ModalStyle = {
  content: {
    width: '70%',
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    position: 'relative',
    marginRight: '-50%',
    padding: '10px',
    overflow: 'none',
    transform: 'translate(-50%, -50%)',
  },
};

export const Box = styled.div`
  width: 50%;
  padding: 20px 30px;
  border-radius: 5px;
  position: relative;

  @media (max-width: 1800px) {
    width: 60%;
  }

  @media (max-width: 1700px) {
    width: 70%;
  }

  @media (max-width: 1450px) {
    width: 80%;
  }

  @media (max-width: 1200px) {
    width: 90%;
  }

  @media (max-width: 1000px) {
    width: 100%;
  }
  
  a {
    background-color: #02529c;
    padding: 5px 10px;
    border-radius: 5px;
    color: #FFF;
    position: absolute;
    text-decoration: none;
    right: 20px;
    top: 20px;
    transition: all 0.2s;

    @media (max-width: 550px) {
      right: 5px;
      top: -15px;
    }

    &:hover {
      background-color: #FFD60A;
    }
  }

  h3 {
    font-size: 30px;
    margin-bottom: 15px;
    color: #FFF;
    font-weight: 600;
  }

  .overview {
    display: flex;

    @media (max-width: 550px) {
      flex-direction: column;
    }

    .left {
      color: #FFF;

      img {
        width: 500px;

        @media (max-width: 875px) {
          width: 350px;
        }

        @media (max-width: 750px) {
          width: 200px;
        }

        @media (max-width: 550px) {
          width: 100%;
          margin-bottom: 10px;
        }
      }
    }

    .right {
      margin-left: 30px;
      display: flex;
      flex-direction: column;
      color: #FFF;

      @media (max-width: 550px) {
        margin-left: 0;
      }

      p {
        font-size: 15px;
        margin-bottom: 15px;
        color: rgba(255, 255, 255, 0.9);
      }

      span {
        font-size: 14px;
        color: rgba(255, 255, 255, 0.9);
      }

      .title {
        color: #FFF;
        font-weight: 700;
      }
    }
  }

  .screenshots {
    h3 {
      margin-top: 20px;
      margin-bottom: 10px;
      font-size: 20px;
      color: #FFF;
      font-weight: 500;
    }

    .images {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 15px;

      @media (max-width: 550px) {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    img {
      width: 100%;
      cursor: pointer;
      transition: all 0.2s;

      &:hover {
        filter: brightness(80%);
      }
    }
  }

  .description {
    h3 {
      margin-top: 30px;
      margin-bottom: 10px;
      font-size: 20px;
      color: #FFF;
      font-weight: 500;
    }

    p {
      color: rgba(255, 255, 255, 0.8);
      text-align: justify;
      font-size: 15px;
    }
  }

  .system-requirements {
    h3 {
      margin-top: 30px;
      margin-bottom: 10px;
      font-size: 20px;
      color: #FFF;
      font-weight: 500;
    }

    p {
      font-weight: 500;
      color: rgba(255, 255, 255, 0.8);
      font-size: 16px;

      .title {
        font-size: 15px;
        color: rgba(255, 255, 255, 0.5);
        font-weight: 400;
      }
    }
  }
`