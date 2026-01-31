'use client';

import { services } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader } from '@/components/ui/card';
import Link from 'next/link';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';

export function ServicesIconsPremium() {
    return (
        <section id="services" className="py-16 md:py-20 bg-gradient-to-b from-background to-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Our Services</h2>
                    <p className="mt-2 text-lg text-muted-foreground max-w-2xl mx-auto">
                        Advanced laser procedures with minimal pain and faster recovery
                    </p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.slice(0, 6).map((service) => (
                        <Card key={service.id} className="group transition-all duration-300 hover:shadow-2xl hover:-translate-y-2">
                            <CardHeader>
                                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                                    {service.icon}
                                </div>
                            </CardHeader>
                            <CardContent>
                                <h3 className="font-semibold text-foreground text-lg mb-2">{service.name}</h3>
                                <p className="text-sm text-muted-foreground mb-4">Advanced treatment with minimal recovery time</p>
                                <Button variant="link" asChild className="p-0 h-auto font-semibold">
                                    <Link href={`/services/${service.id}`}>
                                        Learn More <ArrowRight className="ml-1 h-4 w-4" />
                                    </Link>
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
