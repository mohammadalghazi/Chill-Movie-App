import MovieCard from "./MovieCard";

export default function MovieSection({
  title,
  movies,
}) {
  return (
    <section className="px-6 mt-10">
      <h2 className="text-white text-3xl font-bold mb-5">
        {title}
      </h2>

      <div
        className="
          flex
          gap-5
          overflow-x-auto
          scrollbar-hide
        "
      >
        {movies.map((movie, index) => (
          <MovieCard
            key={index}
            image={movie.image}
            title={movie.title}
            rating={movie.rating}
          />
        ))}
      </div>
    </section>
  );
}