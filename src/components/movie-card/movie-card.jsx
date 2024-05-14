import { MovieView } from "../movie-view/movie-view";
export const MovieCard = ({ movie, onMovieClick }) => {
    return (
      <div
      
        onClick={() => {
          onMovieClick(movie);
        }}
      >
        {movie.title}
      </div>
    );
  };
