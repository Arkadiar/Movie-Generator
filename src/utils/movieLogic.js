import {
  fetchMoviesKeyword,
  fetchMoviePlot,
  fetchMoviesActor,
} from "./apiCalls";
import { extractKeywordsFromPlot } from "./utils";

export const fetchRandomMovies = async (watchedMovies) => {
  let selectedMovies = [];

  // Iterate over watched movies and extract keywords
  for (let watchedMovie of watchedMovies) {
    if (!watchedMovie.Plot) continue;
    const plotKeywords = extractKeywordsFromPlot(watchedMovie.Plot);

    for (let keyword of plotKeywords) {
      for (let page = 1; page <= 5; page++) {
        // limit to first 5 pages
        let results = await fetchMoviesKeyword(keyword, page);
        selectedMovies.push(...results);
        if (selectedMovies.length >= 30) break; // accumulate 30 results to choose from
      }
      if (selectedMovies.length >= 30) break;
    }
  }

  if (selectedMovies.length < 3) {
    const leadActor = watchedMovies[0]?.Actors?.split(", ")[0];
    if (leadActor) {
      for (let page = 1; page <= 5; page++) {
        // limit to first 5 pages
        let results = await fetchMoviesActor(leadActor, page);
        selectedMovies.push(...results);
        if (selectedMovies.length >= 30) break; // accumulate 30 results to choose from
      }
    }
  }

  // Randomly select 3 movies from the accumulated results
  const randomMovies = selectedMovies
    .sort(() => 0.5 - Math.random())
    .slice(0, 3);
  return randomMovies;
};
