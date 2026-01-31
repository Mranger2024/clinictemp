'use client';

import React from 'react';
import Link from 'next/link';
import { Menu, FileText, AlignJustify } from 'lucide-react';
import { usePathname } from 'next/navigation';

import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { ThemeColorPicker } from '@/components/theme-color-picker';
import { useAppointmentForm } from '@/components/appointment-form-context';
import { HeaderVariantSwitcher } from '@/components/header-variant-switcher';

const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/services', label: 'Services' },
    { href: '/doctors', label: 'Doctors' },
    { href: '/clinic', label: 'Clinic' },
    { href: '/blog', label: 'Blog' },
    { href: '/contact', label: 'Contact' },
];

export function HeaderMinimal() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const { formType, toggleFormType } = useAppointmentForm();

    const NavLink = ({ href, label }: { href: string; label: string }) => {
        const isActive = pathname === href;
        return (
            <Link href={href}>
                <span
                    className={cn(
                        'font-medium text-foreground/60 transition-colors hover:text-foreground',
                        isActive && 'text-foreground font-semibold'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    {label}
                </span>
            </Link>
        );
    };

    const MobileNav = () => (
        <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
            <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="lg:hidden">
                    <Menu className="h-6 w-6" />
                    <span className="sr-only">Open menu</span>
                </Button>
            </SheetTrigger>
            <SheetContent side="left">
                <div className="flex h-full flex-col p-6">
                    <div className="mb-8">
                        <Link href="/" onClick={() => setIsMobileMenuOpen(false)}>
                            <Logo />
                        </Link>
                    </div>
                    <nav className="flex flex-col gap-6">
                        {navLinks.map((link) => (
                            <NavLink key={link.href} {...link} />
                        ))}
                    </nav>
                    <div className="mt-auto flex flex-col gap-4">
                        <Button asChild>
                            <Link href="/appointment">Book Appointment</Link>
                        </Button>
                        <Button asChild variant="outline">
                            <Link href="/login">Patient Login</Link>
                        </Button>
                    </div>
                </div>
            </SheetContent>
        </Sheet>
    )

    return (
        <header className="sticky top-0 z-50 w-full bg-background/80 backdrop-blur-md">
            <div className="container mx-auto flex items-center justify-between px-4 h-16">
                <Link href="/">
                    <Logo />
                </Link>
                <nav className="hidden items-center gap-10 lg:flex">
                    {navLinks.map((link) => (
                        <NavLink key={link.href} {...link} />
                    ))}
                </nav>
                <div className="flex items-center gap-3">
                    <HeaderVariantSwitcher />
                    <ThemeColorPicker />
                    <Button variant="ghost" size="icon" onClick={toggleFormType} title={formType === 'complex' ? "Switch to Simple Form" : "Switch to Detailed Form"}>
                        {formType === 'complex' ? <AlignJustify className="h-5 w-5" /> : <FileText className="h-5 w-5" />}
                    </Button>
                    <Button asChild variant="ghost" className="hidden lg:flex">
                        <Link href="/login">Log In</Link>
                    </Button>
                    <div className="lg:hidden">
                        <MobileNav />
                    </div>
                </div>
            </div>
        </header>
    );
}
