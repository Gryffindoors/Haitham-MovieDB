import { faHeart } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, NavLink } from "react-router";

const imdb = "/images/IMDB_Logo_2016.svg.png"
const rt = "/images/Rotten_Tomatoes.svg"

export default function ShowCard({ object, type }) {
  if (!object) return null;

  const { backdrop_path, genre_ids, id, original_language, original_title, popularity, overview, poster_path, release_date, title, vote_average, vote_count, genres } = object;

  return (
    <NavLink rel="stylesheet" to={`/movie/${id}`}>
      <div className="mt-5 mx-auto w-[250px] h-[490px] hide-scrollbar overflow-hidden hover:overflow-y-auto relative border border-transparent transition-transform duration-700 hover:border-gray-400 hover:scale-[1.01] ">
        <div className="absolute top-5 w-full px-3">
          <div className="flex items-center justify-between">
            <p className="bg-[#F3F4F6]/50 text-black p-3 text-center text-xs font-sans font-bold w-fit rounded-full">
              {type}
            </p>
            <FontAwesomeIcon icon={faHeart} className="bg-[#F3F4F6]/50 text-white p-2 text-center w-fit rounded-full" />
          </div>
        </div>
        <div className="w-full">
          <img src={poster_path ? `https://image.tmdb.org/t/p/w500${poster_path}` : "/placeholder.jpg"} alt={title} className="w-full h-auto" />
          <div className="flex flex-col gap-2 p-2">
            <p className="text-gray-400 text-xs font-bold">
              <span className="uppercase">{original_language}</span>, <span>{release_date?.split("-")[0]}</span>
            </p>
            <h3 className="font-bold text-[18px]">{original_title}</h3>
            <div className="flex flex-row justify-between">
              <div className="flex flex-row gap-1">
                <img src={imdb} alt="" className="w-[35px] h-[17px]" />
                <p className="h-[17px] font-sans text-xs">{vote_average}</p>
              </div>
              <div className="flex flex-row gap-1">
                <img src={rt} alt="" className="w-[35px] h-[17px]" />
                <p className="h-[17px] font-sans text-xs">{vote_count}</p>
              </div>
            </div>
            <p className="text-gray-400 text-xs font-bold">{genres?.join(", ") || "N/A"}</p>
          </div>
        </div>
      </div>
    </NavLink>

  )
}
