const API_KEY = "855effac";
const BASE_URL = "http://www.omdbapi.com/";

export const fetchMoviesKeyword = async (keyword, page = 1) => {
  const response = await fetch(
    `${BASE_URL}?s=${keyword}&page=${page}&apikey=${API_KEY}`
  );
  const data = await response.json();
  return data.Search || [];
};

export const fetchMoviePlot = async (imdbID) => {
  const response = await fetch(
    `${BASE_URL}?i=${imdbID}&plot=full&apikey=${API_KEY}`
  );
  const data = await response.json();
  return data;
};

export const fetchMoviesActor = async (actor, page = 1) => {
  const response = await fetch(
    `${BASE_URL}?s=${actor}&page=${page}&apikey=${API_KEY}`
  );
  const data = await response.json();
  return data.Search || [];
};
