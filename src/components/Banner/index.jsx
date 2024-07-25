import React from "react";
import Image from "next/image";
import Link from "next/link";
const images = [
  {
    id: 1,
    src: "/images/Hero1.png",
    alt: "Image 1",
  },
  {
    id: 2,
    src: "/images/Hero1.png",
    alt: "Image 2",
  },
  {
    id: 3,
    src: "/images/Hero1.png",
    alt: "Image 2",
  },
  {
    id: 4,
    src: "/images/Hero1.png",
    alt: "Image 2",
  },
];

const Banner = () => {
  return (
    <div className="carousel w-full">
      {images.map((image, index) => (
        <div
          key={image.id}
          id={`slide${image.id}`}
          className="carousel-item relative w-full"
        >
          <Image
            src={image.src}
            alt={image.alt}
            className="w-full object-cover"
            height={650}
            width={1366}
          />
          <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
            <Link
              href={`#slide${index === 0 ? images.length : index}`}
              className="btn btn-circle"
            >
              ❮
            </Link>
            <Link
              href={`#slide${index + 2 > images.length ? 1 : index + 2}`}
              className="btn btn-circle"
            >
              ❯
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Banner;
