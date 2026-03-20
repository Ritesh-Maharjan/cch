'use client';
import { useEffect, useRef } from 'react';

export default function VideoPlayer({
  src,
  className,
}: {
  src: string;
  className?: string;
}) {
  const ref = useRef<HTMLVideoElement | null>(null);

  useEffect(() => {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.loop = true;
    (v).playsInline = true;

    const p = v.play();
    if (p && typeof p.catch === 'function') {
      p.catch(() => {
        // autoplay blocked — silent fail
      });
    }
  }, []);

  return (
    <div className={`relative overflow-hidden h-[600px] ${className ?? ''}`}>
      <video
        ref={ref}
        muted
        loop
        playsInline
        autoPlay
        className="absolute inset-0 w-full h-full object-cover object-bottom"
      >
        <source src={src} type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}