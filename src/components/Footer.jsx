import logo from "../assets/logo-chill.png";

export default function Footer() {
  return (
    <footer
      className="
        bg-[#181A20]
        border-t
        border-gray-800
        mt-20
      "
    >
      <div
        className="
          max-w-7xl
          mx-auto
          px-6
          md:px-12
          py-10
        "
      >
        <div
          className="
            flex
            flex-col
            lg:flex-row
            justify-between
            gap-10
          "
        >
          {/* Left */}
          <div>
            <img src={logo} alt="CHILL" className="h-10 w-auto mb-4" />

            <p
              className="
                text-gray-400
                text-sm
              "
            >
              ©2023 Chill All Rights Reserved.
            </p>
          </div>

          {/* Right */}
          <div
            className="
              flex
              flex-col
              md:flex-row
              gap-10
              md:gap-20
            "
          >
            {/* Genre */}
            <div>
              <h3
                className="
                  text-white
                  font-semibold
                  mb-4
                "
              >
                Genre
              </h3>

              <div
                className="
                  grid
                  grid-cols-2
                  gap-x-8
                  gap-y-2
                  text-gray-400
                  text-sm
                "
              >
                <p>Aksi</p>
                <p>Drama</p>

                <p>Anime</p>
                <p>Romantis</p>

                <p>Komedi</p>
                <p>Thriller</p>

                <p>Petualangan</p>
                <p>Kejahatan</p>

                <p>Anak-anak</p>
                <p>KDrama</p>

                <p>Fantasi</p>
                <p>Perang</p>
              </div>
            </div>

            {/* Bantuan */}
            <div>
              <h3
                className="
                  text-white
                  font-semibold
                  mb-4
                "
              >
                Bantuan
              </h3>

              <div
                className="
                  flex
                  flex-col
                  gap-2
                  text-gray-400
                  text-sm
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
      </div>
    </footer>
  );
}
