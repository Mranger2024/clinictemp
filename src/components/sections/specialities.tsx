'use client';

import { SpecialitiesDefault } from './specialities/specialities-default';
import { SpecialitiesModern } from './specialities/specialities-modern';
import { SpecialitiesMinimal } from './specialities/specialities-minimal';
import { SpecialitiesPremium } from './specialities/specialities-premium';
import { SectionThemeSwitcher } from '@/components/section-theme-switcher';
import { useSectionTheme } from '@/components/section-theme-context';

export function SpecialitiesSection() {
    const { currentTheme } = useSectionTheme('specialities', 'default');

    return (
        <div className="relative group">
            <SectionThemeSwitcher
                sectionId="specialities"
                themes={[
                    { id: 'default', label: 'Detailed Cards' },
                    { id: 'modern', label: 'Editorial Grid' },
                    { id: 'minimal', label: 'Split List' },
                    { id: 'premium', label: 'Horizontal Cards' }
                ]}
            />
            {currentTheme === 'default' && <SpecialitiesDefault />}
            {currentTheme === 'modern' && <SpecialitiesModern />}
            {currentTheme === 'minimal' && <SpecialitiesMinimal />}
            {currentTheme === 'premium' && <SpecialitiesPremium />}
        </div>
    );
}
