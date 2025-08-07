import React from 'react';
import Image from 'next/image';

interface OptimizedImageProps {
  src: string;
  alt: string;
  width?: number;
  height?: number;
  className?: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
}

export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  width,
  height,
  className = '',
  priority = false,
  fill = false,
  sizes
}) => {
  // Fallback image nếu src không tồn tại
  const fallbackSrc = 'https://via.placeholder.com/400x300/059669/ffffff?text=NextSora';
  
  return (
    <div className={`relative ${className}`}>
      <Image
        src={src || fallbackSrc}
        alt={alt}
        width={width}
        height={height}
        className="object-cover"
        priority={priority}
        fill={fill}
        sizes={sizes}
      />
    </div>
  );
}; 