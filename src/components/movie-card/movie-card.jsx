import { MovieView } from "../movie-view/movie-view";

  // Here you import the PropTypes library
import PropTypes from "prop-types";
import { Button, Card } from "react-bootstrap";
// The BookCard function component 
export const MovieCard = ({ movie, onMovieClick }) => {
  console.log(movie)
  return (
    
      <Card>
      <Card.Img variant="top" src={movie.image} />
       <Card.Body>
         <Card.Title>{movie.Title}</Card.Title>
         <Card.Text>{movie.Description}</Card.Text>
         <Button onClick={() => {
        onMovieClick(movie);
      }} variant="link">
           Open
         </Button>
       </Card.Body>
     </Card>
     
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