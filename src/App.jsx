import { Route, Routes } from "react-router-dom";

import Layout from "./components/Layout/Layout";
// import HomePage from "./pages/HomePage/HomePage";
import Container from "./components/Container/Container";
//import MoviesPage from "./pages/MoviesPage/MoviesPage";
//import MovieDetailsPage from "./pages/MovieDetailsPage/MovieDetailsPage";
// import MovieCast from "./components/MovieCast/MovieCast";
// import MovieReviews from "./components/MovieReviews/MovieReviews";
//import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import { lazy } from "react";

const HomePage = lazy(() => import("./pages/HomePage/HomePage"));

const MoviesPage = lazy(() => import("./pages/MoviesPage/MoviesPage"));

const MovieDetailsPage = lazy(() =>
  import("./pages/MovieDetailsPage/MovieDetailsPage")
);

const MovieCast = lazy(() => import("./components/MovieCast/MovieCast"));

const MovieReviews = lazy(() =>
  import("./components/MovieReviews/MovieReviews")
);

const NotFoundPage = lazy(() => import("./pages/NotFoundPage/NotFoundPage"));
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
