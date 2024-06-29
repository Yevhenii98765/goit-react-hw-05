import { useHttp } from "../../hooks/useHttp";
import { fetchTrendMovies } from "../../services/api";
import MovieList from "../../components/MovieList/MovieList";

export const HomePage = () => {
  const { data: result } = useHttp(fetchTrendMovies);

  console.log(result);

  return (
    <div>
      <MovieList films={result} />
    </div>
  );
};
export default HomePage;
