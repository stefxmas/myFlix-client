import './movie-view.scss';
import Col from 'react-bootstrap/Col';

export const MovieView = ({ movie, onBackClick }) => {
    return (
      <div>
        <div>
          <img src={movie.ImagePath} />
        </div>
        <div>
          <span>Title: </span>
          <span>{movie.Title}</span>
        </div>
        <div>
          <span>Director: </span>
          <span>{movie.Director.Name}</span>
        </div>
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
  
  <Col md={8} style={{ border: "1px solid black" }}>
         <MovieView
           style={{ border: "1px solid green" }}
           movie={selectedMovie}
           onBackClick={() => setSelectedMovie(null)}
         />
       </Col>