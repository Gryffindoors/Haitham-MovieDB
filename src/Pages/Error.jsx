import { Link } from "react-router"; 
import Navbar from './../Components/Layouts/Navbar.jsx'
import Footer from './../Components/Layouts/Footer.jsx'
import { bg } from "./Home.jsx";

export default function Error() {
    return (
        <div className="flex flex-col min-h-screen bg-gray-800/80 text-gray-100 relative">
            <img src={bg} alt="" className="absolute -z-10 opacity-50 object-contain"/>
            <Navbar />

            {/* Error message (auto height adjustment) */}
            <div className="flex-grow flex flex-col items-center justify-center text-center py-28">
                <h1 className="text-4xl font-bold">404 - Page Not Found</h1>
                <p className="text-lg mt-4">Oops! The page you're looking for doesn't exist.</p>
                <Link
                    to="/"
                    className="mt-6 px-6 py-2 bg-gray-900 text-white rounded-md hover:bg-gray-700 transition duration-200 shadow-md"
                >
                    Go Back Home
                </Link>
            </div>

            <Footer />
        </div>
    );
}
