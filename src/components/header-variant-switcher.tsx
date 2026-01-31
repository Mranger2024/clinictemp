'use client';

import { useHeader } from './header-context';
import { Button } from './ui/button';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Layout } from 'lucide-react';

const variants = [
    { value: 'default', label: 'Default' },
    { value: 'modern', label: 'Modern' },
    { value: 'minimal', label: 'Minimal' },
    { value: 'premium', label: 'Premium' },
] as const;

export function HeaderVariantSwitcher() {
    const { variant, setVariant } = useHeader();

    return (
        <Popover>
            <PopoverTrigger asChild>
                <Button variant="ghost" size="icon" title="Switch Header Style">
                    <Layout className="h-5 w-5" />
                </Button>
            </PopoverTrigger>
            <PopoverContent className="w-48">
                <div className="space-y-2">
                    <h4 className="font-semibold text-sm mb-3">Header Style</h4>
                    {variants.map((v) => (
                        <button
                            key={v.value}
                            onClick={() => setVariant(v.value)}
                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${variant === v.value
                                    ? 'bg-primary text-primary-foreground font-semibold'
                                    : 'hover:bg-secondary'
                                }`}
                        >
                            {v.label}
                        </button>
                    ))}
                </div>
            </PopoverContent>
        </Popover>
    );
}
