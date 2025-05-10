"use client";

import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";
import Image from "next/image"; // Import Image from next/image

export function EventCarousel() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h3 className="text-[26px] smmin:text-[26px] sm:text-[26px] md:text-6xl font-bold text-gray-900 max-w-7xl pl-4 mx-auto max-w-7xl pl-4 mx-auto">
        Upcoming & Past Events
      </h3>
      <Carousel items={cards} />
    </div>
  );
}

const DummyContent = () => {
  return (
    <>
      {[...new Array(3).fill(1)].map((_, index) => {
        return (
          <div
            key={"dummy-content" + index}
            className="bg-[#F5F5F7] dark:bg-neutral-800 p-8 md:p-14 rounded-3xl mb-4"
          >
            <p className="text-neutral-600 dark:text-neutral-400 text-base md:text-2xl font-sans max-w-3xl mx-auto">
              <span className="font-bold text-neutral-700 dark:text-neutral-200">
                The first rule of Apple club is that you boast about Apple club.
              </span>{" "}
              Keep a journal, quickly jot down a grocery list, and take amazing
              class notes. Want to convert those notes to text? No problem.
              Langotiya jeetu ka mara hua yaar is ready to capture every
              thought.
            </p>
            <Image
              src="https://assets.aceternity.com/macbook.png"
              alt="Macbook mockup from Aceternity UI"
              height={500} // Fixed height
              width={500} // Fixed width
              className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
            />
          </div>
        );
      })}
    </>
  );
};

const data = [
  {
    category: "Past Event",
    title: "Code For Bharat Season 1",
    src: "/cfb1.png",
    content: <></>,
  },
  {
    category: "Upcoming",
    title: "Code For Bharat Season 2",
    src: "/cfb2.png",
    content: <></>,
  },
  {
    category: "Upcoming",
    title: "Coming Soon",
    src: "/abc2.png",
    content: <></>,
  },

  {
    category: "Upcoming",
    title: "Coming Soon",
    src: "/abc3.png",
    content: <></>,
  },
];
