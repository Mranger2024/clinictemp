
'use client';

import { services } from '@/lib/placeholder-data';

export function ServicesIconsDefault() {
    return (
        <section id="services" className="py-12">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
                    {services.slice(0, 6).map((service) => (
                        <div key={service.id} className="flex flex-col items-center gap-3">
                            <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">{service.icon}</div>
                            <h3 className="font-semibold text-foreground text-sm">{service.name}</h3>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
