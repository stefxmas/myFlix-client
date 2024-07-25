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

// import PropTypes from "prop-types";
// import { Button, Card } from "react-bootstrap";

// export const BookCard = ({ book, onBookClick }) => {
//   return (
//     <Card>
//       <Card.Img variant="top" src={book.image} />
//       <Card.Body>
//         <Card.Title>{book.title}</Card.Title>
//         <Card.Text>{book.author}</Card.Text>
//         <Button onClick={() => onBookClick(book)} variant="link">
//           Open
//         </Button>
//       </Card.Body>
//     </Card>
//   );
// };



MovieCard.propTypes = {
  movie: PropTypes.shape({
    Title: PropTypes.string.isRequired,
    // image: PropTypes.string.isRequired,
    // Director: PropTypes.string
  }).isRequired,
  onMovieClick: PropTypes.func.isRequired
};