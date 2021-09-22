import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 3rem 5rem;
`;

export const Header = styled.header`
  background-color: #242424;
  width: 100%;
  padding: 3rem;
  color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  height: 400px;

  span {
    color: #eee;
    font-size: 1rem;
    text-transform: uppercase;
    margin-bottom: 0.775rem;
  }

  h1 {
    font-weight: bold;
    font-size: 2.5rem;
    margin-bottom: 2.5rem;
    position: relative;

    &:after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 50%;
      transform: translateX(-50%);
      max-width: 32px;
      width: 100%;
      height: 2px;
      background: #fff;
    }
  }

  p {
    font-weight: 500;
    text-align: center;
    max-width: 600px;
    width: 100%;
  }
`;

export const ActionBar = styled.section`
  width: 100%;
  display: flex;
  justify-content: space-between;
  margin: 2rem 0;

  a {
    color: #fff;
    text-transform: uppercase;
    background: #000;
    display: flex;
    align-items: center;
    justify-content: center;
    max-width: 300px;
    width: 100%;
    transition: all 0.3s ease-in-out;
    font-weight: 500;

    &:hover {
      opacity: 0.8;
    }
  }

  h2 {
    color: #fff;
    font-weight: bold;
  }
`;

export const MovieContainer = styled.section`
  position: relative;
  width: 100%;
  height: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(400px, 1fr));
  grid-gap: 1rem;
`;

export const MovieCard = styled.article`
  background: #fff;
  padding: 2rem;
  width: 100%;
  display: flex;
  align-items: center;

  input {
    margin-right: 2rem;
    -ms-transform: scale(2);
    -moz-transform: scale(2);
    -webkit-transform: scale(2);
    -o-transform: scale(2);
    transform: scale(2);
    padding: 10px;
  }

  h3 {
    font-weight: bold;
    margin-bottom: 4px;
  }

  p {
    font-size: 14px;
  }
`;
