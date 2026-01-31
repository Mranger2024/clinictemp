'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone } from 'lucide-react';

export function CallToActionModern() {
    return (
        <section className="py-20 md:py-24 bg-gradient-to-br from-primary/10 via-secondary/10 to-primary/10 relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.03]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="container mx-auto px-4 text-center relative z-10">
                <div className="max-w-4xl mx-auto space-y-8">
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                        Ready to Start Your
                        <span className="block text-primary mt-2">Healing Journey?</span>
                    </h2>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-2xl mx-auto">
                        Join thousands of patients who chose expert care. Schedule your consultation today.
                    </p>

                    <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
                        <Button asChild size="lg" className="h-14 px-10 text-lg font-semibold shadow-lg shadow-primary/20">
                            <Link href="/appointment">
                                Book Free Consultation <ArrowRight className="ml-2 h-5 w-5" />
                            </Link>
                        </Button>
                        <Button asChild variant="outline" size="lg" className="h-14 px-10 text-lg border-2">
                            <Link href="/contact">
                                <Phone className="mr-2 h-5 w-5" />
                                Call Us Now
                            </Link>
                        </Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
