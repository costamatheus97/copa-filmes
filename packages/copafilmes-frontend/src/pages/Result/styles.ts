import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3rem 5rem;
`;

export const WinnersContainer = styled.section`
  margin: 2rem 0;
  width: 100%;

  div {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    h2 {
      font-size: 2rem;
      color: #242424;
    }

    a {
      color: #242424;
      padding: 8px;
      background: #fff;
      max-width: 80px;
      width: 100%;
      display: flex;
      align-items: center;
      justify-content: center;
      text-transform: uppercase;
      font-weight: bold;
      border-radius: 4px;
      margin-top: 2rem;
    }
  }
`;

export const WinnersCards = styled.section`
  display: flex;
  background: #fff;
  margin: 8px 0;
  width: 100%;

  h2 {
    font-size: 4rem;
    background: #242424;
    color: #fff;
    padding: 24px;
    font-weight: 400;
  }

  p {
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 2rem;
  }
`;
