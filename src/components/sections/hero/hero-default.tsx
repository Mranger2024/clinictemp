
'use client';

import Link from 'next/link';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import AppointmentFormContainer from '@/components/appointment-form-container';

export function HeroDefault() {
    return (
        <section className="bg-secondary py-4 md:py-8 relative">
            <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
                <div className="space-y-6">
                    <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
                        Your Trusted Partner for Complete Dental Care
                    </h1>
                    <ul className="space-y-3 text-lg">
                        <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary bg-primary/20 rounded-full p-1" /> Advanced Dental Technology</li>
                        <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary bg-primary/20 rounded-full p-1" /> All Insurance Accepted</li>
                        <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary bg-primary/20 rounded-full p-1" /> Flexible Payment Plans</li>
                    </ul>
                    <Button asChild size="lg" className="font-semibold px-10">
                        <Link href="/appointment">Book Appointment</Link>
                    </Button>
                </div>
                <div className="relative flex justify-center items-center">
                    <div className="w-full max-w-lg z-10">
                        <AppointmentFormContainer />
                    </div>
                </div>
            </div>
        </section>
    );
}
