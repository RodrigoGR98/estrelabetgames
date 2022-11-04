import styled from 'styled-components';

export const Container = styled.div`
  width: 250px;
  max-width: 250px;
  height: 250px;
  max-height: 250px;
  background-color: #003566;
  border-radius: 5px;
  overflow: hidden;
  transition: all 0.2s;
  position: relative;
  top: 0%;
  cursor: pointer;

  &:hover {
    top: -3%;
    background-color: #02529c;
  }

  img {
    width: 100%;
  }
  
  .game-info {
    padding: 5px 15px;

    h3 {
      font-weight: 700;
      color: #FFF;
      text-overflow: ellipsis;
      overflow: hidden; 
      white-space: nowrap;
      margin-bottom: 10px;
    }

    p {
      text-overflow: ellipsis;
      overflow: hidden; 
      white-space: nowrap;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 15px;
    }

    .subinfo {
      display: flex;
      align-items: center;
      place-content: space-between;

      .year {
        color: #FFF;
        font-size: 13px;
      }

      .genre-platform {
        .genre {
          font-weight: 700;
          font-size: 13px;
          color: rgba(255, 255, 255, 0.8);
        }

        svg {
          color: rgba(255, 255, 255, 0.8);
          font-size: 18px;
          margin-left: 5px;
        }
      }

      div {
        display: flex;
        align-items: center;
      }
    }
  }
`;
