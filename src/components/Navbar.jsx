import { Link } from "react-router-dom";
import { FaChevronDown } from "react-icons/fa";
import ProfileDropdown from "./ProfileDropdown";

import logo from "../assets/logo-chill.png";

export default function Navbar() {
  return (
    <nav
      className="
        fixed
        top-0
        left-0
        right-0
        z-50
        h-20
        bg-[#0F1115]
        flex
        items-center
        justify-between
        px-6
        md:px-12
      "
    >
      {/* Left Side */}
      <div className="flex items-center gap-10">
        {/* Logo */}
        <Link to="/">
          <img
            src={logo}
            alt="CHILL Logo"
            className="
              h-10
              w-auto
              object-contain
              cursor-pointer
            "
          />
        </Link>

        {/* Menu */}
        <ul
          className="
            flex
            items-center
            gap-8
            text-white
            text-sm
            md:text-base
            font-medium
          "
        >
          <li>
            <Link
              to="/"
              className="
                hover:text-gray-300
                transition
              "
            >
              Series
            </Link>
          </li>

          <li>
            <Link
              to="/"
              className="
                hover:text-gray-300
                transition
              "
            >
              Film
            </Link>
          </li>

          <li>
            <Link
              to="/my-list"
              className="
                hover:text-gray-300
                transition
              "
            >
              Daftar Saya
            </Link>
          </li>
        </ul>
      </div>

      {/* Right Side */}
      <ProfileDropdown />
    </nav>
  );
}
