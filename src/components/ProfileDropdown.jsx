import { useState, useRef, useEffect } from "react";
import { useNavigate } from "react-router-dom";

import { FaUser, FaStar, FaSignOutAlt, FaChevronDown } from "react-icons/fa";

import avatar from "../assets/avatar.jpg";

export default function ProfileDropdown() {
  const [isOpen, setIsOpen] = useState(false);

  const dropdownRef = useRef(null);

  const navigate = useNavigate();

  // Close dropdown ketika klik di luar
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef} className="relative">
      {/* Trigger */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="
          flex
          items-center
          gap-3
          text-white
        "
      >
        {/* Avatar */}
        <img
          src={avatar}
          alt="Profile"
          className="
            w-10
            h-10
            rounded-full
            object-cover
          "
        />

        {/* Chevron */}
        <FaChevronDown
          size={12}
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
            top-14
            right-0
            w-48
            bg-[#181A20]
            rounded-lg
            border
            border-gray-700
            shadow-xl
            overflow-hidden
            z-50
          "
        >
          {/* Profil Saya */}
          <button
            className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              text-sm
              text-blue-500
              hover:bg-white/5
              transition
            "
          >
            <FaUser size={14} />
            Profil Saya
          </button>

          {/* Premium */}
          <button
            className="
              w-full
              flex
              items-center
              gap-3
              px-4
              py-3
              text-sm
              text-white
              hover:bg-white/5
              transition
            "
          >
            <FaStar size={14} />
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
              px-4
              py-3
              text-sm
              text-white
              hover:bg-red-500/10
              hover:text-red-400
              transition
            "
          >
            <FaSignOutAlt size={14} />
            Keluar
          </button>
        </div>
      )}
    </div>
  );
}
