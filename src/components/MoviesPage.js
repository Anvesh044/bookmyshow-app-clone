import React from "react";
import { Container, Table } from "react-bootstrap";

const movies = [
  {
    id: 1,
    name: "Animal",
    genre: "Action/Thriller",
    release: "2023-12-01",
    rating: "4.7",
    price: "₹350",
    trailer: "https://www.youtube.com/embed/8FkLRUJj-o0",
  },
  {
    id: 2,
    name: "Salaar",
    genre: "Action",
    release: "2023-12-22",
    rating: "4.6",
    price: "₹400",
    trailer: "https://www.youtube.com/embed/4GPvYMKtrtI",
  },
  {
    id: 3,
    name: "Jawan",
    genre: "Action/Drama",
    release: "2023-09-07",
    rating: "4.5",
    price: "₹320",
    trailer: "https://www.youtube.com/embed/MWOlnZSnXJo",
  },
  {
    id: 4,
    name: "Fighter",
    genre: "Action",
    release: "2024-01-25",
    rating: "4.8",
    price: "₹380",
    trailer: "https://www.youtube.com/embed/hpwnlr-ZHB0",
  },
];

const MoviesPage = () => {
  return (
    <Container className="mt-4">
      <h2>Now Showing</h2>
      <Table striped bordered hover responsive className="mt-3">
        <thead>
          <tr>
            <th>#</th>
            <th>Movie</th>
            <th>Genre</th>
            <th>Release Date</th>
            <th>Rating</th>
            <th>Price</th>
            <th>Trailer</th>
          </tr>
        </thead>
        <tbody>
          {movies.map((movie, index) => (
            <tr key={movie.id}>
              <td>{index + 1}</td>
              <td>{movie.name}</td>
              <td>{movie.genre}</td>
              <td>{movie.release}</td>
              <td>{movie.rating} ⭐</td>
              <td>{movie.price}</td>
              <td>
                <iframe
                  width="200"
                  height="100"
                  src={movie.trailer}
                  title={movie.name}
                  allowFullScreen
                ></iframe>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default MoviesPage;
