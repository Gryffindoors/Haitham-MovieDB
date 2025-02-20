import { useParams } from "react-router";
import Navbar from "../Components/Layouts/Navbar";
import Footer from "../Components/Layouts/Footer";
import ShowSingle from "../Fragments/ShowSingle";
import { ShowDetailsProvider } from "../Context/ShowContext";
import { CastProvider } from "../Context/CastContext";

export default function SingleShow() {
  const { id, category } = useParams(); // ✅ Get id & category from URL

  return (
    <>
      <Navbar />
      <ShowDetailsProvider id={id} category={category}>  {/* ✅ Pass as Props */}
        <CastProvider movieId={id} category={category}>  {/* ✅ Pass as Props */}
          <ShowSingle />
        </CastProvider>
      </ShowDetailsProvider>
      <Footer />
    </>
  );
}
