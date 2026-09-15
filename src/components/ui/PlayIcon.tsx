type PlayIconProps = {
  size?: "sm" | "md";
};

export function PlayIcon({ size = "md" }: PlayIconProps) {
  const box = size === "sm" ? "size-12" : "size-20 md:size-24";
  const glyph = size === "sm" ? "size-6" : "size-10 md:size-12";

  return (
    <span
      className={`flex items-center justify-center rounded-full bg-white/25 backdrop-blur-sm ${box}`}
    >
      <svg
        viewBox="0 0 24 24"
        className={`ml-0.5 fill-white ${glyph}`}
        aria-hidden="true"
      >
        <path d="M8 5.14v13.72L19.5 12 8 5.14Z" />
      </svg>
    </span>
  );
}
