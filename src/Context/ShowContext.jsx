import { createContext, useEffect, useState } from "react";
import { useParams } from "react-router";
import AxiosInstance from "../Components/API/AxiosInstance";


export const ShowDetailsContext = createContext(null);

export function ShowDetailsProvider({ children }) {
  const { id, category } = useParams(); 
  const [show, setShow] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id || !category) return;

    AxiosInstance.get(`movie/${id}?language=en-US`) 
      .then((resp) => {
        setShow(resp.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching show details:", error);
        setLoading(false);
      });
  }, [id, category]);

  return (
    <ShowDetailsContext.Provider value={{ show, loading }}>
      {children}
    </ShowDetailsContext.Provider>
  );
}
