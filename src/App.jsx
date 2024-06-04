import "./App.css";
import movies from "./data/movies";
import MovieListComponent from "./components/MovieListComponent";

function App() {
  return (
    <div className="App">
      <h1>Movie List Section</h1>
      {movies.map((movie, index) => {
        return (
          <section className="movie-list-section" key={index}>
            {/* Render Movie Lists Here */}
            <MovieListComponent {...movie} />
          </section>
        );
      })}
    </div>
  );
}

export default App;
