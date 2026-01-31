
'use client';

import * as React from 'react';
import { Palette } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from '@/components/ui/popover';

function hexToHSL(hex: string) {
    let r = 0, g = 0, b = 0;
    if (hex.length === 4) {
        r = parseInt("0x" + hex[1] + hex[1]);
        g = parseInt("0x" + hex[2] + hex[2]);
        b = parseInt("0x" + hex[3] + hex[3]);
    } else if (hex.length === 7) {
        r = parseInt("0x" + hex[1] + hex[2]);
        g = parseInt("0x" + hex[3] + hex[4]);
        b = parseInt("0x" + hex[5] + hex[6]);
    }

    r /= 255;
    g /= 255;
    b /= 255;

    const cmin = Math.min(r, g, b);
    const cmax = Math.max(r, g, b);
    const delta = cmax - cmin;
    let h = 0;
    let s = 0;
    let l = 0;

    if (delta === 0) h = 0;
    else if (cmax === r) h = ((g - b) / delta) % 6;
    else if (cmax === g) h = (b - r) / delta + 2;
    else h = (r - g) / delta + 4;

    h = Math.round(h * 60);
    if (h < 0) h += 360;

    l = (cmax + cmin) / 2;
    s = delta === 0 ? 0 : delta / (1 - Math.abs(2 * l - 1));

    s = +(s * 100).toFixed(1);
    l = +(l * 100).toFixed(1);

    return { h, s, l };
}

export function ThemeColorPicker() {
    const [color, setColor] = React.useState('#22c55e'); // Default green

    const handleColorChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newColor = e.target.value;
        setColor(newColor);

        const { h, s, l } = hexToHSL(newColor);

        // Set Primary
        document.documentElement.style.setProperty('--primary', `${h} ${s}% ${l}%`);
        document.documentElement.style.setProperty('--ring', `${h} ${s}% ${l}%`);

        // Set Secondary (lighter version of primary)
        // We increase lightness to ~95% for secondary background
        const secondaryL = Math.min(95, l + (95 - l) * 0.8);
        // We adjust saturation slightly down for secondary if needed, or keep same
        document.documentElement.style.setProperty('--secondary', `${h} ${s}% ${secondaryL.toFixed(1)}%`);
    };

    return (
        <div className="flex items-center gap-2">
            <div className="relative">
                <input
                    type="color"
                    value={color}
                    onChange={handleColorChange}
                    className="absolute inset-0 opacity-0 w-full h-full cursor-pointer z-10"
                    aria-label="Pick a theme color"
                />
                <Button variant="outline" size="icon" className="w-9 h-9 relative overflow-hidden">
                    <div
                        className="absolute inset-0 opacity-20"
                        style={{ backgroundColor: color }}
                    />
                    <Palette className="h-4 w-4" style={{ color: color }} />
                </Button>
            </div>
        </div>
    );
}
