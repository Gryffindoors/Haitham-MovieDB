import axios from "axios";

const AxiosInstance = axios.create({
    baseURL: "https://api.themoviedb.org/3/",
    headers: {
        Authorization: "Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI5ZDc3N2JhOWVhYjgwNmJhNjQ3Y2FlOTI1ZWRjODVjZiIsIm5iZiI6MTczOTgxMDE4Ny42NjcsInN1YiI6IjY3YjM2NThiOWJjZjQ1NzUyY2UwZGVkYSIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.bWBmAwiAJfWqGNtbCwaz41uWWBk8NlA7_lF2MJroGsI",
        Accept: "accept: application/json",
    }
});
export default AxiosInstance