import { NavLink, Outlet, useParams } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import { fetchMoviesById } from "../../services/api";

export const MovieDetailsPage = () => {
  const { movieId } = useParams();
  const { data } = useHttp(fetchMoviesById, movieId);
  const photo = "https://image.tmdb.org/t/p/w500/";

  if (!data) return <h2>Loading... </h2>;

  return (
    <div>
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
        <h1>{data.original_title}</h1>
      </div>
      <div>
        <NavLink to={`cast`}>Cast</NavLink>
        <NavLink to={`reviews`}>Reviews</NavLink>
      </div>
      <Outlet />
    </div>
  );
};
export default MovieDetailsPage;
