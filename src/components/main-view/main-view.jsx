import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card";
import { MovieView } from "../movie-view/movie-view";

export const MainView = () => {
  const [movies, setmovies] = useState([
    {
      id: 1,
      title: "Silence of the Lambs",
      image:
      "https://www.indiewire.com/wp-content/uploads/2017/02/silence-of-the-lambs-anthony-hopkins-01.jpg?w=1330&h=748&crop=1",
      author: "Jonathan Demme"
    },
    {
      id: 2,
      title: "Avengers Infinity War",
      image:
      "https://m.media-amazon.com/images/I/81V1KTnYKwL._SY500_.jpg",
      author: "Joe Russo"
    },
    {
      id: 3,
      title: "John Wick",
      image:
      "https://hips.hearstapps.com/hmg-prod/images/keanu-reeves-john-wick-4-1677167115.jpg?resize=980:*",
      author: "Chad Stahelski"
    },
    {
      id: 4,
      title: "The Shining",
      image:
      "https://m.media-amazon.com/images/I/91yYss6rrXL._SL1500_.jpg",
      author: "Stanley Kubrick"
    },
    {
      id: 5,
      title: "Harold & Kumar Go to White Castle",
      image:
      "https://akns-images.eonline.com/eol_images/Entire_Site/2022224/rs_1024x759-220324102354-1024-John-Cho-Kel-Penn-LT-32422-shutterstock_editorial_5882973u.jpg?fit=around%7C1024:759&output-quality=90&crop=1024:759;center,top",
      author: "Danny Leiner"
    }
  ]);

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