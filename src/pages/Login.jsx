import bgImage from "../assets/cinema-bg.jpg";

import InputField from "../components/InputField";
import PasswordField from "../components/PasswordField";
import Button from "../components/Button";
import Divider from "../components/Divider";

import { useNavigate, Link } from "react-router-dom";
import { FcGoogle } from "react-icons/fc";

export default function Login() {
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
      {/* Card */}
      <div
        className="
          w-full
          max-w-md
          bg-black/60
          backdrop-blur-md
          rounded-2xl
          border
          border-gray-700
          p-8
        "
      >
        {/* Logo */}
        <div className="flex justify-center mb-8">
          <h1 className="text-white text-4xl font-bold">🎬 CHILL</h1>
        </div>

        {/* Header */}
        <div className="text-center mb-8">
          <h2 className="text-white text-3xl font-semibold">Masuk</h2>

          <p className="text-gray-300 mt-2">Selamat datang kembali!</p>
        </div>

        {/* Form */}
        <div className="flex flex-col gap-5">
          <InputField
            label="Username"
            type="text"
            placeholder="Masukkan username"
          />

          <PasswordField label="Kata Sandi" placeholder="Masukkan kata sandi" />
        </div>

        {/* Bottom Text */}
        <div
          className="
            mt-4
            flex
            justify-between
            text-sm
            text-gray-300
            flex-wrap
            gap-2
          "
        >
          <div>
            Belum punya akun?{" "}
            <Link to="/register" className="text-white font-semibold">
              Daftar
            </Link>
          </div>

          <span className="cursor-pointer hover:text-white">
            Lupa kata sandi?
          </span>
        </div>

        {/* Button */}
        <div className="mt-6 flex flex-col gap-4">
          <Button text="Masuk" onClick={() => navigate("/")} />

          <Divider />

          {/* Google Button */}
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
            Masuk dengan Google
          </button>
        </div>
      </div>
    </div>
  );
}
