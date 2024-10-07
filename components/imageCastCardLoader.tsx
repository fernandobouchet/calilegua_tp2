"use client";
import Image from "next/image";
import { useState } from "react";
import ImageLoaderSkeleton from "./imageSkeleton";

interface Props {
  imageUrl: string;
  imageAlt: string;
}

const ImageCastCardLoader = ({ imageUrl, imageAlt }: Props) => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <>
      {!imageLoaded && <ImageLoaderSkeleton />}
      <Image
        src={imageUrl}
        alt={imageAlt}
        width={200}
        height={200}
        className={`object-cover transition-opacity duration-300 ${
          imageLoaded ? "opacity-100" : "opacity-0"
        }`}
        onLoad={() => setImageLoaded(true)}
      />
    </>
  );
};

export default ImageCastCardLoader;
