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
  const [selectedmovie, setSelectedmovie] = useState(null);
  
  useEffect(() => {
    
    //const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2NjQzODc2MDVmNjY0MjI2NGUzZjYxOWUiLCJVc2VybmFtZSI6ImpvaG5kb2UxMjExMiIsIlBhc3N3b3JkIjoiJDJiJDEwJEdEWDJkVXgubnM0a2RwN3UyLlZoZy4xb2p3OGRsUkduUDlyN3ZFbXNoOHN4elJYT1JEdUYuIiwiRW1haWwiOiJqb2huZG9lMTIxMkBlbWFpbC5jb20iLCJCaXJ0aGRheSI6IjE5NzAtMTEtMTZUMDA6MDA6MDAuMDAwWiIsIkZhdm9yaXRlTW92aWVzIjpbXSwiX192IjowLCJpYXQiOjE3MTU4ODM5MTUsImV4cCI6MTcxNjQ4ODcxNSwic3ViIjoiam9obmRvZTEyMTEyIn0.kNVWr3lwvgqwN7T7IiIpuMvAaJFZ79LEkzu3Dx7_Sb8";
    
    fetch("https://young-taiga-22993-24addf49ed31.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${localStorage.getItem("token")}` }
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
    
  }, [movies]);



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
      <button onClick={()=>{
        localStorage.clear();
        location.href = "/";
      }}>Log out</button>
      {movies && movies.map((movie) => (
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
