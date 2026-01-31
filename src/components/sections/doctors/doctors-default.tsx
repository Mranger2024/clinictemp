
'use client';

import Link from 'next/link';
import { doctors } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';

export function DoctorsDefault() {
    return (
        <section id="doctors" className="py-16 md:py-20 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Meet The Doctors</h2>
                    <p className="mt-2 text-lg text-muted-foreground">Our team of experienced and compassionate doctors.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {doctors.slice(0, 3).map((doctor) => {
                        const doctorImage = PlaceHolderImages.find((img) => img.id === doctor.imageId);
                        return (
                            <Card key={doctor.id} className="group flex flex-col overflow-hidden text-center transform-gpu transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                                <CardContent className="p-6 flex-1 flex flex-col items-center">
                                    {doctorImage && (
                                        <Avatar className="h-32 w-32 mx-auto border-4 border-background shadow-lg transition-transform duration-300 group-hover:scale-105">
                                            <AvatarImage src={doctorImage.imageUrl} alt={doctor.name} data-ai-hint={doctorImage.imageHint} />
                                            <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                    )}
                                    <h3 className="font-headline text-xl font-semibold mt-4">{doctor.name}</h3>
                                    <p className="text-primary font-medium">{doctor.specialty}</p>
                                    <p className="mt-2 text-sm text-muted-foreground">{doctor.bio}</p>
                                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                                        {doctor.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                                    </div>
                                </CardContent>
                                <CardFooter>
                                    <Button asChild className="w-full">
                                        <Link href="/appointment">Book Appointment</Link>
                                    </Button>
                                </CardFooter>
                            </Card>
                        )
                    })}
                </div>
            </div>
        </section>
    );
}
