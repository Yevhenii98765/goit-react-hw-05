import {
  Link,
  NavLink,
  Outlet,
  useLocation,
  useParams,
} from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import { fetchMoviesById } from "../../services/api";
import { useRef } from "react";
import s from "./MovieDetailsPage.module.css";
export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data } = useHttp(fetchMoviesById, movieId);
  const photo = "https://image.tmdb.org/t/p/w500/";

  const location = useLocation();

  const goBackRef = useRef(location.state || "/movies");
  console.log(data);
  if (!data) return <h2>Loading... </h2>;

  return (
    <div>
      <div>
        <Link to={goBackRef.current}>Go back</Link>
      </div>

      <div className={s.poster}>
        <div>
          <img
            src={
              data.poster_path
                ? `${photo}${data.poster_path}`
                : "https://okdiario.com/img/2020/02/26/series-netflix-top-10-1-1.jpg"
            }
            alt="Movie poster"
            className="w-full h-auto"
            style={{ aspectRatio: "2/3" }}
          />
        </div>
        <div>
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <h1>{data.original_title}</h1>
            <h2>: ({data.release_date})</h2>
          </div>
          <p>{data.overview}</p>
          <div
            style={{
              display: "flex",
              gap: "10px",
              alignItems: "center",
            }}
          >
            <h3>Reating: </h3>
            <h3>{data.popularity}</h3>
          </div>
        </div>
      </div>
      <div className={s.info}>
        <NavLink to={`cast`}>Cast</NavLink>
        <NavLink to={`reviews`}>Reviews</NavLink>
      </div>
      <Outlet />
    </div>
  );
};
export default MovieDetailsPage;
