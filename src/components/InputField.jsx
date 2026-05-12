export default function InputField({
  label,
  type,
  placeholder,
}) {
  return (
    <div className="flex flex-col gap-2">
      <label className="text-white text-sm">
        {label}
      </label>

      <input
        type={type}
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
    </div>
  );
}