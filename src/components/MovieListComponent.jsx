const MovieListComponent = (props) => {
  return (
    <>
      <section className="movie-list-item">
        <img src={props.image} alt={props.title} />
        <div>
          <p>Title: {props.title}</p>
          <p>Year: {props.year}</p>
          <p>Runtime: {props.runtime}</p>
          {/* <p>Genres: {props.genres}</p> */}
          <p className="movie-genre-item">
            Genres:
            {props.genres.map((genre, index) => {
              return index < 2 ? (
                <p className="movie-genre" key={index}>
                  {genre}
                </p>
              ) : null;
            })}
          </p>
          <p>IMDB Ratings: {props.imdbRating}</p>
          <p>IMDB Votes: {props.imdbVotes}</p>
        </div>
      </section>
    </>
  );
};

export default MovieListComponent;
