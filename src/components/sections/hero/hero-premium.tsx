'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Check, Shield } from 'lucide-react';
import AppointmentFormContainer from '@/components/appointment-form-container';

export function HeroPremium() {
    return (
        <section className="py-16 md:py-20 bg-gradient-to-br from-secondary via-background to-secondary relative">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

                    {/* Left Content */}
                    <div className="space-y-8">
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20">
                            <Shield className="h-4 w-4 text-primary" />
                            <span className="text-sm font-semibold text-primary">15+ Years of Excellence</span>
                        </div>

                        <div>
                            <h1 className="font-headline text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-tight mb-6">
                                Your Smile Deserves Expert Dental Care
                            </h1>
                            <p className="text-xl text-muted-foreground leading-relaxed">
                                Experience world-class dental treatments with advanced technology, gentle care, and comprehensive support.
                            </p>
                        </div>

                        <ul className="space-y-4">
                            {['Painless Dental Procedures', 'All Insurance Accepted', 'Same Day Appointments', 'Flexible Payment Plans'].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-lg">
                                    <Check className="h-6 w-6 text-primary bg-primary/20 rounded-full p-1 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>

                        <div className="flex flex-col sm:flex-row gap-4">
                            <Button asChild size="lg" className="font-semibold px-10">
                                <Link href="/appointment">Book Free Consultation</Link>
                            </Button>
                            <Button asChild variant="outline" size="lg" className="font-semibold px-10">
                                <Link href="/services">Explore Services</Link>
                            </Button>
                        </div>
                    </div>

                    {/* Right Form */}
                    <div>
                        <Card className="p-6 md:p-8 shadow-2xl border-2">
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
