// import SignUp from './components/users/Register'
// import SignIn from './components/users/Login'
import MovieContainer from "./components/MoviePage/MovieContainer";
import "./App.css";
import NavbarHOC from "./hoc/NavbarHOC";
const movies = [
  {
    name: "Movie Name",
    yor: 2022,
    plot: "The error indicates that there's a type mismatch...",
    poster: "https://picsum.photos/200/300",
    producer: "Producer Name",
    actors: ["Actor 1", "Actor 2"],
  },
  {
    name: "Movie Name",
    yor: 2022,
    plot: "The error indicates that there's a type mismatch...",
    poster: "https://picsum.photos/200/300",
    producer: "Producer Name",
    actors: ["Actor 1", "Actor 2"],
  },
  {
    name: "Movie Name",
    yor: 2022,
    plot: "The error indicates that there's a type mismatch...",
    poster: "https://picsum.photos/200/300",
    producer: "Producer Name",
    actors: ["Actor 1", "Actor 2"],
  },
  {
    name: "Movie Name",
    yor: 2022,
    plot: "The error indicates that there's a type mismatch...",
    poster: "https://picsum.photos/200/300",
    producer: "Producer Name",
    actors: ["Actor 1", "Actor 2"],
  },
  {
    name: "Movie Name",
    yor: 2022,
    plot: "The error indicates that there's a type mismatch...",
    poster: "https://picsum.photos/200/300",
    producer: "Producer Name",
    actors: ["Actor 1", "Actor 2"],
  },
  {
    name: "Movie Name",
    yor: 2022,
    plot: "The error indicates that there's a type mismatch...",
    poster: "https://picsum.photos/200/300",
    producer: "Producer Name",
    actors: ["Actor 1", "Actor 2"],
  },
  {
    name: "Movie Name",
    yor: 2022,
    plot: "The error indicates that there's a type mismatch...",
    poster: "https://picsum.photos/200/300",
    producer: "Producer Name",
    actors: ["Actor 1", "Actor 2"],
  },
  {
    name: "Movie Name",
    yor: 2022,
    plot: "The error indicates that there's a type mismatch...",
    poster: "https://picsum.photos/200/300",
    producer: "Producer Name",
    actors: ["Actor 1", "Actor 2"],
  },
  {
    name: "Movie Name",
    yor: 2022,
    plot: "The error indicates that there's a type mismatch...",
    poster: "https://picsum.photos/200/300",
    producer: "Producer Name",
    actors: ["Actor 1", "Actor 2"],
  },
  {
    name: "Movie Name",
    yor: 2022,
    plot: "The error indicates that there's a type mismatch...",
    poster: "https://picsum.photos/200/300",
    producer: "Producer Name",
    actors: ["Actor 1", "Actor 2"],
  },
  // Add more movie objects as needed
];

function App() {
  return (
    <>
      <NavbarHOC>
        <div className="app">
          <h1>Movie Grid</h1>
          <MovieContainer movies={movies} />
        </div>
      </NavbarHOC>
    </>
  );
}

export default App;
