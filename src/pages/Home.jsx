import Navbar from "../components/Navbar";
import HeroSection from "../components/HeroSection";
import MovieSection from "../components/MovieSection";
import Footer from "../components/Footer";

import {
  continueWatching,
  topRating,
  trendingMovies,
  newRelease
} from "../data/movies";

export default function Home() {
  return (
    <div className="bg-[#0F1115] min-h-screen">
      <Navbar />

      <HeroSection />

      <MovieSection
        title="Melanjutkan Tonton Film"
        movies={continueWatching}
      />

      <MovieSection
        title="Top Rating Film dan Series Hari ini"
        movies={topRating}
      />

      <MovieSection
        title="Film Trending"
        movies={trendingMovies}
      />

      <MovieSection
        title="Rilis Baru"
        movies={newRelease}
      />

      <Footer />
    </div>
  );
}