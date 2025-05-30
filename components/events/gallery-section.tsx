'use client';
import dynamic from "next/dynamic";
import Image from "next/image";

// Dynamically import Marquee with SSR disabled
const Marquee = dynamic(() => import("../magicui/marquee").then(mod => mod.Marquee), { ssr: false });

// ...existing code...

// Divide images into 3 separate arrays, each with 7 unique images
const slider1 = [
  { imageUrl: "/C1.png", name: "Image 1" },
  { imageUrl: "/C2.png", name: "Image 2" },
  { imageUrl: "/C3.png", name: "Image 3" },
  { imageUrl: "/C4.png", name: "Image 4" },
  { imageUrl: "/C5.png", name: "Image 5" },
  { imageUrl: "/C6.png", name: "Image 6" },
  { imageUrl: "/C7.png", name: "Image 7" },
];

const slider2 = [
  { imageUrl: "/C8.png", name: "Image 8" },
  { imageUrl: "/C9.png", name: "Image 9" },
  { imageUrl: "/C10.png", name: "Image 10" },
  { imageUrl: "/C11.png", name: "Image 11" },
  { imageUrl: "/C12.png", name: "Image 12" },
  { imageUrl: "/C13.png", name: "Image 13" },
  { imageUrl: "/C14.png", name: "Image 14" },
];

const slider3 = [
  { imageUrl: "/C15.png", name: "Image 15" },
  { imageUrl: "/C16.png", name: "Image 16" },
  { imageUrl: "/C17.png", name: "Image 17" },
  { imageUrl: "/C18.png", name: "Image 18" },
  { imageUrl: "/C19.png", name: "Image 19" },
  { imageUrl: "/C20.png", name: "Image 1" },   // Reuse or replace with new images if available
  { imageUrl: "/C21.png", name: "Image 2" },   // Reuse or replace with new images if available
];

export const GallerySection = () => {
  return (
    <div className="relative h-[60vh] sm:h-screen flex flex-col justify-center items-center">
      <div className="hidden z-10 md:flex flex-col justify-center items-center text-6xl font-semibold bg-white md:h-60 md:w-100 h-30 w-60 rounded-[1px] ">
        Gallery
      </div>
      <div className="absolute h-full w-full flex flex-col justify-center items-center ">
        <Marquee className="[--duration:80s]">
          {slider1.map((payload, index) => (
            <div key={index}>
              <Image
                className="object-cover md:h-60 md:w-100 h-30 w-60 rounded-[8px] md:rounded-[2px]"
                src={payload.imageUrl}
                alt={payload.name}
                width={400}
                height={300}
              />
            </div>
          ))}
        </Marquee>
        <Marquee reverse className="[--duration:80s]">
          {slider2.map((payload, index) => (
            <div key={index}>
              <Image
                className="object-cover md:h-60 md:w-100 h-30 w-60 rounded-[8px] md:rounded-[2px]"
                src={payload.imageUrl}
                alt={payload.name}
                width={400}
                height={300}
              />
            </div>
          ))}
        </Marquee>
        <Marquee className="[--duration:80s]">
          {slider3.map((payload, index) => (
            <div key={index}>
              <Image
                className="object-cover md:h-60 md:w-100 h-30 w-60 rounded-[8px] md:rounded-[2px]"
                src={payload.imageUrl}
                alt={payload.name}
                width={400}
                height={300}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};