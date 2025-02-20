import { createContext, useEffect, useState } from "react";
import AxiosInstance from "../Components/API/AxiosInstance";

export const CastContext = createContext([]);

export function CastProvider({ children, movieId }) {
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    if (!movieId) return; // Don't fetch if there's no ID

    AxiosInstance.get(`movie/${movieId}/credits?language=en-US`)
      .then((resp) => setCastList(resp.data.cast))
      .catch((error) => console.error("Error fetching cast:", error));
  }, [movieId]); // Runs when `movieId` changes

  return (
    <CastContext.Provider value={{ castList }}>
      {children}
    </CastContext.Provider>
  );
}
