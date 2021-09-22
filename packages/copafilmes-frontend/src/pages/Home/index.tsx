import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Spinner from '../../components/Spinner';
import { useMovies } from '../../context/MoviesContext';
import { IMovie } from '../../interfaces/IMovies';
import {
  ActionBar,
  Container,
  Header,
  MovieCard,
  MovieContainer,
} from './styles';

const Home: React.FC = () => {
  const [movies, setMovies] = useState<IMovie[]>();
  const [isLoading, setIsLoading] = useState(false);

  const { selectedMovies, handleSelectMovies } = useMovies();

  useEffect(() => {
    setIsLoading(true);

    (async () => {
      const { data } = await axios.get('http://localhost:3333/api/movies');

      setMovies(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <span>Campeonato de Filmes</span>
        <h1>Fase de Seleção</h1>
        <p>
          Selecione 8 filmes que você deseja que entrem na competição e depois
          pressiona o botão Gerar Meu Campeonato para prosseguir
        </p>
      </Header>

      <ActionBar>
        <h2>
          Selecionados <br /> {selectedMovies.length} de 8 filmes
        </h2>
        <Link to={selectedMovies.length < 8 ? '' : '/results'}>
          Gerar meu campeonato
        </Link>
      </ActionBar>

      <MovieContainer>
        {isLoading ? (
          <Spinner />
        ) : (
          movies &&
          movies.map(movie => {
            const isSelected = selectedMovies.find(item => item === movie);

            return (
              <MovieCard key={movie.id}>
                <input
                  disabled={selectedMovies.length === 8 && !isSelected}
                  type="checkbox"
                  onChange={() => handleSelectMovies(movie)}
                />
                <div>
                  <h3>{movie.titulo}</h3>
                  <p>{movie.ano}</p>
                </div>
              </MovieCard>
            );
          })
        )}
      </MovieContainer>
    </Container>
  );
};

export default Home;
