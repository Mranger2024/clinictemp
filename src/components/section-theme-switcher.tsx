
'use client';

import { Button } from '@/components/ui/button';
import { Settings2, LayoutTemplate } from 'lucide-react';
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { useSectionTheme } from './section-theme-context';
import { cn } from '@/lib/utils'; // Assuming you have this utility

interface SectionThemeSwitcherProps {
    sectionId: string;
    className?: string;
    themes?: { id: string; label: string }[];
}

export function SectionThemeSwitcher({
    sectionId,
    className,
    themes = [
        { id: 'default', label: 'Default Layout' },
        { id: 'modern', label: 'Modern Layout' }
    ]
}: SectionThemeSwitcherProps) {
    const { currentTheme, setTheme } = useSectionTheme(sectionId);

    return (
        <div className={cn("absolute top-4 right-4 z-40 print:hidden", className)}>
            <DropdownMenu>
                <DropdownMenuTrigger asChild>
                    <Button variant="secondary" size="icon" className="h-8 w-8 rounded-full shadow-md bg-white/80 backdrop-blur hover:bg-white">
                        <LayoutTemplate className="h-4 w-4 text-primary" />
                        <span className="sr-only">Switch Layout</span>
                    </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                    {themes.map((theme) => (
                        <DropdownMenuItem
                            key={theme.id}
                            onClick={() => setTheme(theme.id)}
                            className={currentTheme === theme.id ? "bg-accent" : ""}
                        >
                            {theme.label}
                        </DropdownMenuItem>
                    ))}
                </DropdownMenuContent>
            </DropdownMenu>
        </div>
    );
}
