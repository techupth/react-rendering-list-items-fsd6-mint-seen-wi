import "./App.css";
import movies from "./data/movies.jsx";

function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        <div className="app-movie">
          <h1>Movie List Section</h1>
          {movies.map((item, index) => (
            <div key={index} className={`movie-list`}>
              <div key={item.movies} className={`movie-block`}>
                <div key={item.image} className={`movie-pic`}>
                  <img src={item.image} />
                </div>
                <div key={`${item.movies}-name`} className={`movie-detail`}>
                  <div>Title: {item.title} </div>
                  <div>Year: {item.year}</div>
                  <div>Runtime: {item.runtime}</div>
                  <div className={`button-genre`}>
                    Genres:{" "}
                    {item.genres.map((genre, index) => (
                      <button key={index} c>
                        {genre}
                      </button>
                    ))}
                  </div>
                  <div>IMDB Rating: {item.imdbRating}</div>
                  <div>IMDB Votes: {item.imdbVotes}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

export default App;
