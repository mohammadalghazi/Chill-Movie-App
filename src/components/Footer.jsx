export default function Footer() {
  return (
    <footer
      className="
        bg-[#0F1115]
        border-t
        border-gray-800
        px-6
        md:px-12
        py-10
        mt-20
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          flex
          flex-col
          md:flex-row
          justify-between
          gap-10
        "
      >
        {/* LEFT */}
        <div>
          <h1
            className="
              text-white
              text-4xl
              font-bold
              mb-4
            "
          >
            🎬 CHILL
          </h1>

          <p className="text-gray-400 text-lg">
            @2023 Chill All Rights Reserved.
          </p>
        </div>

        {/* RIGHT */}
        <div
          className="
            flex
            flex-col
            md:flex-row
            gap-12
            md:gap-24
          "
        >
          {/* Genre */}
          <div>
            <h3
              className="
                text-white
                font-semibold
                mb-5
              "
            >
              Genre
            </h3>

            <div
              className="
                grid
                grid-cols-2
                gap-x-10
                gap-y-4
                text-gray-400
              "
            >
              <p>Aksi</p>
              <p>Drama</p>
              <p>Komedi</p>
              <p>Sains & Alam</p>

              <p>Anak-anak</p>
              <p>Fantasi Ilmiah & Fantasi</p>
              <p>Petualangan</p>
              <p>Thriller</p>

              <p>Anime</p>
              <p>Kejahatan</p>
              <p>Perang</p>

              <p>Britania</p>
              <p>KDrama</p>
              <p>Romantis</p>
            </div>
          </div>

          {/* Bantuan */}
          <div>
            <h3
              className="
                text-white
                font-semibold
                mb-5
              "
            >
              Bantuan
            </h3>

            <div
              className="
                flex
                flex-col
                gap-4
                text-gray-400
              "
            >
              <p>FAQ</p>
              <p>Kontak Kami</p>
              <p>Privasi</p>
              <p>Syarat & Ketentuan</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}