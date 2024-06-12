import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedMovie, setSelectedMovie] = useState(null);
  
  useEffect(() => {
    
    
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
        setMovies(moviesFromAPI);
      })
      .catch((error) => {
        console.error("Error fetching movies:", error);
      });
    
  }, []);

  const [selectedmovie, setSelectedmovie] = useState(null);

  if (!user) {
    return (
      <>
        <LoginView onLoggedIn={(user, token) => {
          setUser(user);
          setToken(token);
        }} />
        or
        <SignupView />
      </>
    );
  }

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
