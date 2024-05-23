import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import OverlayButton from "./components/Button";
import MovElementLi from "./components/MovElement";

const tempMovieData = [];

const tempWatchedData = [];

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0);

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);

  const movieCaller = async () => {
    const url = `http://www.omdbapi.com/?s=${query}&apikey=855effac`;
    if (query.length >= 3) {
      const response = await fetch(url);
      const responseJSON = await response.json();

      if (responseJSON.Search) {
        setMovies(responseJSON.Search);
      }
      console.log(responseJSON);
    }
  };

  useEffect(() => {
    movieCaller(query);
  }, [query]);

  const avgImdbRating = average(watched.map((movie) => movie.imdbRating));
  const avgUserRating = average(watched.map((movie) => movie.userRating));
  const avgRuntime = average(watched.map((movie) => movie.runtime));

  return (
    <>
      <NavBar query={query} setQuery={setQuery}></NavBar>

      <main className="main">
        <div className="box">
          <OverlayButton open={isOpen1} setOpen={setIsOpen1}></OverlayButton>
          {isOpen1 && (
            <ul className="list">
              {movies?.map((movie, i) => (
                <MovElementLi key={i} movie={movie} />
              ))}
            </ul>
          )}
        </div>

        <div className="box">
          <OverlayButton open={isOpen2} setOpen={setIsOpen2}></OverlayButton>
          {isOpen2 && (
            <>
              <div className="summary">
                <h2>Movies you watched</h2>
                <div>
                  <p>
                    <span>#️⃣</span>
                    <span>{watched.length} movies</span>
                  </p>
                  <p>
                    <span>⭐️</span>
                    <span>{avgImdbRating}</span>
                  </p>
                  <p>
                    <span>🌟</span>
                    <span>{avgUserRating}</span>
                  </p>
                  <p>
                    <span>⏳</span>
                    <span>{avgRuntime} min</span>
                  </p>
                </div>
              </div>

              <ul className="list">
                {watched.map((movie) => (
                  <li key={movie.imdbID}>
                    <img src={movie.Poster} alt={`${movie.Title} poster`} />
                    <h3>{movie.Title}</h3>
                    <div>
                      <p>
                        <span>⭐️</span>
                        <span>{movie.imdbRating}</span>
                      </p>
                      <p>
                        <span>🌟</span>
                        <span>{movie.userRating}</span>
                      </p>
                      <p>
                        <span>⏳</span>
                        <span>{movie.runtime} min</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
      </main>
    </>
  );
}
