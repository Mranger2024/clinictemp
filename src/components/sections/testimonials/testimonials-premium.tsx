'use client';

import { testimonials } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Star, Quote, CheckCircle2 } from 'lucide-react';

export function TestimonialsPremium() {
    return (
        <section id="testimonials" className="py-28 bg-gradient-to-br from-primary/5 via-background to-secondary/5 relative overflow-hidden">
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl"></div>
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-6 uppercase tracking-wider">
                        <CheckCircle2 className="h-4 w-4" />
                        Verified Reviews
                    </div>
                    <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
                        Trusted by Thousands
                    </h2>
                    <p className="text-xl text-muted-foreground">
                        Real experiences from our patients who chose healing
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.slice(0, 6).map((testimonial) => {
                        const patientImage = PlaceHolderImages.find((img) => img.id === testimonial.imageId);
                        return (
                            <div key={testimonial.id} className="group relative">
                                <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>

                                <div className="relative bg-card border-2 border-border group-hover:border-primary/50 rounded-2xl p-8 transition-all duration-300 h-full flex flex-col">
                                    <Quote className="h-10 w-10 text-primary/20 mb-4" />

                                    <div className="flex gap-1 mb-6">
                                        {[...Array(5)].map((_, i) => (
                                            <Star
                                                key={i}
                                                className={`h-4 w-4 ${i < testimonial.rating ? 'fill-yellow-400 text-yellow-400' : 'fill-muted text-muted'}`}
                                            />
                                        ))}
                                    </div>

                                    <blockquote className="text-lg text-foreground font-medium leading-relaxed mb-8 flex-1">
                                        &ldquo;{testimonial.quote}&rdquo;
                                    </blockquote>

                                    <div className="flex items-center gap-4 pt-6 border-t border-border">
                                        {patientImage && (
                                            <Avatar className="h-14 w-14 border-2 border-primary/20">
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
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
