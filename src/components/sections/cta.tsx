'use client';

import { CallToActionDefault } from './cta/cta-default';
import { CallToActionModern } from './cta/cta-modern';
import { CallToActionMinimal } from './cta/cta-minimal';
import { CallToActionPremium } from './cta/cta-premium';
import { SectionThemeSwitcher } from '@/components/section-theme-switcher';
import { useSectionTheme } from '@/components/section-theme-context';

export function CallToActionSection() {
    const { currentTheme } = useSectionTheme('cta', 'default');

    return (
        <div className="relative group">
            <SectionThemeSwitcher
                sectionId="cta"
                themes={[
                    { id: 'default', label: 'Standard Prompt' },
                    { id: 'modern', label: 'High Impact' },
                    { id: 'minimal', label: 'Typography' },
                    { id: 'premium', label: 'Split Benefits' }
                ]}
            />
            {currentTheme === 'default' && <CallToActionDefault />}
            {currentTheme === 'modern' && <CallToActionModern />}
            {currentTheme === 'minimal' && <CallToActionMinimal />}
            {currentTheme === 'premium' && <CallToActionPremium />}
        </div>
    );
}
