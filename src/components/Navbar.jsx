import { Link } from "react-router-dom";
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
      <Link to="/">
        <h1
          className="
            text-white
            text-2xl
            font-bold
            cursor-pointer
          "
        >
          🎬 CHILL
        </h1>
      </Link>

        <ul
          className="
            hidden
            md:flex
            gap-6
            text-white
            font-medium
          "
        >

          {/* Home */}
          <li>
            <Link
              to="/"
              className="
                hover:text-blue-400
                transition
              "
            >
              Home
            </Link>
          </li>

          {/* My List */}
          <li>
            <Link
              to="/my-list"
              className="
                hover:text-blue-400
                transition
              "
            >
              Daftar Saya
            </Link>
          </li>

        </ul>
      </div>

      {/* Right */}
      <ProfileDropdown />
    </nav>
  );
}