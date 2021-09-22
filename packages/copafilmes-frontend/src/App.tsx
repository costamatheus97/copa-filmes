import React from 'react';
import { BrowserRouter } from 'react-router-dom';

import { MovieProvider } from './context/MoviesContext';

import Routes from './routes';
import GlobalStyle from './styles/global';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <MovieProvider>
        <Routes />
      </MovieProvider>
      <GlobalStyle />
    </BrowserRouter>
  );
};

export default App;
