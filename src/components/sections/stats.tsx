'use client';

import { StatsDefault } from './stats/stats-default';
import { StatsModern } from './stats/stats-modern';
import { StatsMinimal } from './stats/stats-minimal';
import { StatsPremium } from './stats/stats-premium';
import { SectionThemeSwitcher } from '@/components/section-theme-switcher';
import { useSectionTheme } from '@/components/section-theme-context';

export function StatsSection() {
    const { currentTheme } = useSectionTheme('stats', 'modern');

    return (
        <div className="relative group">
            <SectionThemeSwitcher
                sectionId="stats"
                themes={[
                    { id: 'default', label: 'Dark Cards' },
                    { id: 'modern', label: 'Bold Row' },
                    { id: 'minimal', label: 'Clean Text' },
                    { id: 'premium', label: 'Gradient Banner' }
                ]}
            />
            {currentTheme === 'default' && <StatsDefault />}
            {currentTheme === 'modern' && <StatsModern />}
            {currentTheme === 'minimal' && <StatsMinimal />}
            {currentTheme === 'premium' && <StatsPremium />}
        </div>
    );
}
