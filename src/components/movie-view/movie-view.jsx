import { Container } from 'react-bootstrap';
import './movie-view.scss';
import Col from 'react-bootstrap/Col';

export const MovieView = ({ movie, onBackClick }) => {
  console.log(movie)
  return (
      <div>
        <div>
          <img src={movie.ImagePath} width={250} height={250}
           />
           
        </div>
        <div>
          <span>Title: </span>
          <span>{movie.Title}</span>
        </div>
        <div>
          <span>Director: </span>
          <span>{movie.Director}</span>
        </div>
        <p>
        {movie.Description}
        </p>
        <button
          onClick={onBackClick}
          className="back-button"
          style={{ cursor: "pointer" }}
          >
          Back
            </button>
      </div>
    );
  };

// img {
//   width: 100%
// }
// return (
//   <Row className="justify-content-md-center">
//     …
//   </Row>
// );