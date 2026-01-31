'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import AppointmentFormContainer from '@/components/appointment-form-container';

export function HeroMinimal() {
    return (
        <section className="py-20 md:py-28 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="max-w-4xl mx-auto text-center space-y-10">

                    <div className="space-y-6">
                        <h1 className="font-headline text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-foreground leading-tight">
                            Complete Dental Care for Your Smile
                        </h1>

                        <p className="text-xl md:text-2xl text-muted-foreground leading-relaxed max-w-3xl mx-auto">
                            Modern technology • Gentle care • Flexible payment options
                        </p>
                    </div>

                    <Button asChild size="lg" className="font-semibold px-12">
                        <Link href="/appointment">Book Appointment</Link>
                    </Button>

                    <div className="max-w-2xl mx-auto pt-8">
                        <div className="bg-card p-8 rounded-lg shadow-lg">
                            <AppointmentFormContainer />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
}
