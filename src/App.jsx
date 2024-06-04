import "./App.css";
import movies from "./data/movies";


function App() {
  return (
    <div className="App">
      <section className="movie-list-section">
        { movies.map((item, index) => {
        return ( 
          <div key={index} className="movie-box">
              <img className="movie-img" src={item.image}/>
              <ul className="movie-data">
              <li>Title: {item.title}</li>
              <li>Year: {item.year}</li>
              <li>Runtime: {item.runtime}</li>
              <li>Genres:
                { item.genres.map((item => {
                  return (
                    <span className="movie-genres">{item}</span>
                  )
                }))}
                </li>   
              <li>IMDB Ratings: {item.imdbRating} </li>
              <li>IMDB Votes: {item.imdbVotes}</li>
              </ul>
          </div>
        )
      }) }
      </section>
    </div>
  );
}

export default App;
