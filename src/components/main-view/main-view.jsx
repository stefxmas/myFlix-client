import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setmovies] = useState([])

  useEffect(() => {
    const token = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQzODc2MDVmNjY0MjI2NGUzZjYxOWUiLCJVc2VybmFtZSI6ImpvaG5kb2UxMjExMiIsIlBhc3N3b3JkIjoiJDJiJDEwJEdEWDJkVXgubnM0a2RwN3UyLlZoZy4xb2p3OGRsUkduUDlyN3ZFbXNoOHN4elJYT1JEdUYuIiwiRW1haWwiOiJqb2huZG9lMTIxMkBlbWFpbC5jb20iLCJCaXJ0aGRheSI6IjE5NzAtMTEtMTZUMDA6MDA6MDAuMDAwWiIsIkZhdm9yaXRlTW92aWVzIjpbXSwiX192IjowLCJpYXQiOjE3MTU4ODM5MTUsImV4cCI6MTcxNjQ4ODcxNSwic3ViIjoiam9obmRvZTEyMTEyIn0.kNVWr3lwvgqwN7T7IiIpuMvAaJFZ79LEkzu3Dx7_Sb8'
    fetch("https://ajs-movie-api-598adfef849b.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error('HTTP error ' + response.status);
        }
        return response.json();
      })
      .then((data) => {
        const moviesFromAPI = data.map((movie) => {
           
          return {
            id: movie._id,
            Title: movie.Title,
            ImagePath: movie.ImagePath,
            Director: movie.Director.Name,
            Genre: movie.Genre.Name,
            Description: movie.Description,
            Featured: movie.Featured,
          };
        });
        setmovies(moviesFromAPI);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
    
  }, []);

  const [selectedmovie, setSelectedmovie] = useState(null);

  if (selectedmovie) {
    if (selectedmovie) {
        return (
          <MovieView movie={selectedmovie} onBackClick={() => setSelectedmovie(null)} />
        );
      }
  }

  if (movies.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {movies.map((movie) => (
        <MovieCard
        key={movie.id}
        movie={movie}
        onMovieClick={(newSelectedmovie) => {
          setSelectedmovie(newSelectedmovie);
        }}
      />
      ))}
    </div>
  );
};