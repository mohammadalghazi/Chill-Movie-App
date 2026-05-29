export default function MovieCard({ image, title, rating }) {
  return (
    <div
      className="
        min-w-[180px]
        relative
        rounded-xl
        overflow-hidden
        hover:scale-105
        transition
        cursor-pointer
      "
    >
      <img
        src={image}
        alt={title}
        className="
          w-full
          h-[260px]
          object-cover
        "
      />

      <div
        className="
          absolute
          bottom-0
          left-0
          right-0
          bg-gradient-to-t
          from-black
          to-transparent
          p-3
        "
      >
        <h3 className="text-white font-semibold">{title}</h3>

        {rating && <p className="text-gray-300 text-sm">⭐ {rating}</p>}
      </div>
    </div>
  );
}
