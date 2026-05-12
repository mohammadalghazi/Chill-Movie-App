export default function Button({
  text,
  onClick,
  variant = "primary",
}) {
  return (
    <button
      onClick={onClick}
      className={`
        w-full
        py-3
        rounded-full
        transition
        ${
          variant === "primary"
            ? "bg-gray-500 hover:bg-gray-400 text-white"
            : "border border-gray-600 text-white hover:bg-white/10"
        }
      `}
    >
      {text}
    </button>
  );
}