
import React from 'react';
import { HeroSection } from '@/components/sections/hero';
import { ServicesIconsSection } from '@/components/sections/services-icons';
import { DoctorsSection } from '@/components/sections/doctors';
import { StatsSection } from '@/components/sections/stats';
import { SpecialitiesSection } from '@/components/sections/specialities';
import { TestimonialsSection } from '@/components/sections/testimonials';
import { BlogUpdatesSection } from '@/components/sections/blog-updates';
import { CallToActionSection } from '@/components/sections/cta';

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <HeroSection />

      {/* Specialities Icons Section */}
      <ServicesIconsSection />

      {/* Meet The Doctor Section */}
      <DoctorsSection />

      {/* Stats Section */}
      <StatsSection />

      {/* Our Specialities Section */}
      <SpecialitiesSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Latest Updates Section */}
      <BlogUpdatesSection />

      {/* CTA Section */}
      <CallToActionSection />
    </div>
  );
}

