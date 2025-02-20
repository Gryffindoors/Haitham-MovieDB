import React, { useContext } from 'react'
import { bg } from '../Pages/Home'
import CastCard from './CastCard';
import { CastContext, CastProvider } from '../Context/CastContext';
import { useParams } from 'react-router';


export default function ShowSingle() {

    const {castList} = useContext(CastContext);
    const {id} = useParams()

    return <>
        <CastProvider movieId={id}>
            
        <div className="bg-gray-100/50 text-gray-900 min-h-screen relative">
            <img src={bg} className="fixed -z-10 opacity-0 md:opacity-20" alt="Background" />
            <img src="/images/InterstellarWide.jpg" alt="" className='absolute w-full max-h-1/2 -z-5 opacity-0 md:opacity-20' />
            <section className="py-16 px-8">
                <h1 className="text-5xl font-bold text-start">Interstellar</h1>
                <p className="text-lg text-start mt-4">Ignite your imagination from the comfort of your home</p>
                <p className="text-start mt-4">Ignite your imagination from the comfort of your home</p>
                <h3>Top Cast</h3>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {castList.map((actor) => (<CastCard key={actor.id} object={actor}/>))}
                </div>

            </section>
        </div>
        </CastProvider>

    </>
}
