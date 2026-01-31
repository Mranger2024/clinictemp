'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight, Phone, Calendar, CheckCircle2 } from 'lucide-react';

export function CallToActionPremium() {
    return (
        <section className="py-28 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-br from-primary via-primary to-secondary"></div>
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent_50%)]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="max-w-5xl mx-auto">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        <div>
                            <h2 className="text-5xl md:text-6xl font-bold text-primary-foreground mb-6 leading-tight">
                                Ready to Start Your Healing Journey?
                            </h2>
                            <p className="text-xl text-primary-foreground/90 mb-8 leading-relaxed">
                                Join thousands of patients who chose expert care. Schedule your consultation today and experience the difference.
                            </p>

                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button asChild size="lg" className="h-14 px-8 text-lg bg-background text-foreground hover:bg-background/90 shadow-xl">
                                    <Link href="/appointment">
                                        <Calendar className="mr-2 h-5 w-5" />
                                        Book Appointment
                                    </Link>
                                </Button>
                                <Button asChild variant="outline" size="lg" className="h-14 px-8 text-lg border-2 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
                                    <Link href="/contact">
                                        <Phone className="mr-2 h-5 w-5" />
                                        Call Us Now
                                    </Link>
                                </Button>
                            </div>
                        </div>

                        <div className="bg-white/10 backdrop-blur-sm border-2 border-white/20 rounded-2xl p-8">
                            <h3 className="text-2xl font-bold text-primary-foreground mb-6">Why Choose Us?</h3>
                            <div className="space-y-4">
                                {[
                                    'Same-day discharge with minimal pain',
                                    'Insurance & No-Cost EMI available',
                                    '24/7 post-surgery support',
                                    'FDA approved laser technology'
                                ].map((item, index) => (
                                    <div key={index} className="flex items-center gap-3">
                                        <div className="h-6 w-6 rounded-full bg-primary-foreground/20 flex items-center justify-center shrink-0">
                                            <CheckCircle2 className="h-4 w-4 text-primary-foreground" />
                                        </div>
                                        <span className="text-primary-foreground/90 font-medium">{item}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
