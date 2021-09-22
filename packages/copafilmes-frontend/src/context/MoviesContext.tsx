import React, { createContext, useContext, useState } from 'react';

import { IMovie } from '../interfaces/IMovies';

interface MovieContextData {
  selectedMovies: IMovie[];
  handleSelectMovies(movie: IMovie): void;
}

const MovieContext = createContext<MovieContextData>({} as MovieContextData);

const MovieProvider: React.FC = ({ children }) => {
  const [selectedMovies, setSelectedMovies] = useState<IMovie[]>([]);

  const handleSelectMovies = (movie: IMovie) => {
    const alreadySelected = selectedMovies?.find(item => item === movie);

    if (alreadySelected) {
      const updatedMovies = selectedMovies?.filter(item => item !== movie);

      setSelectedMovies(updatedMovies);
    } else {
      setSelectedMovies([...selectedMovies, movie]);
    }
  };

  return (
    <MovieContext.Provider value={{ selectedMovies, handleSelectMovies }}>
      {children}
    </MovieContext.Provider>
  );
};

function useMovies(): MovieContextData {
  const context = useContext(MovieContext);

  if (!context) {
    throw new Error('useMovies must be used within an MovieProvider');
  }

  return context;
}

export { MovieProvider, useMovies };
