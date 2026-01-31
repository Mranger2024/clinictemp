'use client';

import React, { createContext, useContext, useState, ReactNode } from 'react';

type HeaderVariant = 'default' | 'modern' | 'minimal' | 'premium';

interface HeaderContextType {
    variant: HeaderVariant;
    setVariant: (variant: HeaderVariant) => void;
}

const HeaderContext = createContext<HeaderContextType | undefined>(undefined);

export function HeaderProvider({ children }: { children: ReactNode }) {
    const [variant, setVariant] = useState<HeaderVariant>('default');

    return (
        <HeaderContext.Provider value={{ variant, setVariant }}>
            {children}
        </HeaderContext.Provider>
    );
}

export function useHeader() {
    const context = useContext(HeaderContext);
    if (context === undefined) {
        throw new Error('useHeader must be used within a HeaderProvider');
    }
    return context;
}
