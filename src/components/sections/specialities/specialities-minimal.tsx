'use client';

import { services } from '@/lib/placeholder-data';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';

export function SpecialitiesMinimal() {
    return (
        <section id="specialities" className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Specialized Departments</h2>
                    <p className="text-muted-foreground">Expert care across multiple specialties</p>
                </div>

                <div className="space-y-4">
                    {services.slice(6).map((service, index) => (
                        <Link
                            href={`/services/${service.id}`}
                            key={service.id}
                            className="group flex items-center justify-between p-6 rounded-lg border border-border hover:border-primary hover:bg-secondary/30 transition-all cursor-pointer"
                        >
                            <div className="flex items-center gap-6">
                                <div className="text-2xl font-bold text-muted-foreground/30 group-hover:text-primary/50 transition-colors w-12">
                                    0{index + 1}
                                </div>
                                <div className="p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    {service.icon}
                                </div>
                                <div>
                                    <h3 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                                        {service.name}
                                    </h3>
                                    <p className="text-sm text-muted-foreground mt-1">{service.description}</p>
                                </div>
                            </div>
                            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0" />
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
