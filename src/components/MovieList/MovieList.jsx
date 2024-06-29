import { Link, useLocation } from "react-router-dom";
import s from "./MovieList.module.css";

export const MovieList = ({ films }) => {
  const location = useLocation();

  return (
    <ul className={s.ul_style}>
      {films?.map((movi) => (
        <li key={movi.id}>
          <Link to={`/movies/${movi.id}`} state={location}>
            {" "}
            {movi.title}
          </Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
