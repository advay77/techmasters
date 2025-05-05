'use client';
import { Marquee } from "../magicui/marquee";
import Image from "next/image";

const items = [
  {
    imageUrl: "/C1.png",
    name: "Image 1",
  },
  {
    imageUrl: "/C2.png",
    name: "Image 2",
  },
  {
    imageUrl: "/C3.png",
    name: "Image 3",
   
  },
  {
    imageUrl: "/C4.png",
    name: "Image 4",
  },
  {
    imageUrl: "/C5.png",
    name: "image 5",
  },
  {
    imageUrl: "/C6.png",
    name: "Image 6",
  },
  {
    imageUrl: "/C7.png",
    name: "Image 7",
  },

  {
    imageUrl: "/C1.png",
    name: "Image 1",
  },
  {
    imageUrl: "/C2.png",
    name: "Image 2",
   
  },
  {
    imageUrl: "/C3.png",
    name: "Image 3",
   
  },
  {
    imageUrl: "/C4.png",
    name: "Image 4",
  },
  {
    imageUrl: "/C5.png",
    name: "image 5",
  },
  {
    imageUrl: "/C6.png",
    name: "Image 6",
  },
  {
    imageUrl: "/C7.png",
    name: "Image 7",
  },

  {
    imageUrl: "/C8.png",
    name: "Image 1",
  },
  {
    imageUrl: "/C9.png",
    name: "Image 2",
   
  },
  {
    imageUrl: "/C10.png",
    name: "Image 3",
   
  },
  {
    imageUrl: "/C11.png",
    name: "Image 4",
  },
  {
    imageUrl: "/C12.png",
    name: "image 5",
  },
  {
    imageUrl: "/C13.png",
    name: "Image 6",
  },
  {
    imageUrl: "/C14.png",
    name: "Image 7",
  },

  {
    imageUrl: "/C15.png",
    name: "Image 1",
  },
  {
    imageUrl: "/C16.png",
    name: "Image 2",
   
  },
  {
    imageUrl: "/C17.png",
    name: "Image 3",
   
  },
  {
    imageUrl: "/C18.png",
    name: "Image 4",
  },
  {
    imageUrl: "/C19.png",
    name: "image 5",
  },
  {
    imageUrl: "/C20.png",
    name: "Image 6",
  },
  {
    imageUrl: "/C21.png",
    name: "Image 7",
  },
];

export const GallerySection = () => {
  return (        
    <div className="relative h-[60vh] sm:h-screen flex flex-col justify-center items-center">
      <div className="hidden z-10 md:flex flex-col justify-center items-center text-6xl font-semibold bg-white md:h-60 md:w-100 h-30 w-60 rounded-[1px] ">
        Gallery
      </div>
      <div className="absolute h-full w-full flex flex-col justify-center items-center ">
        <Marquee className="[--duration:50s]">
          {items.map((payload) => {
            return (
              <div key={payload.name}>
                <Image
                  className={`object-cover md:h-60 md:w-100 h-30 w-60 rounded-[8px] md:rounded-[2px] `}
                  src={payload.imageUrl}
                  alt={payload.name}
                  width={400} // Adjust width as needed
                  height={300} // Adjust height as needed
                />
              </div>
            );
          })}
        </Marquee>
        <Marquee reverse className="[--duration:50s]">
          {items.map((payload) => {
            return (
              <div key={payload.name}>
                <Image
                  className={`object-cover md:h-60 md:w-100 h-30 w-60 rounded-[8px] md:rounded-[2px] `}
                  src={payload.imageUrl}
                  alt={payload.name}
                  width={400} // Adjust width as needed
                  height={300} // Adjust height as needed
                />
              </div>
            );
          })}
        </Marquee>
        <Marquee className="[--duration:50s]">
          {items.map((payload) => {
            return (
              <div key={payload.name}>
                <Image
                  className={`object-cover md:h-60 md:w-100 h-30 w-60 rounded-[8px] md:rounded-[2px] `}
                  src={payload.imageUrl}
                  alt={payload.name}
                  width={400} // Adjust width as needed
                  height={300} // Adjust height as needed
                  />
              </div>
            );
          })}
        </Marquee>
      </div>
    </div>
  );
};

