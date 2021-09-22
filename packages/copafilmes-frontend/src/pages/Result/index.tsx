import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useMovies } from '../../context/MoviesContext';
import { IMovie } from '../../interfaces/IMovies';
import { Header } from '../Home/styles';
import { Container, WinnersCards, WinnersContainer } from './styles';

const Result: React.FC = () => {
  const [winners, setWinners] = useState<IMovie[]>();

  const { selectedMovies } = useMovies();

  useEffect(() => {
    (async () => {
      const { data } = await axios.post(
        'http://localhost:3333/api/competition',
        selectedMovies,
      );

      setWinners(data);
    })();
  }, []);

  return (
    <Container>
      <Header>
        <span>Campeonato de Filmes</span>
        <h1>Resultado Final</h1>
        <p>
          Veja o resultado final do Campeonado de filmes de forma simples e
          rápida
        </p>
      </Header>
      <WinnersContainer>
        {winners ? (
          winners.map((winner, index) => {
            return (
              <WinnersCards>
                <h2>{index + 1}º</h2>
                <p>{winner.titulo}</p>
              </WinnersCards>
            );
          })
        ) : (
          <div>
            <h2>Por favor, selecione 8 filmes.</h2>
            <Link to="/">voltar</Link>
          </div>
        )}
      </WinnersContainer>
    </Container>
  );
};

export default Result;
