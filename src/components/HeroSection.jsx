export default function HeroSection() {
  return (
    <section
      className="
        h-screen
        bg-cover
        bg-center
        flex
        items-end
        px-6
        pb-20
        relative
      "
      style={{
        backgroundImage:
          "url('/images/hero.jpg')",
      }}
    >
      {/* Overlay */}
      <div
        className="
          absolute
          inset-0
          bg-gradient-to-t
          from-black
          to-transparent
        "
      />

      {/* Content */}
      <div className="relative z-10 max-w-xl">
        <h1 className="text-white text-5xl font-bold mb-4">
          Duty After School
        </h1>

        <p className="text-gray-300 mb-6">
          Sebuah benda tak dikenal mengambil alih dunia. Dalam keputusasaan, Departemen Pertahanan mulai merekrut lebih banyak tentara, termasuk siswa sekolah menengah. Mereka pun segera menjadi pejuang garis depan dalam perang.
        </p>

        <div className="flex gap-4 flex-wrap">
          <button
            className="
              bg-blue-600
              text-white
              px-6
              py-3
              rounded-full
            "
          >
            Mulai
          </button>

          <button
            className="
              bg-gray-700
              text-white
              px-6
              py-3
              rounded-full
            "
          >
            Selengkapnya
          </button>
        </div>
      </div>
    </section>
  );
}