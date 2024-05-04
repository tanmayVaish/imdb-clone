import React from 'react';
import MovieCard from './MovieCard'; // Assuming MovieCard component is in separate file

import './Styles/MovieContainer.css'

interface Movie {
  name: string;
  yor: number;
  plot: string;
  poster: string;
  producer: string;
  actors: string[];
}

interface GridProps {
  movies: Movie[];
}

const MovieContainer: React.FC<GridProps> = ({ movies }) => {
  const renderMovieCards = () => {
    return movies.map((movie, index) => (
      <div key={index} className="movie-card">
        <MovieCard {...movie} />
      </div>
    ));
  };

  const renderRows = () => {
    const rows: JSX.Element[] = [];
    for (let i = 0; i < movies.length; i += 5) {
      rows.push(
        <div key={i} className="grid-row">
          {renderMovieCards().slice(i, i + 5)}
        </div>
      );
    }
    return rows;
  };

  return <div className="grid-container">{renderRows()}</div>;
};

export default MovieContainer;