import bgImage from "../assets/cinema-bg.jpg";

import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import Button from "../components/Button";
import Divider from "../components/Divider";

import { FcGoogle } from "react-icons/fc";
import { useNavigate, Link } from "react-router-dom";

export default function Register() {
  const navigate = useNavigate();
  return (
    <div
      className="
        min-h-screen
        bg-cover
        bg-center
        flex
        items-center
        justify-center
        px-5
        py-10
      "
      style={{
        backgroundImage: `url(${bgImage})`,
      }}
    >
      <div
        className="
          w-full
          max-w-md
          bg-black/60
          backdrop-blur-md
          rounded-2xl
          p-8
          border
          border-gray-700
        "
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <h1 className="text-white text-4xl font-bold">
            🎬 CHILL
          </h1>
        </div>

        {/* Title */}
        <div className="text-center mb-8">
          <h2 className="text-white text-3xl font-semibold">
            Daftar
          </h2>

          <p className="text-gray-300 mt-2">
            Selamat datang!
          </p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-5">
          <InputField
            label="Username"
            type="text"
            placeholder="Masukkan username"
          />

          <PasswordField
            label="Kata Sandi"
            placeholder="Masukkan kata sandi"
          />

          <PasswordField
            label="Konfirmasi Kata Sandi"
            placeholder="Masukkan kata sandi"
          />
        </div>

        {/* Login */}
        <div className="mt-4 text-sm text-gray-300">
          Sudah punya akun?{" "}
          <Link
            to="/login"
            className="text-white font-semibold"
          >
            Masuk
          </Link>
        </div>

        {/* Buttons */}
        <div className="mt-6 flex flex-col gap-4">
                    <Button
                      text="Daftar"
                      onClick={() => navigate("/")}
                    />

          <Divider />

          <button
            className="
              w-full
              py-3
              rounded-full
              border
              border-gray-600
              text-white
              flex
              items-center
              justify-center
              gap-3
              hover:bg-white/10
              transition
            "
          >
            <FcGoogle size={22} />
            Daftar dengan Google
          </button>
        </div>
      </div>
    </div>
  );
}