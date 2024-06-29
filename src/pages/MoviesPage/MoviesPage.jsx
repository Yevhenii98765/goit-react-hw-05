import { useForm } from "react-hook-form";
import { useHttp } from "../../hooks/useHttp";
import { fetchMoviesByQuery } from "../../services/api";
import { useSearchParams } from "react-router-dom";

import MovieList from "../../components/MovieList/MovieList";

export const MoviesPage = () => {
  const { register, handleSubmit } = useForm();
  const [searchParams, setSearchParams] = useSearchParams();
  const query = searchParams.get("query");
  const { data: results } = useHttp(
    query ? fetchMoviesByQuery : fetchMoviesByQuery,
    query
  );
  const onSubmit = (data) => {
    setSearchParams(data.query ? { query: data.query } : {});
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input {...register("query")} placeholder="Search" type="text" />
        <button>Search</button>
      </form>
      <MovieList films={results} />
    </div>
  );
};
export default MoviesPage;
