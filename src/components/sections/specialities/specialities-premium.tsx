'use client';

import { services } from '@/lib/placeholder-data';
import Link from 'next/link';
import { ArrowRight, CheckCircle2 } from 'lucide-react';

export function SpecialitiesPremium() {
    return (
        <section id="specialities" className="py-28 bg-gradient-to-b from-background via-secondary/10 to-background relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6 uppercase tracking-wider">
                        <CheckCircle2 className="h-4 w-4" />
                        Comprehensive Care
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Advanced Treatment Departments
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Specialized care for every condition
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    {services.slice(6).map((service) => (
                        <Link
                            href={`/services/${service.id}`}
                            key={service.id}
                            className="group relative"
                        >
                            <div className="absolute -inset-0.5 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>

                            <div className="relative bg-card border-2 border-border group-hover:border-primary/50 rounded-2xl p-8 transition-all duration-300">
                                <div className="flex items-start gap-6">
                                    <div className="shrink-0 p-4 rounded-xl bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        {service.icon}
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-3">
                                            <h3 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                                                {service.name}
                                            </h3>
                                            <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all shrink-0 ml-4" />
                                        </div>

                                        <p className="text-muted-foreground leading-relaxed">
                                            {service.description}
                                        </p>

                                        <div className="mt-4 pt-4 border-t border-border">
                                            <span className="text-sm font-semibold text-primary">Learn More →</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
