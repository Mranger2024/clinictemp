'use client';

import Link from 'next/link';
import { doctors } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Award } from 'lucide-react';

export function DoctorsPremium() {
    return (
        <section id="doctors" className="py-16 md:py-20 bg-gradient-to-br from-secondary to-background">
            <div className="container mx-auto px-4">
                <div className="text-center mb-12">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-4">
                        <Award className="h-4 w-4 text-primary" />
                        <span className="text-sm font-semibold text-primary">Award-Winning Team</span>
                    </div>
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Meet The Doctors</h2>
                    <p className="mt-2 text-lg text-muted-foreground">Our team of experienced and compassionate doctors</p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {doctors.slice(0, 3).map((doctor) => {
                        const doctorImage = PlaceHolderImages.find((img) => img.id === doctor.imageId);
                        return (
                            <Card key={doctor.id} className="group flex flex-col overflow-hidden text-center transition-all duration-300 hover:shadow-2xl hover:-translate-y-2 border-2">
                                <CardContent className="p-6 flex-1 flex flex-col items-center">
                                    {doctorImage && (
                                        <Avatar className="h-32 w-32 mx-auto border-4 border-primary/20 shadow-lg transition-transform duration-300 group-hover:scale-110">
                                            <AvatarImage src={doctorImage.imageUrl} alt={doctor.name} />
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
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
