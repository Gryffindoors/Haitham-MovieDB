import { createContext, useEffect, useState } from "react";
import AxiosInstance from "../Components/API/AxiosInstance";

export const MoviesPopular = createContext([]);

export function MoviesPopularProvider(props) {
  const [MovieList, setMovieList] = useState([]);

  useEffect(() => {
    AxiosInstance.get("movie/popular?language=en-US&page=1")
      .then((resp) => resp.data)
      .then(({ results }) => {
        setMovieList(results);
      });
  }, []);

 
  return (
    <MoviesPopular.Provider value={{ MovieList }}>
      {props.children}
    </MoviesPopular.Provider>
  );
}
