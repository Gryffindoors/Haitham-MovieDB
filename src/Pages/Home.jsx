import React, { useContext } from "react";
import Navbar from "./../Components/Layouts/Navbar.jsx";
import Footer from "./../Components/Layouts/Footer.jsx";
import ShowCard from "../Fragments/ShowCard.jsx";
import { MoviesPopular } from "../Context/MoviesPopular.jsx";
import { MovieGenre } from "../Context/MovieGenre.jsx";

export const bg = "/images/HomeBG.png";

export default function Home() {
  const moviesContext = useContext(MoviesPopular);
  const genresContext = useContext(MovieGenre);

  const PopularMovies = (moviesContext?.MovieList || []).filter((MovieList)=> MovieList.original_language === "en").sort((a, b)=>b.vote_average - a.vote_average).slice(0, 10);
  const GenreMovies = genresContext?.genres || [];


  const getGenreNames = (genreIds) => {
    if (!Array.isArray(genreIds) || GenreMovies.length === 0) return ["Unknown"];
    return genreIds
      .map((id) => GenreMovies.find((genre) => genre.id === id)?.name)
      .filter(Boolean);
  };

  return (
    <>
      <div className="bg-gray-100/50 text-gray-900 min-h-screen relative">
        <img src={bg} className="fixed -z-10 opacity-0 md:opacity-20" alt="Background" />
        <Navbar />

        <section className="py-16 px-8">
          <h1 className="text-5xl font-bold text-start">Haitham Movie Database</h1>
          <p className="text-lg text-start mt-4">
            Ignite your imagination from the comfort of your home
          </p>
          <hr className="text-gray-700 w-75 me-auto mt-5" />
        </section>

        <section id="featured" className="bg-gray-200/50 h-fit py-10">
          <h2 className="text-4xl font-bold text-center">Popular Movies</h2>
          <p className="text-lg text-center mt-4">
            Find the most trending Movies in our database
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4 w-full px-5">
            {PopularMovies.length > 0 ? (
              PopularMovies.map((movie) => (
                <ShowCard
                  key={movie.id}
                  object={{
                    ...movie,
                    genres: getGenreNames(movie.genre_ids), 
                  }}
                  type="Movie" 
                />
              ))
            ) : (
              <p className="text-center text-gray-500 col-span-full">
                Loading movies...
              </p>
            )}
          </div>
        </section>

        <Footer />
      </div>
    </>
  );
}
