import Image from "next/image";
import type { ImageAsset } from "@/types/media-kit";
import {
  ASPECT_CLASS,
  isRemoteImage,
  placeholderUrl,
} from "@/lib/placeholder";

type MediaImageProps = ImageAsset & {
  className?: string;
  imgClassName?: string;
  priority?: boolean;
  sizes?: string;
  unconstrained?: boolean;
  quality?: number;
  unoptimized?: boolean;
};

export function MediaImage({
  aspect,
  alt,
  src,
  label,
  className = "",
  imgClassName = "",
  priority = false,
  sizes = "100vw",
  unconstrained = false,
  quality = 75,
  unoptimized,
}: MediaImageProps) {
  const url = src ?? placeholderUrl(aspect, label);
  const remote = isRemoteImage(url);
  const frameClass = unconstrained
    ? "h-full w-full"
    : ASPECT_CLASS[aspect];

  return (
    <div className={`relative overflow-hidden bg-coffee/20 ${frameClass} ${className}`}>
      <Image
        src={url}
        alt={alt}
        fill
        priority={priority}
        sizes={sizes}
        quality={quality}
        unoptimized={unoptimized ?? remote}
        className={`object-cover ${imgClassName}`}
      />
    </div>
  );
}
