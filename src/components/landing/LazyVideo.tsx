import { useState } from "react";
import { Play } from "lucide-react";

interface LazyVideoProps {
  src: string;
  poster: string;
  className?: string;
}

export function LazyVideo({
  src,
  poster,
  className = "",
}: LazyVideoProps) {
  const [isPlaying, setIsPlaying] = useState(false);

  return (
    <div className={`relative h-full w-full ${className}`}>
      {!isPlaying ? (
        <button
          type="button"
          onClick={() => setIsPlaying(true)}
          className="group relative block h-full w-full cursor-pointer"
          aria-label="Reproduzir vídeo"
        >
          <img
            src={poster}
            alt=""
            loading="lazy"
            decoding="async"
            className="h-full w-full object-cover"
          />

          <div className="absolute inset-0 bg-black/10 transition-colors duration-300 group-hover:bg-black/20" />

          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="
                flex h-16 w-16 items-center justify-center
                rounded-full bg-white/95
                shadow-lg
                transition-transform duration-300
                group-hover:scale-110
              "
            >
              <Play
                size={25}
                fill="currentColor"
                className="ml-1 text-cocoa"
              />
            </div>
          </div>
        </button>
      ) : (
        <video
          src={src}
          controls
          autoPlay
          playsInline
          preload="auto"
          className="h-full w-full object-cover"
        >
          Seu navegador não suporta a exibição deste vídeo.
        </video>
      )}
    </div>
  );
}