'use client';

import { testimonials } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote } from 'lucide-react';
import GoogleIcon from '@/components/google-icon';

export function TestimonialsModern() {
    return (
        <section id="testimonials" className="py-20 md:py-24 bg-secondary/30">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4 uppercase tracking-wider">
                        Patient Stories
                    </div>
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-4">
                        Trusted by Thousands
                    </h2>
                    <p className="text-lg text-muted-foreground">
                        Real experiences from our patients who chose healing
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.slice(0, 6).map((testimonial) => {
                        const patientImage = PlaceHolderImages.find((img) => img.id === testimonial.imageId);
                        return (
                            <div key={testimonial.id} className="group bg-card border-2 border-border hover:border-primary rounded-xl p-6 transition-all duration-300 hover:shadow-lg">
                                <div className="flex items-start justify-between mb-4">
                                    <div className="flex items-center gap-3">
                                        {patientImage && (
                                            <Avatar className="h-12 w-12 border-2 border-primary/20">
                                                <AvatarImage src={patientImage.imageUrl} alt={testimonial.name} />
                                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                                            </Avatar>
                                        )}
                                        <div>
                                            <div className="font-bold text-foreground">{testimonial.name}</div>
                                            <div className="text-xs text-muted-foreground">{testimonial.time}</div>
                                        </div>
                                    </div>
                                    <GoogleIcon className="h-5 w-5 shrink-0" />
                                </div>

                                <div className="flex gap-1 mb-4">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className={`h-4 w-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-muted text-muted'}`}
                                        />
                                    ))}
                                </div>

                                <blockquote className="text-sm text-muted-foreground leading-relaxed">
                                    &ldquo;{testimonial.quote}&rdquo;
                                </blockquote>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
