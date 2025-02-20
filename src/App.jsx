import { lazy, Suspense } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router";
import { MoviesPopularProvider } from "./Context/MoviesPopular";
import { MovieGenreProvider } from "./Context/MovieGenre";

// Lazy-loaded pages
const Home = lazy(() => import("./Pages/Home"));
const Cast = lazy(() => import("./Pages/Cast"));
const Movies = lazy(() => import("./Pages/Movies"));
const TV = lazy(() => import("./Pages/TV"));
const SingleShow = lazy(() => import("./Pages/SingleShow"));
const Error = lazy(() => import("./Pages/Error")); // New Error Page

export default function App() {
  return (
  
      <MovieGenreProvider>
        <MoviesPopularProvider>
          <Suspense fallback={<div className="text-center py-10">Loading...</div>}>
            <Routes>
              <Route index element={<Home />} />
              <Route path="/cast" element={<Cast />} />
              <Route path="/movies" element={<Movies />} />
              <Route path="/TV" element={<TV />} />
              <Route path="/:category/:id" element={<SingleShow />} />
              <Route path="*" element={<Error />} /> {/* Handles unknown URLs */}
            </Routes>
          </Suspense>
        </MoviesPopularProvider>
      </MovieGenreProvider>

  );
}
