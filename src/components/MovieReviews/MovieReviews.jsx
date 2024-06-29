import { useParams } from "react-router-dom";
import { useHttp } from "../../hooks/useHttp";
import { fetchReviewsById } from "../../services/api";

export const MovieReviews = () => {
  const { movieId } = useParams();
  const { data } = useHttp(fetchReviewsById, movieId);

  console.log(data);

  if (!data) return <h2>Loading...</h2>;

  return (
    <div>
      <h3>Reviews</h3>
      <ul>
        {data.results.map((review) => (
          <li key={review.id}>
            <h4>{review.author}</h4>
            <p>{review.content}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default MovieReviews;
