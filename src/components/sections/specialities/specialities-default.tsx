
'use client';

import { services } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader } from '@/components/ui/card';

export function SpecialitiesDefault() {
    return (
        <section id="specialities" className="py-16 md:py-20 bg-primary">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-primary-foreground">Our Specialities</h2>
                    <p className="mt-2 text-lg text-primary-foreground/80 max-w-2xl mx-auto">We offer a wide range of specialized services to meet the diverse health needs of our patients.</p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                    {services.slice(6).map((service) => (
                        <Card key={service.id} className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground text-center">
                            <CardHeader>
                                <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/20 text-primary-foreground">
                                    {service.icon}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <h3 className="font-headline text-xl font-semibold">{service.name}</h3>
                                <p className="mt-2 text-sm text-primary-foreground/80">{service.description}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
