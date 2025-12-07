'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { LayoutDashboard, User, Calendar, LogOut } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '../ui/avatar';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const navItems = [
  { href: '/dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { href: '/dashboard/profile', label: 'Profile', icon: User },
  { href: '/dashboard/appointments', label: 'Appointments', icon: Calendar },
];

const PatientDashboardNav = () => {
  const pathname = usePathname();
  const patientAvatar = PlaceHolderImages.find(p => p.id === 'patient-avatar-1');

  return (
    <nav className="flex flex-col gap-4 rounded-lg border p-4 h-full">
        <div className="flex items-center gap-3 pb-4 border-b">
            {patientAvatar && (
            <Avatar className="h-12 w-12">
                <AvatarImage src={patientAvatar.imageUrl} alt="Alex" data-ai-hint={patientAvatar.imageHint} />
                <AvatarFallback>A</AvatarFallback>
            </Avatar>
            )}
            <div>
                <p className="font-semibold">Alex Johnson</p>
                <p className="text-sm text-muted-foreground">alex@example.com</p>
            </div>
        </div>
      {navItems.map((item) => (
        <Button
          key={item.href}
          asChild
          variant={pathname === item.href ? 'default' : 'ghost'}
          className="justify-start"
        >
          <Link href={item.href}>
            <item.icon className="mr-2 h-4 w-4" />
            {item.label}
          </Link>
        </Button>
      ))}
      <div className="mt-auto">
         <Button
            asChild
            variant='ghost'
            className="justify-start w-full text-red-500 hover:text-red-500 hover:bg-red-500/10"
            >
            <Link href="/">
                <LogOut className="mr-2 h-4 w-4" />
                Logout
            </Link>
            </Button>
      </div>
    </nav>
  );
};

export default PatientDashboardNav;
