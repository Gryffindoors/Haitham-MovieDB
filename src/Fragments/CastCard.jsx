import { faHeart } from '@fortawesome/free-regular-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'

export default function CastCard({object}) {
    const {profile_path, name, character} = object
  return (
    <div className="mt-5 mx-auto w-[250px] h-[420px] hide-scrollbar overflow-hidden hover:overflow-y-auto relative border border-transparent transition-transform duration-700 hover:border-gray-400 hover:scale-[1.01] ">
  <div className="absolute top-5 w-full px-3">
    <div className="flex items-center justify-between">
      <p className="bg-[#F3F4F6]/50 text-black p-3 text-center text-xs font-sans font-bold w-fit rounded-full">
        Cast
      </p>
      <FontAwesomeIcon icon={faHeart} className="bg-[#F3F4F6]/50 text-white p-2 text-center w-fit rounded-full" />
    </div>
  </div>
  <div className="w-full">
    <img 
      src={profile_path ? `https://image.tmdb.org/t/p/w500${profile_path}` : "/placeholder.jpg"} 
      alt={name} 
      className="w-full h-auto rounded-lg" 
    />
    <div className="flex flex-col gap-2 p-2">
      <h3 className="font-bold text-[18px]">{name}</h3>
      <p className="text-gray-400 text-xs font-bold">as {character || "Unknown"}</p>
    </div>
  </div>
</div>

  )
}
