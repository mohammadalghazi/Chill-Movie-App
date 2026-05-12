import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

import {
  FaUser,
  FaStar,
  FaSignOutAlt,
  FaChevronDown,
} from "react-icons/fa";

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  // Reference dropdown
  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  // Close ketika klik luar
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    }

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  return (
    <div
      ref={dropdownRef}
      className="relative"
    >
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex
          items-center
          gap-2
          text-white
        "
      >
        {/* Avatar */}
        <img
          src="https://i.pravatar.cc/40"
          alt="profile"
          className="
            w-10
            h-10
            rounded-full
            border
            border-gray-600
          "
        />

        {/* Arrow */}
        <FaChevronDown
          className={`
            transition-transform
            duration-300
            ${isOpen ? "rotate-180" : ""}
          `}
        />
      </button>

      {/* Dropdown */}
      {isOpen && (
        <div
          className="
            absolute
            right-0
            mt-3
            w-56
            bg-[#181A1F]
            border
            border-gray-800
            rounded-2xl
            shadow-[0_10px_40px_rgba(0,0,0,0.5)]
            backdrop-blur-md
            overflow-hidden
            z-50
            animate-in
            fade-in
            zoom-in-95
            duration-200
          "
        >
          {/* Profil */}
          <button
            className="
              w-full
              flex
              items-center
              gap-3
              px-5
              py-4
              text-blue-500
              hover:bg-white/5
              transition
            "
          >
            <FaUser />
            Profil Saya
          </button>

          {/* Premium */}
          <button
            className="
              w-full
              flex
              items-center
              gap-3
              px-5
              py-4
              text-white
              hover:bg-white/5
              transition
            "
          >
            <FaStar />
            Ubah Premium
          </button>

          {/* Logout */}
          <button
            onClick={() => navigate("/login")}
            className="
              w-full
              flex
              items-center
              gap-3
              px-5
              py-4
              text-white
              hover:bg-red-500/10
              hover:text-red-400
              transition
            "
          >
            <FaSignOutAlt />
            Keluar
          </button>
        </div>
      )}
    </div>
  );
}