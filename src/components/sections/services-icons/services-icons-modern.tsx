'use client';

import { services } from '@/lib/placeholder-data';
import { Card, CardContent } from '@/components/ui/card';
import Link from 'next/link';

export function ServicesIconsModern() {
    return (
        <section id="services" className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
                    <p className="mt-2 text-lg text-muted-foreground">Comprehensive treatment solutions for all anorectal conditions</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.slice(0, 6).map((service) => (
                        <Link href={`/services/${service.id}`} key={service.id}>
                            <Card className="group h-full transition-all duration-300 hover:shadow-xl hover:-translate-y-1 cursor-pointer">
                                <CardContent className="p-6 text-center">
                                    <div className="flex h-16 w-16 mx-auto items-center justify-center rounded-full bg-primary/10 text-primary mb-4 group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                        {service.icon}
                                    </div>
                                    <h3 className="font-semibold text-foreground text-lg mb-2">{service.name}</h3>
                                    <p className="text-sm text-muted-foreground">Advanced laser treatment with minimal recovery</p>
                                </CardContent>
                            </Card>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}
