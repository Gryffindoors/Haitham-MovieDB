import React, { useContext } from "react";
import { ShowDetailsContext } from "../Context/ShowDetailsContext"; // ✅ Get Movie/TV Data
import { CastContext } from "../Context/CastContext"; // ✅ Get Cast Data
import CastCard from "./CastCard";

export default function ShowSingle() {
  const { show, loading } = useContext(ShowDetailsContext); // ✅ Get movie/TV details
  const { castList } = useContext(CastContext); // ✅ Get cast data

  if (loading) return <p className="text-center py-10">Loading...</p>;
  if (!show) return <p className="text-center py-10">Show not found</p>;

  return (
    <div className="bg-gray-100/50 text-gray-900 min-h-screen relative">
      {/* Background Image */}
      <div className="absolute inset-0 bg-black/40 -z-10">
        <img
          src={`https://image.tmdb.org/t/p/original${show.backdrop_path}`}
          className="w-full h-[60vh] object-cover opacity-50"
          alt={show.title || show.name}
        />
      </div>

      {/* Show Information */}
      <section className="py-16 px-8">
        <h1 className="text-5xl font-bold">{show.title || show.name}</h1>
        <p className="text-lg text-gray-600 mt-2">
          {show.release_date?.split("-")[0] || show.first_air_date?.split("-")[0]}
        </p>
        <p className="text-lg mt-4">{show.overview}</p>

        {/* Ratings & Genres */}
        <div className="mt-4 flex flex-wrap items-center gap-3">
          <p className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm">
            ⭐ {show.vote_average.toFixed(1)} / 10
          </p>
          {show.genres.map((genre) => (
            <span key={genre.id} className="bg-gray-300 px-3 py-1 rounded-lg text-sm">
              {genre.name}
            </span>
          ))}
        </div>

        {/* Cast Section */}
        <h3 className="mt-8 text-3xl font-semibold">Top Cast</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mt-5">
          {castList.length > 0 ? (
            castList.map((actor) => <CastCard key={actor.id} object={actor} />)
          ) : (
            <p className="text-center text-gray-500">Loading cast...</p>
          )}
        </div>
      </section>
    </div>
  );
}
