'use client';

import { ServicesIconsDefault } from './services-icons/services-icons-default';
import { ServicesIconsModern } from './services-icons/services-icons-modern';
import { ServicesIconsMinimal } from './services-icons/services-icons-minimal';
import { ServicesIconsPremium } from './services-icons/services-icons-premium';
import { SectionThemeSwitcher } from '@/components/section-theme-switcher';
import { useSectionTheme } from '@/components/section-theme-context';

export function ServicesIconsSection() {
    const { currentTheme } = useSectionTheme('services-icons', 'default');

    return (
        <div className="relative group">
            <SectionThemeSwitcher
                sectionId="services-icons"
                themes={[
                    { id: 'default', label: 'Simple Grid' },
                    { id: 'modern', label: 'Interactive Cards' },
                    { id: 'minimal', label: 'Clean List' },
                    { id: 'premium', label: 'Elevated Cards' }
                ]}
            />
            {currentTheme === 'default' && <ServicesIconsDefault />}
            {currentTheme === 'modern' && <ServicesIconsModern />}
            {currentTheme === 'minimal' && <ServicesIconsMinimal />}
            {currentTheme === 'premium' && <ServicesIconsPremium />}
        </div>
    );
}
