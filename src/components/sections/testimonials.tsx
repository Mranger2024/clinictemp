'use client';

import { TestimonialsDefault } from './testimonials/testimonials-default';
import { TestimonialsModern } from './testimonials/testimonials-modern';
import { TestimonialsMinimal } from './testimonials/testimonials-minimal';
import { TestimonialsPremium } from './testimonials/testimonials-premium';
import { SectionThemeSwitcher } from '@/components/section-theme-switcher';
import { useSectionTheme } from '@/components/section-theme-context';

export function TestimonialsSection() {
    const { currentTheme } = useSectionTheme('testimonials', 'modern');

    return (
        <div className="relative group">
            <SectionThemeSwitcher
                sectionId="testimonials"
                themes={[
                    { id: 'default', label: 'Carousel' },
                    { id: 'modern', label: 'Masonry Grid' },
                    { id: 'minimal', label: 'Clean Quotes' },
                    { id: 'premium', label: 'Gradient Cards' }
                ]}
            />
            {currentTheme === 'default' && <TestimonialsDefault />}
            {currentTheme === 'modern' && <TestimonialsModern />}
            {currentTheme === 'minimal' && <TestimonialsMinimal />}
            {currentTheme === 'premium' && <TestimonialsPremium />}
        </div>
    );
}
