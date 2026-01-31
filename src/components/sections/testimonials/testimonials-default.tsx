
'use client';

import { testimonials } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import GoogleIcon from '@/components/google-icon';
import { Star } from 'lucide-react';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';

export function TestimonialsDefault() {
    return (
        <section id="testimonials" className="py-16 md:py-20 bg-secondary">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Patients love Smile Dental Clinic</h2>
                    <p className="mt-2 text-muted-foreground">
                        See what our patients are saying on Google.
                    </p>
                </div>
                <Carousel opts={{ loop: true }} className="max-w-6xl mx-auto">
                    <CarouselContent>
                        {testimonials.map((testimonial) => {
                            const patientImage = PlaceHolderImages.find((img) => img.id === testimonial.imageId);
                            return (
                                <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                                    <Card className="h-full">
                                        <CardContent className="p-6 flex flex-col items-start gap-4">
                                            <div className="flex items-start justify-between w-full">
                                                <div className="flex items-center gap-4">
                                                    {patientImage && (
                                                        <Avatar className="h-12 w-12">
                                                            <AvatarImage src={patientImage.imageUrl} alt={testimonial.name} data-ai-hint="person avatar" />
                                                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                                        </Avatar>
                                                    )}
                                                    <div>
                                                        <p className="font-headline font-semibold">{testimonial.name}</p>
                                                        <p className="text-xs text-muted-foreground">{testimonial.time}</p>
                                                    </div>
                                                </div>
                                                <GoogleIcon className="h-6 w-6" />
                                            </div>
                                            <div className="flex items-center gap-1">
                                                {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                                                {[...Array(5 - testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-muted text-muted-foreground" />)}
                                            </div>
                                            <blockquote className="text-sm text-muted-foreground leading-relaxed">"{testimonial.quote}"</blockquote>
                                        </CardContent>
                                    </Card>
                                </CarouselItem>
                            );
                        })}
                    </CarouselContent>
                    <div className="hidden lg:block">
                        <CarouselPrevious className="left-[-50px]" />
                        <CarouselNext className="right-[-50px]" />
                    </div>
                </Carousel>
            </div>
        </section>
    );
}
