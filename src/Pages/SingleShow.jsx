import { useParams } from "react-router-dom";
import Navbar from "../Components/Layouts/Navbar";
import Footer from "../Components/Layouts/Footer";
import ShowSingle from "../Fragments/ShowSingle";
import { ShowDetailsProvider } from "../Context/ShowDetailsContext";
import { CastProvider } from "../Context/CastContext";

export default function SingleShow() {
  const { id, category } = useParams();

  return <>
      <Navbar />
      <ShowDetailsProvider>
        <CastProvider movieId={id} category={category}>
          <ShowSingle />
        </CastProvider>
      </ShowDetailsProvider>
      <Footer />
    </>
  ;
}
