import { Link } from "react-router-dom";
import s from "./MovieList.module.css";

export const MovieList = ({ films }) => {
  return (
    <ul className={s.ul_style}>
      {films?.map((movi) => (
        <li key={movi.id}>
          <Link to={`/movies/${movi.id}`}>{movi.title}</Link>
        </li>
      ))}
    </ul>
  );
};
export default MovieList;
