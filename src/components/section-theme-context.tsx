
'use client';

import React, { createContext, useContext, useState, useEffect } from 'react';

type ThemeMap = Record<string, string>;

interface SectionThemeContextType {
    themes: ThemeMap;
    setSectionTheme: (sectionId: string, themeId: string) => void;
}

const SectionThemeContext = createContext<SectionThemeContextType | undefined>(undefined);

export function SectionThemeProvider({ children }: { children: React.ReactNode }) {
    const [themes, setThemes] = useState<ThemeMap>({});

    // Optional: Load from localStorage on mount
    useEffect(() => {
        const savedThemes = localStorage.getItem('section-themes');
        if (savedThemes) {
            try {
                setThemes(JSON.parse(savedThemes));
            } catch (e) {
                console.error('Failed to parse section themes', e);
            }
        }
    }, []);

    const setSectionTheme = (sectionId: string, themeId: string) => {
        setThemes((prev) => {
            const newThemes = { ...prev, [sectionId]: themeId };
            localStorage.setItem('section-themes', JSON.stringify(newThemes));
            return newThemes;
        });
    };

    return (
        <SectionThemeContext.Provider value={{ themes, setSectionTheme }}>
            {children}
        </SectionThemeContext.Provider>
    );
}

export function useSectionTheme(sectionId: string, defaultTheme: string = 'default') {
    const context = useContext(SectionThemeContext);
    if (context === undefined) {
        throw new Error('useSectionTheme must be used within a SectionThemeProvider');
    }

    const currentTheme = context.themes[sectionId] || defaultTheme;

    return {
        currentTheme,
        setTheme: (themeId: string) => context.setSectionTheme(sectionId, themeId),
    };
}
