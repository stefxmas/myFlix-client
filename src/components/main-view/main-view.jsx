import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";
import { LoginView } from "../login-view/login-view";
import { SignupView } from "../signup-view/signup-view";
import Row from "react-bootstrap/Row";

export const MainView = () => {
  const storedUser = JSON.parse(localStorage.getItem("user"));
  const storedToken = localStorage.getItem("token");
  const [user, setUser] = useState(storedUser? storedUser : null);
  const [token, setToken] = useState(storedToken? storedToken : null);
  const [movies, setMovies] = useState([]);
  const [selectedmovie, setSelectedmovie] = useState(null);
  
  useEffect(() => {
    if (token) {
      
      fetch("https://young-taiga-22993-24addf49ed31.herokuapp.com/movies", {
      headers: { Authorization: `Bearer ${token}` }
    })

    .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.docs.map((doc) => {
          return {
            id: doc.key,
            title: doc.title,
            image: `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
            Director: movie.Director.Name,
          };
        });

        setMovies(moviesFromApi);
      });
  }; []);
  // token, movies
  return (
      <Row> 
        {!user ? (
        
          <Col md={5}>
            <LoginView onLoggedIn={(user) => setUser(user)} />
            or
            <SignupView />
          </Col>
        
        ) : selectedMovie ? (
          <MovieView 
            movie={selectedMovie} 
            onBackClick={() => setSelectedMovie(null)} 
          />
        ) : movie.length === 0 ? (
          <div>The list is empty!</div>
        ) : (
          <>
            {movie.map((movie) => (
              // <Col key={movie.id} md={3}></Col>
              <MovieCard
                key={movie.id}
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  setSelectedMovie(newSelectedMovie);
                }}
              />
            ))}
          </>
        )}
      </Row>
  );
};
//       .then((response) => {
//         if (!response.ok) {
//           throw new Error('HTTP error ' + response.status);
//         }
//         return response.json();
//       })
//       .then((data) => {
//         const moviesFromAPI = data.map((movie) => {
           
//           return {
//             id: movie._id,
//             Title: movie.Title,
//             ImagePath: movie.ImagePath,
//             Director: movie.Director.Name,
//             Genre: movie.Genre.Name,
//             Description: movie.Description,
//             Featured: movie.Featured,
//           };
//         });
//         setMovies(moviesFromAPI);
//       })
//       .catch((error) => {
//         console.error("Error fetching movies:", error);
//       });
//     }
//   }, [token, movies]);



//   if (!user) {
//     return (
//       <>
//         <LoginView onLoggedIn={(user, token) => {
//           setUser(user);
//           setToken(token);
//         }} />
//         or
//         <SignupView />
//       </>
//     );
//   }

//   if (selectedmovie) {
//     if (selectedmovie) {
//         return (
//           <MovieView movie={selectedmovie} onBackClick={() => setSelectedmovie(null)} />
//         );
//       }
//   }

//   if (movies.length === 0) {
//     return <div>The list is empty!</div>;
//   }

//   return (
//     <div>
//       <button onClick={()=>{
//         localStorage.clear();
//         location.href = "/";
//       }}>Log out</button>
//       {movies && movies.map((movie) => (
//         <MovieCard
//         key={movie.id}
//         movie={movie}
//         onMovieClick={(newSelectedmovie) => {
//           setSelectedmovie(newSelectedmovie);
//         }}
//       />
//       ))}
//     </div>
//   );
// };
