import { useParams } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import { fetchCreditsById } from "../../services/api";

export const MovieCast = () => {
  const { movieId } = useParams();
  const { data } = useHttp(fetchCreditsById, movieId);
  console.log(data);
  if (!data) return <h2>Loading...</h2>;

  return (
    <div>
      <h3>Cast</h3>
      <ul>
        {data.cast.map((cast) => (
          <li key={cast.id}>
            <h1>{cast.name}</h1>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieCast;
