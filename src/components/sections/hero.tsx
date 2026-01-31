'use client';

import { HeroDefault } from './hero/hero-default';
import { HeroModern } from './hero/hero-modern';
import { HeroMinimal } from './hero/hero-minimal';
import { HeroPremium } from './hero/hero-premium';
import { SectionThemeSwitcher } from '@/components/section-theme-switcher';
import { useSectionTheme } from '@/components/section-theme-context';

export function HeroSection() {
    const { currentTheme } = useSectionTheme('hero', 'modern');

    return (
        <div className="relative group">
            <SectionThemeSwitcher
                sectionId="hero"
                themes={[
                    { id: 'default', label: 'Classic Design' },
                    { id: 'modern', label: 'Modern Split' },
                    { id: 'minimal', label: 'Clean Focus' },
                    { id: 'premium', label: 'Premium Gradient' }
                ]}
            />
            {currentTheme === 'default' && <HeroDefault />}
            {currentTheme === 'modern' && <HeroModern />}
            {currentTheme === 'minimal' && <HeroMinimal />}
            {currentTheme === 'premium' && <HeroPremium />}
        </div>
    );
}
