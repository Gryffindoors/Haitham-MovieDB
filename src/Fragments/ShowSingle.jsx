import React, { useContext } from 'react'
import { bg } from '../Pages/Home'
import CastCard from './CastCard';
import { CastContext, CastProvider } from '../Context/CastContext';
import { useParams } from 'react-router';
import { ShowDetailsContext } from '../Context/ShowContext';


export default function ShowSingle() {

    const { show, loading } = useContext(ShowDetailsContext);
    const { castList } = useContext(CastContext);


    return <>
            <div className="bg-gray-100/50 text-gray-900 min-h-screen relative">
                <img src={bg} className="fixed -z-10 opacity-0 md:opacity-20" alt="Background" />
                <img src="/images/InterstellarWide.jpg" alt="" className='absolute w-full max-h-1/2 -z-5 opacity-0 md:opacity-20' />
                <section className="py-16 px-8">
                    <h1>{show.title || show.name}</h1>
                    <p>{show.release_date?.split("-")[0] || show.first_air_date?.split("-")[0]}</p>
                    <p className="text-lg text-start mt-4">Ignite your imagination from the comfort of your home</p>
                    <p className="text-start mt-4">Ignite your imagination from the comfort of your home</p>
                    <h3>Top Cast</h3>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {castList.map((actor) => (<CastCard key={actor.id} object={actor} />))}
                    </div>

                </section>
            </div>
    </>
}
