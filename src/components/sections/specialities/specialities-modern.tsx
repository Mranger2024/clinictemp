'use client';

import { services } from '@/lib/placeholder-data';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export function SpecialitiesModern() {
    return (
        <section id="specialities" className="py-20 md:py-24 bg-primary/5">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4 uppercase tracking-wider">
                        Specialized Care
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Our Specialities
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Comprehensive treatment options for all anorectal conditions
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.slice(6).map((service) => (
                        <Link
                            href={`/services/${service.id}`}
                            key={service.id}
                            className="group bg-card border-2 border-border hover:border-primary rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg cursor-pointer"
                        >
                            <div className="mx-auto mb-4 inline-flex p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                {service.icon}
                            </div>
                            <h3 className="text-lg font-bold text-foreground mb-2 group-hover:text-primary transition-colors">
                                {service.name}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                                {service.description}
                            </p>
                            <div className="flex items-center justify-center text-sm font-semibold text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                                Learn More <ArrowRight className="ml-1 h-4 w-4" />
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
