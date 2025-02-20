import { createContext, useEffect, useState } from "react";
import AxiosInstance from "../Components/API/AxiosInstance";

export const CastContext = createContext([]);

export function CastProvider({ children, movieId, category }) {
  const [castList, setCastList] = useState([]);

  useEffect(() => {
    if (!movieId || !category) return; // ✅ Prevents calling API if category is missing

    AxiosInstance.get(`${category}/${movieId}/credits?language=en-US`)
      .then((resp) => setCastList(resp.data.cast))
      .catch((error) => console.error("Error fetching cast:", error));
  }, [movieId, category]); // ✅ Added category dependency


  return (
    <CastContext.Provider value={{ castList }}>
      {children}
    </CastContext.Provider>
  );
}
