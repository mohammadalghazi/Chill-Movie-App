import { FaEyeSlash } from "react-icons/fa";

export default function PasswordField({ label, placeholder }) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white text-sm">{label}</label>

      <div className="relative">
        <input
          type="password"
          placeholder={placeholder}
          className="
            w-full
            px-4
            py-3
            rounded-full
            bg-transparent
            border
            border-gray-600
            text-white
            placeholder-gray-400
            outline-none
            focus:border-gray-400
          "
        />

        <FaEyeSlash
          className="
            absolute
            right-4
            top-1/2
            -translate-y-1/2
            text-gray-400
          "
        />
      </div>
    </div>
  );
}
