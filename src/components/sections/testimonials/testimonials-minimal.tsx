'use client';

import { testimonials } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

export function TestimonialsMinimal() {
    return (
        <section id="testimonials" className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-5xl">
                <div className="mb-12 text-center">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-3">Patient Feedback</h2>
                    <p className="text-muted-foreground">What our patients say about us</p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 divide-y lg:divide-y-0 lg:divide-x divide-border">
                    {testimonials.slice(0, 3).map((testimonial) => {
                        const patientImage = PlaceHolderImages.find((img) => img.id === testimonial.imageId);
                        return (
                            <div key={testimonial.id} className="pt-12 lg:pt-0 lg:px-8 first:px-0 first:pt-0">
                                <blockquote className="text-lg font-medium text-foreground leading-relaxed mb-8">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </blockquote>

                                <div className="flex items-center gap-3">
                                    {patientImage && (
                                        <Avatar className="h-12 w-12">
                                            <AvatarImage src={patientImage.imageUrl} alt={testimonial.name} />
                                            <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                        </Avatar>
                                    )}
                                    <div>
                                        <div className="font-bold text-foreground">{testimonial.name}</div>
                                        <div className="text-sm text-muted-foreground">Verified Patient</div>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
