import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import OverlayButton from "./components/Button";
import MovElementLi from "./components/MovElement";
import Summary from "./components/summary";
// `http://www.omdbapi.com/?i=${responseJSON.Search.imdbID}&apikey=855effac`

const average = (arr) =>
  arr.reduce((acc, cur, i, arr) => acc + cur / arr.length, 0).toFixed(2);

export default function App() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [watched, setWatched] = useState([]);
  const [isOpen1, setIsOpen1] = useState(true);
  const [isOpen2, setIsOpen2] = useState(true);
  const [isOpen3, setIsOpen3] = useState(true);
  const [checkLength, setCheckLength] = useState(0);

  const movieCaller = async () => {
    const url = `http://www.omdbapi.com/?s=${query}&page=${4}&apikey=855effac`;

    if (query.length >= 3) {
      const response = await fetch(url);
      const responseJSON = await response.json();

      if (responseJSON.Search) {
        setMovies(responseJSON.Search);
      }
    }
  };

  useEffect(() => {
    if (!query) {
      return;
    }
    movieCaller(query);
  }, [query]);

  return (
    <>
      <NavBar query={query} setQuery={setQuery}></NavBar>

      <main className="main">
        <div className="box">
          <OverlayButton open={isOpen1} setOpen={setIsOpen1}></OverlayButton>
          {isOpen1 && (
            <ul className="list">
              {movies?.map((movie, i) => (
                <MovElementLi
                  setCheckLength={setCheckLength}
                  watched={watched}
                  setWatched={setWatched}
                  key={i}
                  movie={movie}
                />
              ))}
            </ul>
          )}
        </div>

        <div className="box">
          <OverlayButton open={isOpen2} setOpen={setIsOpen2}></OverlayButton>
          {isOpen2 && (
            <>
              <Summary movie={movies} average={average} watched={watched} />

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
                        <span>{movie.Metascore}</span>
                      </p>
                      <p>
                        <span>⏳</span>
                        <span>{parseInt(movie.Runtime)} min</span>
                      </p>
                    </div>
                  </li>
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="box">
          <OverlayButton open={isOpen3} setOpen={setIsOpen3}></OverlayButton>
          {isOpen3 && (
            <>
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
                        <span>{movie.Metascore}</span>
                      </p>
                      <p>
                        <span>⏳</span>
                        <span>{parseInt(movie.Runtime)} min</span>
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
