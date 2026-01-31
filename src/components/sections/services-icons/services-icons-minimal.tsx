'use client';

import { services } from '@/lib/placeholder-data';

export function ServicesIconsMinimal() {
    return (
        <section id="services" className="py-16 md:py-20 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center max-w-6xl mx-auto">
                    {services.slice(0, 6).map((service) => (
                        <div key={service.id} className="flex flex-col items-center gap-3">
                            <div className="flex h-20 w-20 items-center justify-center rounded-full bg-primary/10 text-primary transition-transform duration-300 hover:scale-110">
                                {service.icon}
                            </div>
                            <h3 className="font-semibold text-foreground text-sm">{service.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
