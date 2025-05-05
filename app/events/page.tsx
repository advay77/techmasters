'use client';

import { EventCarousel } from "@/components/common/events-carousel";
import { Bento } from "@/components/events/bento";
import { GallerySection } from "@/components/events/gallery-section";
import EventsGalleryHero from "@/components/events/hero";

const EventsPage = () => {
    return (
        <div className="overflow-x-hidden">
            <EventsGalleryHero />
            <Bento/>
            <EventCarousel/>
            <GallerySection />
        </div>
    );
};

export default EventsPage;