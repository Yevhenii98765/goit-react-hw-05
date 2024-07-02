import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout/Layout";
import Container from "./components/Container/Container";
import MovieCast from "./components/MovieCast/MovieCast";
import MovieReviews from "./components/MovieReviews/MovieReviews";
import { easyLazy } from "./services/easyLazy";

const HomePage = easyLazy("HomePage");
const MoviesPage = easyLazy("MoviesPage");
const MovieDetailsPage = easyLazy("MovieDetailsPage");
const NotFoundPage = easyLazy("NotFoundPage");

const App = () => {
  return (
    <>
      <Container>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="*" element={<NotFoundPage />} />
            <Route path="movies" element={<MoviesPage />} />
            <Route path="movies/:movieId" element={<MovieDetailsPage />}>
              <Route path="cast" element={<MovieCast />} />
              <Route path="reviews" element={<MovieReviews />} />
            </Route>
          </Route>
        </Routes>
      </Container>
    </>
  );
};

export default App;
