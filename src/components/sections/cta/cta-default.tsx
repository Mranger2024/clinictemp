
'use client';

import Link from 'next/link';
import { Button } from '@/components/ui/button';

export function CallToActionDefault() {
    return (
        <section className="bg-primary/10 text-primary-foreground py-16">
            <div className="container mx-auto px-4 text-center">
                <h2 className="font-headline text-3xl text-primary font-bold tracking-tight sm:text-4xl">Advanced Surgical Techniques. Personalised Care!</h2>
                <p className="mt-4 text-primary text-lg">Get in touch with us</p>
                <div className="mt-6">
                    <Button asChild size="lg" className="font-semibold bg-white text-primary hover:bg-white/90">
                        <Link href="/contact">Contact</Link>
                    </Button>
                </div>
            </div>
        </section>
    );
}
