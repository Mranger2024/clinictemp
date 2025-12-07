
'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, Search, Phone, ChevronDown, Bell } from 'lucide-react';
import { usePathname } from 'next/navigation';

import Logo from '@/components/logo';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { Input } from '../ui/input';

const navLinks = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About' },
  { href: '/services', label: 'Services' },
  { href: '/doctors', label: 'Doctors' },
  { href: '/clinic', label: 'Clinic' },
  { href: '/blog', label: 'Blog' },
  { href: '/contact', label: 'Contact' },
];

const NotificationScroll = () => (
  <div className="relative flex overflow-hidden">
    <div className="animate-marquee whitespace-nowrap">
      <span className="mx-4">This is a scrolling notification.</span>
      <span className="mx-4">Another important announcement.</span>
      <span className="mx-4">Special offer this week only!</span>
    </div>
    <div className="absolute top-0 animate-marquee2 whitespace-nowrap">
      <span className="mx-4">This is a scrolling notification.</span>
      <span className="mx-4">Another important announcement.</span>
      <span className="mx-4">Special offer this week only!</span>
    </div>
  </div>
);

const TopBar = ({ isHidden }: { isHidden: boolean }) => (
    <div className={cn(
        "bg-primary text-primary-foreground transition-all duration-300",
        isHidden ? 'h-0 overflow-hidden' : 'h-12'
      )}>
        <div className="container mx-auto flex h-full items-center justify-between px-4">
            <div className="flex items-center gap-2 overflow-hidden">
                <Bell className="h-5 w-5 flex-shrink-0" />
                <NotificationScroll />
            </div>
            <div className="hidden md:flex items-center gap-6 text-sm">
                <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4" />
                    <span>English | +91 1234567890</span>
                </div>
                 <Button asChild size="sm" className="bg-white text-primary hover:bg-white/90">
                    <Link href="/appointment">Book Appointment</Link>
                </Button>
            </div>
        </div>
    </div>
)

const Header = () => {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  
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
            'font-medium text-foreground/70 transition-colors hover:text-primary flex items-center gap-1',
            isActive && 'text-primary font-semibold'
          )}
          onClick={() => setIsMobileMenuOpen(false)}
        >
          {label}
          {(label === 'Services') && <ChevronDown className="h-4 w-4" />}
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
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur-sm">
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
             <Button asChild variant="outline" className="hidden lg:flex">
                <Link href="/login">Log In</Link>
            </Button>
            <div className="lg:hidden">
                <MobileNav />
            </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
