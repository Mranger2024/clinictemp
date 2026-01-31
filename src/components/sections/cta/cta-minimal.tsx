'use client';

import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function CallToActionMinimal() {
    return (
        <section className="py-32 bg-background border-t border-border">
            <div className="container mx-auto px-4 text-center">
                <h2 className="text-5xl md:text-7xl font-bold tracking-tighter text-foreground mb-8">
                    Ready to heal?
                </h2>

                <div className="flex flex-col sm:flex-row items-center justify-center gap-8">
                    <Link href="/appointment" className="group flex items-center text-xl font-medium text-foreground hover:text-primary transition-colors cursor-pointer">
                        Book Appointment <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                    </Link>
                    <span className="hidden sm:block text-muted-foreground/30 text-2xl">|</span>
                    <Link href="/contact" className="text-xl font-medium text-muted-foreground hover:text-foreground transition-colors cursor-pointer">
                        Contact Us
                    </Link>
                </div>
            </div>
        </section>
    );
}
