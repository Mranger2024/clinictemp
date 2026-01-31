'use client';

import Link from 'next/link';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import AppointmentFormContainer from '@/components/appointment-form-container';

export function HeroModern() {
    return (
        <section className="py-16 md:py-20 bg-background relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <div>
                            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
                                Advanced Dental Care with Modern Technology
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Experience comprehensive dental services with state-of-the-art technology, gentle care, and flexible payment options.
                            </p>
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-center gap-3 text-lg">
                                <Check className="h-6 w-6 text-primary bg-primary/20 rounded-full p-1 shrink-0" />
                                Painless Dental Procedures
                            </li>
                            <li className="flex items-center gap-3 text-lg">
                                <Check className="h-6 w-6 text-primary bg-primary/20 rounded-full p-1 shrink-0" />
                                All Insurance Accepted
                            </li>
                            <li className="flex items-center gap-3 text-lg">
                                <Check className="h-6 w-6 text-primary bg-primary/20 rounded-full p-1 shrink-0" />
                                Same Day Appointments
                            </li>
                            <li className="flex items-center gap-3 text-lg">
                                <Check className="h-6 w-6 text-primary bg-primary/20 rounded-full p-1 shrink-0" />
                                Flexible Payment Plans
                            </li>
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="font-semibold px-10">
                                <Link href="/appointment">Book Free Consultation</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="font-semibold px-10">
                                <Link href="/services">
                                    View Services <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div>
                        <Card className="p-6 md:p-8 shadow-xl">
                            <div className="mb-6">
                                <h3 className="font-headline text-2xl font-bold text-foreground mb-2">Get Expert Consultation</h3>
                                <p className="text-muted-foreground">Free callback within 10 minutes</p>
                            </div>
                            <AppointmentFormContainer />
                        </Card>
                    </div>

                </div>
            </div>
        </section>
    );
}
