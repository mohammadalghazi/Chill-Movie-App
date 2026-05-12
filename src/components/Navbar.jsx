import { FaChevronDown } from "react-icons/fa";
import ProfileDropdown from "./ProfileDropdown";

export default function Navbar() {
  return (
    <nav
      className="
        fixed
        top-0
        left-0
        w-full
        z-50
        bg-black/70
        backdrop-blur-md
        px-6
        py-4
        flex
        justify-between
        items-center
      "
    >
      {/* Left */}
      <div className="flex items-center gap-8">
        <h1 className="text-white text-2xl font-bold">
          🎬 CHILL
        </h1>

        <ul className="hidden md:flex gap-6 text-white">
          <li>Series</li>
          <li>Film</li>
          <li>Daftar Saya</li>
        </ul>
      </div>

      {/* Right */}
      <ProfileDropdown />
    </nav>
  );
}