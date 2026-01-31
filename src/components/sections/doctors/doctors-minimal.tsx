'use client';

import Link from 'next/link';
import { doctors } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';

export function DoctorsMinimal() {
    return (
        <section id="doctors" className="py-16 md:py-20 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Meet The Doctors</h2>
                </div>

                <div className="max-w-4xl mx-auto space-y-8">
                    {doctors.slice(0, 3).map((doctor) => {
                        const doctorImage = PlaceHolderImages.find((img) => img.id === doctor.imageId);
                        return (
                            <div key={doctor.id} className="flex flex-col md:flex-row gap-6 items-center md:items-start text-center md:text-left">
                                {doctorImage && (
                                    <Avatar className="h-24 w-24 border-4 border-background shadow-lg shrink-0">
                                        <AvatarImage src={doctorImage.imageUrl} alt={doctor.name} />
                                        <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                )}
                                <div className="flex-1">
                                    <h3 className="font-headline text-xl font-semibold">{doctor.name}</h3>
                                    <p className="text-primary font-medium mb-2">{doctor.specialty}</p>
                                    <p className="text-sm text-muted-foreground">{doctor.bio}</p>
                                </div>
                                <Button asChild className="shrink-0">
                                    <Link href="/appointment">Book Appointment</Link>
                                </Button>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
