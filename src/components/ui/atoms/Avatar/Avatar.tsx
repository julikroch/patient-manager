'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

interface AvatarProps {
  src?: string;
  alt: string;
  size?: number;
  className?: string;
}

export const Avatar = ({ src, alt, size = 64, className = '' }: AvatarProps) => {
  const [error, setError] = useState(false);

  useEffect(() => {
    setError(false);
  }, [src]);

  const initials = alt
    .split(' ')
    .map(word => word[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  if (!src || error) {
    return (
      <div
        className={`flex items-center justify-center bg-blue-500 text-white font-semibold rounded-full ${className}`}
        style={{ width: size, height: size }}
      >
        {initials}
      </div>
    );
  }

  return (
    <div
      className={`relative overflow-hidden rounded-full ${className}`}
      style={{ width: size, height: size }}
    >
      <Image
        src={src}
        alt={alt}
        fill
        className="object-cover"
        onError={() => setError(true)}
        unoptimized
        sizes={`${size}px`}
      />
    </div>
  );
};
