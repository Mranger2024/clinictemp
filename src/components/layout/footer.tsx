import Link from 'next/link';
import { Facebook, Twitter, Instagram, Youtube, MapPin } from 'lucide-react';
import Logo from '@/components/logo';

const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* About Section */}
          <div className="md:col-span-1">
            <Link href="/" className="mb-4 inline-block">
              <Logo isFooter={true} />
            </Link>
            <p className="text-sm text-primary-foreground/80">
              Advanced treatments in proctology, specializing in laser and robotic surgery.
            </p>
            <div className="mt-4 flex space-x-4">
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground"><Facebook /></Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground"><Instagram /></Link>
              <Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground"><Youtube /></Link>
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h3 className="font-headline font-semibold text-primary-foreground">Treatments</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Laser Fistula Treatment</Link></li>
              <li><Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Laser Piles Treatment</Link></li>
              <li><Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Hernia</Link></li>
              <li><Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Circumscision</Link></li>
              <li><Link href="#" className="text-primary-foreground/80 hover:text-primary-foreground">Anal Fissure</Link></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="font-headline font-semibold text-primary-foreground">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><Link href="/about" className="text-primary-foreground/80 hover:text-primary-foreground">About Us</Link></li>
              <li><Link href="/doctors" className="text-primary-foreground/80 hover:text-primary-foreground">Doctors</Link></li>
              <li><Link href="/contact" className="text-primary-foreground/80 hover:text-primary-foreground">Contact</Link></li>
              <li><Link href="/blog" className="text-primary-foreground/80 hover:text-primary-foreground">Blog</Link></li>
            </ul>
          </div>


          {/* Our Locations */}
          <div>
            <h3 className="font-headline font-semibold text-primary-foreground">Our Location</h3>
            <div className="mt-4 space-y-4">
              <div>
                <h4 className="font-semibold text-primary-foreground">Vashi</h4>
                <p className="text-primary-foreground/80 text-sm mt-1">
                  Plot 19, 1st Floor, Near Hotel Vashi Inn, Sector 28, Vashi, Navi Mumbai - 400703, MAHARASHTRA
                </p>
                <div className="h-24 mt-2 w-full rounded-lg bg-primary/80 flex items-center justify-center">
                  <p className="text-xs text-primary-foreground/60">Map Placeholder</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-8 border-t border-primary-foreground/20 pt-6 text-center text-sm text-primary-foreground/80">
          <p>&copy; {new Date().getFullYear()} Smile Dental Clinic. All rights reserved. |
            <Link href="/privacy" className="hover:text-primary-foreground"> Privacy Policy</Link> |
            <Link href="/terms" className="hover:text-primary-foreground"> Terms of Service</Link>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
