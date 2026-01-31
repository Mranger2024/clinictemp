'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Phone, Mail, ChevronDown, MapPin, FileText, AlignJustify } from 'lucide-react';
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

const TopBar = ({ isHidden }: { isHidden: boolean }) => (
    <div className={cn(
        "bg-secondary text-foreground border-b transition-all duration-300",
        isHidden ? 'h-0 overflow-hidden' : 'h-10'
    )}>
        <div className="container mx-auto flex h-full items-center justify-between px-4 text-sm">
            <div className="flex items-center gap-6">
                <div className="flex items-center gap-2">
                    <Phone className="h-3.5 w-3.5 text-primary" />
                    <span>+91 1234567890</span>
                </div>
                <div className="hidden md:flex items-center gap-2">
                    <Mail className="h-3.5 w-3.5 text-primary" />
                    <span>info@smiledental.com</span>
                </div>
                <div className="hidden lg:flex items-center gap-2">
                    <MapPin className="h-3.5 w-3.5 text-primary" />
                    <span>Mumbai, India</span>
                </div>
            </div>
            <div className="text-xs text-muted-foreground">
                Mon - Sat: 9:00 AM - 8:00 PM
            </div>
        </div>
    </div>
)

export function HeaderPremium() {
    const pathname = usePathname();
    const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
    const [isScrolled, setIsScrolled] = useState(false);
    const { formType, toggleFormType } = useAppointmentForm();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 0);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const NavLink = ({ href, label }: { href: string; label: string }) => {
        const isActive = pathname === href;
        return (
            <Link href={href}>
                <span
                    className={cn(
                        'font-medium text-foreground/70 transition-colors hover:text-primary flex items-center gap-1 relative group',
                        isActive && 'text-primary font-semibold'
                    )}
                    onClick={() => setIsMobileMenuOpen(false)}
                >
                    {label}
                    {(label === 'Services') && <ChevronDown className="h-4 w-4" />}
                    <span className={cn(
                        "absolute -bottom-2 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full",
                        isActive && "w-full"
                    )} />
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
        <header className="sticky top-0 z-50 w-full bg-background border-b shadow-sm">
            <TopBar isHidden={isScrolled} />
            <div className={cn("container mx-auto flex items-center justify-between px-4 transition-all duration-300", isScrolled ? "h-16" : "h-20")}>
                <Link href="/">
                    <Logo />
                </Link>
                <nav className="hidden items-center gap-8 lg:flex">
                    {navLinks.map((link) => (
                        <NavLink key={link.href} {...link} />
                    ))}
                </nav>
                <div className="flex items-center gap-4">
                    <HeaderVariantSwitcher />
                    <ThemeColorPicker />
                    <Button variant="ghost" size="icon" onClick={toggleFormType} title={formType === 'complex' ? "Switch to Simple Form" : "Switch to Detailed Form"}>
                        {formType === 'complex' ? <AlignJustify className="h-5 w-5" /> : <FileText className="h-5 w-5" />}
                    </Button>
                    <Button asChild variant="outline" className="hidden lg:flex">
                        <Link href="/login">Log In</Link>
                    </Button>
                    <Button asChild className="hidden lg:flex">
                        <Link href="/appointment">Book Appointment</Link>
                    </Button>
                    <div className="lg:hidden">
                        <MobileNav />
                    </div>
                </div>
            </div>
        </header>
    );
}
