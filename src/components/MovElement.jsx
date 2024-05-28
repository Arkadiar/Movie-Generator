import { useEffect, useState } from "react";
export default function MovElementLi({
  movie,
  watched,
  setWatched,
  setCheckLength,
}) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  async function clickMovie() {
    const url = `http://www.omdbapi.com/?i=${movie.imdbID}&apikey=855effac`;

    if (watched.some((m) => m.imdbID === movie.imdbID)) return;

    try {
      setLoading(true);
      setError(null);

      const response = await fetch(url);

      // Log the raw response for debugging
      const responseText = await response.text();
      // console.log("Response text:", responseText);

      // Check if the response is valid JSON
      let detailedMovie;
      try {
        detailedMovie = JSON.parse(responseText);
        // setCheckLength((curr) => curr + 1);
      } catch (parseError) {
        console.error("Failed to parse JSON:", parseError);
        setError("Failed to parse JSON response");
        return;
      }

      if (detailedMovie.Response === "False") {
        setError(detailedMovie.Error);
        return;
      }

      setWatched([...watched, detailedMovie]);
    } catch (fetchError) {
      console.error("Fetch error:", fetchError);
      setError("Failed to fetch movie details");
    } finally {
      setLoading(false);
    }
  }

  return (
    <li onClick={() => clickMovie()} className="listElement" key={movie.imdbID}>
      <img src={movie.Poster} alt={`${movie.Title} poster`} />
      <h3>{movie.Title}</h3>
      <div>
        <p>
          <span>🗓</span>
          <span>{movie.Year}</span>
        </p>
      </div>
    </li>
  );
}
