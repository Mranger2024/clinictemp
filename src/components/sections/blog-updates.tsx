'use client';

import { BlogUpdatesDefault } from './blog-updates/blog-updates-default';
import { BlogUpdatesModern } from './blog-updates/blog-updates-modern';
import { BlogUpdatesMinimal } from './blog-updates/blog-updates-minimal';
import { BlogUpdatesPremium } from './blog-updates/blog-updates-premium';
import { SectionThemeSwitcher } from '@/components/section-theme-switcher';
import { useSectionTheme } from '@/components/section-theme-context';

export function BlogUpdatesSection() {
    const { currentTheme } = useSectionTheme('blog-updates', 'modern');

    return (
        <div className="relative group">
            <SectionThemeSwitcher
                sectionId="blog-updates"
                themes={[
                    { id: 'default', label: 'Grid Cards' },
                    { id: 'modern', label: 'Magazine' },
                    { id: 'minimal', label: 'List View' },
                    { id: 'premium', label: 'Featured Layout' }
                ]}
            />
            {currentTheme === 'default' && <BlogUpdatesDefault />}
            {currentTheme === 'modern' && <BlogUpdatesModern />}
            {currentTheme === 'minimal' && <BlogUpdatesMinimal />}
            {currentTheme === 'premium' && <BlogUpdatesPremium />}
        </div>
    );
}
