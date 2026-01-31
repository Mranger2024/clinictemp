'use client';

import { DoctorsDefault } from './doctors/doctors-default';
import { DoctorsModern } from './doctors/doctors-modern';
import { DoctorsMinimal } from './doctors/doctors-minimal';
import { DoctorsPremium } from './doctors/doctors-premium';
import { SectionThemeSwitcher } from '@/components/section-theme-switcher';
import { useSectionTheme } from '@/components/section-theme-context';

export function DoctorsSection() {
    const { currentTheme } = useSectionTheme('doctors', 'default');

    return (
        <div className="relative group">
            <SectionThemeSwitcher
                sectionId="doctors"
                themes={[
                    { id: 'default', label: 'Classic Grid' },
                    { id: 'modern', label: 'Slider Carousel' },
                    { id: 'minimal', label: 'Compact List' },
                    { id: 'premium', label: 'Gradient Cards' }
                ]}
            />
            {currentTheme === 'default' && <DoctorsDefault />}
            {currentTheme === 'modern' && <DoctorsModern />}
            {currentTheme === 'minimal' && <DoctorsMinimal />}
            {currentTheme === 'premium' && <DoctorsPremium />}
        </div>
    );
}
