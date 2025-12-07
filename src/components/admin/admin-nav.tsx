'use client';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  Home,
  Users,
  Calendar,
  Stethoscope,
  Settings,
  LineChart,
} from 'lucide-react';
import { Badge } from '@/components/ui/badge';
import { cn } from '@/lib/utils';

const navLinks = [
  { href: '/admin', label: 'Dashboard', icon: Home, exact: true },
  { href: '/admin/appointments', label: 'Appointments', icon: Calendar, badge: 6 },
  { href: '/admin/patients', label: 'Patients', icon: Users },
  { href: '/admin/doctors', label: 'Doctors', icon: Stethoscope },
  { href: '/admin/analytics', label: 'Analytics', icon: LineChart },
  { href: '/admin/settings', label: 'Settings', icon: Settings },
];

const AdminNav = () => {
  const pathname = usePathname();

  return (
    <nav className="grid items-start px-2 text-sm font-medium lg:px-4">
      {navLinks.map((link) => {
        const isActive = link.exact ? pathname === link.href : pathname.startsWith(link.href);
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              'flex items-center gap-3 rounded-lg px-3 py-2 text-muted-foreground transition-all hover:text-primary',
              isActive && 'bg-muted text-primary'
            )}
          >
            <link.icon className="h-4 w-4" />
            {link.label}
            {link.badge && (
              <Badge className="ml-auto flex h-6 w-6 shrink-0 items-center justify-center rounded-full">
                {link.badge}
              </Badge>
            )}
          </Link>
        );
      })}
    </nav>
  );
};

export default AdminNav;
