import { useEffect, useState } from 'react';

export type CarouselProps = {
  images: string[];
  interval?: number; 
};

export const Carousel = ({ images, interval = 3000 }: CarouselProps) => {
  const [startIndex, setStartIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setStartIndex((prev) => (prev + 1) % images.length);
    }, interval);
    return () => clearInterval(timer);
  }, [images.length, interval]);

  const visibleImages = [
    images[startIndex],
    images[(startIndex + 1) % images.length],
    images[(startIndex + 2) % images.length],
  ];

  
  return (
    <div
      style={{
        width: '1440px',
        height: '600px',
        overflow: 'hidden',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: '0',
        backgroundColor: '#fff',
      }}
    >
      {visibleImages.map((src, index) => (
        <img
          key={index}
          src={src}
          alt={`slide-${index}`}
          style={{
            width: '480px',
            height: '600px',
            objectFit: 'cover',
            flexShrink: 0,
          }}
        />
      ))}
    </div>
  );
};