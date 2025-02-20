import { createContext, useEffect, useState } from "react";
import AxiosInstance from "../Components/API/AxiosInstance";

export const MovieGenre = createContext([]);

export function MovieGenreProvider(props) {
    const [MovieGenreList, setMovieGenreList] = useState([]);

    useEffect(() => {
        AxiosInstance.get("genre/movie/list?language=en-US")
            .then((resp) => resp.data)
            .then(({ genres }) => setMovieGenreList(genres))
    }, []);

    return (
        <MovieGenre.Provider value={{ genres: MovieGenreList }}>
            {props.children}
        </MovieGenre.Provider>
    );
}
