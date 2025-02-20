import React from 'react'

const clapper = 'images/clapperboard.svg'


export default function Footer() {
  return (
    <footer className="bg-gray-900/75 shadow-t-lg border-t border-gray-700 text-white pt-10 pb-5">
      <div className="max-w-2xl mx-auto text-center">
        <h3 className="text-3xl mb-3 flex flex-row items-center justify-center">
          Lights, Camera, Action!
          <img src={clapper} alt="" className="h-7 inline align-middle ml-2" />
        </h3>

        <p>Discover the magic of movies—anytime, anywhere.</p>

        <div className="mt-10 flex flex-col md:flex-row md:justify-between items-center text-sm text-gray-400">
          <p className="order-2 md:order-1 mt-8 md:mt-0">&copy; {new Date().getFullYear()} Haitham Store. All rights reserved.</p>
          <div className="order-1 md:order-2">
            <a href="#" className="px-2 hover:underline">About Us</a>
            <a href="#" className="px-2 border-l hover:underline">Contact Us</a>
            <a href="#" className="px-2 border-l hover:underline">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
}

