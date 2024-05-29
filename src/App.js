import { useState, useEffect } from "react";
import NavBar from "./components/NavBar";
import OverlayButton from "./components/Button";
import MovElementLi from "./components/MovElement";
import Summary from "./components/summary";
import BtnComponent from "./components/BtnComponent";
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
  const [page, setPage] = useState(1);

  let totResults = 0;

  const movieCaller = async (signal) => {
    const url = `http://www.omdbapi.com/?s=${query}&page=${page}&apikey=855effac`;

    try {
      const response = await fetch(url, { signal });
      console.log(response);
      const responseJSON = await response.json();

      if (responseJSON.Search) {
        setMovies(responseJSON.Search);
        console.log(responseJSON);
        totResults = responseJSON.totalResults;
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Fetch error:", error);
      }
    }
  };
  // console.log(totResults);
  function nextPage() {
    setPage((prevPage) => prevPage + 1);
  }
  function prevPage() {
    if (page !== 1) setPage((prevPage) => prevPage - 1);
  }

  useEffect(() => {
    const controller = new AbortController();
    movieCaller(controller.signal);
    return function () {
      controller.abort();
    };
  }, [query, page]);

  return (
    <>
      <NavBar setPage={setPage} query={query} setQuery={setQuery}></NavBar>

      <main className="main">
        <div className="box">
          <OverlayButton open={isOpen1} setOpen={setIsOpen1}></OverlayButton>
          {isOpen1 && (
            <ul className="list">
              {movies?.map((movie, i) => (
                <MovElementLi
                  // setCheckLength={setCheckLength}
                  watched={watched}
                  setWatched={setWatched}
                  key={i}
                  movie={movie}
                  context="movies"
                />
              ))}
              {movies.length === 0 ? (
                ""
              ) : (
                <div className="flex justify-between">
                  <BtnComponent onClick={prevPage}>Previous Page</BtnComponent>
                  <BtnComponent onClick={nextPage}>Next Page</BtnComponent>
                </div>
              )}
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
                  <MovElementLi
                    key={movie.imdbID}
                    movie={movie}
                    watched={watched}
                    setWatched={setWatched}
                    context="watched"
                  />
                ))}
              </ul>
            </>
          )}
        </div>
        <div className="box">
          <OverlayButton open={isOpen3} setOpen={setIsOpen3}></OverlayButton>
          {isOpen3 && (
            <>
              <ul className="list"></ul>
            </>
          )}
        </div>
      </main>
    </>
  );
}
