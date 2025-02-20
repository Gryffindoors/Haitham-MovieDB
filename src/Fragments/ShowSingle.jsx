import React, { useContext } from 'react'
import { bg } from '../Pages/Home'
import CastCard from './CastCard';
import { CastContext, CastProvider } from '../Context/CastContext';
import { ShowDetailsContext } from '../Context/ShowContext';


export default function ShowSingle() {
    const { show, loading } = useContext(ShowDetailsContext);
    const { castList } = useContext(CastContext);

    if (loading) return <p className="text-center py-10">Loading...</p>;
    if (!show) return <p className="text-center py-10 text-red-500">Show Not Found</p>;

    // console.log(castList);
    return (
        <div className="bg-gray-100/50 text-gray-900 min-h-screen relative">
            <img src={bg} className="fixed -z-10 opacity-0 md:opacity-20" alt="Background" />
            <img
                src={show.backdrop_path ? `https://image.tmdb.org/t/p/original${show.backdrop_path}` : "/placeholder.jpg"}
                alt={show.title || show.name}
                className='fixed w-full -z-5 opacity-50 object-cover'
            />
            <section className="py-16 px-8">
                <h1 className="text-5xl font-bold text-start mt-5">{show.title || show.name}</h1>
                <p className="text-lg text-start mt-4">{show.release_date?.split("-")[0] || show.first_air_date?.split("-")[0]}</p>
                <h3 className="text-4xl font-bold text-start">Synopsis</h3>
                <p className="text-lg text-start mt-4">{show.overview || "No description available."}</p>
                <h3 className="text-4xl font-bold text-center">Top Cast</h3>
                <div className="grid grid-cols-3 md:grid-cols-3 lg:grid-cols-4 gap-5">
                    {castList.length > 0 ? (
                        castList
                            .sort((a, b) => b.popularity - a.popularity)
                            .slice(0, 8)
                            .map((actor) => (
                                <div key={actor.id} className="scale-40 md:scale-70 lg:scale-90 origin-top-left">  {/* ✅ Scale Down */}
                                    <CastCard object={actor} />
                                </div>
                            ))
                    ) : (
                        <p className="text-center text-gray-500">No cast information available.</p>
                    )}
                </div>

            </section>
        </div>
    );

}

