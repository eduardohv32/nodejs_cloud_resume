import React from 'react';

interface ProfilePhotoProps {
  imageUrl: string;
  alt: string;
}

export default function ProfilePhoto({ imageUrl, alt }: ProfilePhotoProps) {
  return (
    <div className="relative mb-8">
      <div className="w-40 h-40 md:w-48 md:h-48 rounded-full overflow-hidden border-4 border-blue-400 shadow-xl">
        <img
          src={imageUrl}
          alt={alt}
          className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-300"
        />
      </div>
      <div className="absolute -inset-1 bg-blue-500/20 blur-xl rounded-full -z-10"></div>
    </div>
  );
}