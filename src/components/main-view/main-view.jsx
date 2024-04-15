import { useState } from "react";
import { BookCard } from "../book-card/book-card";
import { BookView } from "../book-view/book-view";

export const MainView = () => {
  const [books, setBooks] = useState([
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
      "https://www.imdb.com/title/tt4154756/mediaviewer/rm4044245504/",
      author: "Joe Russo"
    },
    {
      id: 3,
      title: "John Wick",
      image:
      "https://www.imdb.com/title/tt2911666/mediaviewer/rm1723909376/",
      author: "Chad Stahelski"
    },
    {
      id: 4,
      title: "The Shining",
      image:
      "https://www.imdb.com/title/tt0081505/mediaviewer/rm3901111552/",
      author: "Stanley Kubrick"
    },
    {
      id: 5,
      title: "Harold & Kumar Go to White Castle",
      image:
      "https://www.imdb.com/title/tt0366551/mediaviewer/rm484782080/",
      author: "Danny Leiner"
    }
  ]);

  const [selectedBook, setSelectedBook] = useState(null);

  if (selectedBook) {
    if (selectedBook) {
        return (
          <BookView book={selectedBook} onBackClick={() => setSelectedBook(null)} />
        );
      }
  }

  if (books.length === 0) {
    return <div>The list is empty!</div>;
  }

  return (
    <div>
      {books.map((book) => (
        <BookCard
        key={book.id}
        book={book}
        onBookClick={(newSelectedBook) => {
          setSelectedBook(newSelectedBook);
        }}
      />
      ))}
    </div>
  );
};