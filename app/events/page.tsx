'use client';

import { EventCarousel } from "@/components/common/events-carousel";
import { GallerySection } from "@/components/events/gallery-section";
import EventsGalleryHero from "@/components/events/hero";

const EventsPage = () => {
    return (
        <div>
            <EventsGalleryHero />
            <EventCarousel/>
            <GallerySection />
        </div>
    );
};

export default EventsPage;