import type { ImageAsset } from "@/types/media-kit";
import { ASPECT_CLASS } from "@/lib/placeholder";

type MediaVideoProps = ImageAsset & {
  className?: string;
};

export function MediaVideo({
  alt,
  aspect,
  src,
  className = "",
}: MediaVideoProps) {
  return (
    <div
      className={`relative overflow-hidden bg-coffee/20 ${ASPECT_CLASS[aspect]} ${className}`}
    >
      <video
        src={src}
        aria-label={alt}
        className="absolute inset-0 h-full w-full object-cover"
        autoPlay
        muted
        loop
        playsInline
        preload="metadata"
      />
    </div>
  );
}
