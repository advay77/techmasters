// components/EventsGalleryHero.tsx
import React from 'react';
import Link from 'next/link';
import { RetroGrid } from "@/components/magicui/retro-grid";

type EventCategory = 'Hackathons' | 'Speaker Interactions' | 'Workshops';

const EventsGalleryHero: React.FC = () => {

    const categories: EventCategory[] = [
        'Hackathons',
        'Speaker Interactions',
        'Workshops'
    ];

    return (
        <section className="w-full h-[70vh] py-16 md:py-24 flex flex-col items-center justify-center text-center bg-white relative">
            <RetroGrid />

            <div className="container mx-auto px-4 z-10">
                {/* Category Navigation */}
                <div className="flex flex-wrap justify-center gap-4 md:gap-8 mb-4 md:mb-4">
                    {categories.map((category) => (
                        <button
                            key={category}
                            className={`text-sm md:text-base py-1 text-gray-500`}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                {/* Heading */}
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-8 md:mb-12 z-10">
                    Events and Gallery
                </h1>

                {/* Subscribe Button */}
                <Link href="/subscribe z-10">
                    <button
                        className="inline-flex items-center border-2 border-black rounded-full px-8 py-3 text-base font-medium transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-black focus:ring-opacity-50 bg-black text-white"
                    >
                        SUBSCRIBE FOR FUTURE EVENTS
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5 ml-2"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth={2}
                                d="M14 5l7 7m0 0l-7 7m7-7H3"
                            />
                        </svg>
                    </button>
                </Link>
            </div>
        </section>
    );
};

export default EventsGalleryHero;