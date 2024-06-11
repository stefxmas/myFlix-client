import { MovieView } from "../movie-view/movie-view";

  // Here you import the PropTypes library
import PropTypes from "prop-types";

// The BookCard function component 
export const MovieCard = ({ movie, onMovieClick }) => {
  console.log(movie)
  return (
    <div
      onClick={() => {
        onMovieClick(movie);
      }}
    >
      {movie.Title}
    </div>
  );
};



MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    // image: PropTypes.string.isRequired,
    // Director: PropTypes.string
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};