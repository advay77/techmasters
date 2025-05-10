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
