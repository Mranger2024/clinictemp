
'use client';

import { featuredPostImage, recentPosts } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

export function BlogUpdatesDefault() {
    return (
        <section className="py-16 md:py-20 bg-background">
            <div className="container mx-auto px-4">
                <div className="mb-12 text-center">
                    <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Latest Updates</h2>
                    <p className="mt-2 text-lg max-w-2xl mx-auto text-muted-foreground">Stay informed with our latest news and health articles.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="md:col-span-2">
                        <Card className="overflow-hidden group h-full">
                            {featuredPostImage && (
                                <div className="relative h-80">
                                    <Image src={featuredPostImage.imageUrl} alt="Featured post" fill className="object-cover group-hover:scale-105 transition-transform duration-300" data-ai-hint={featuredPostImage.imageHint} />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                                </div>
                            )}
                            <CardContent className="p-6">
                                <Badge variant="secondary" className="mb-2">Featured</Badge>
                                <h3 className="font-headline text-2xl font-semibold mb-2">New Laser Treatment for Fistula</h3>
                                <p className="text-muted-foreground mb-4">Discover our latest painless procedure that promises quicker recovery and better results. Our advanced techniques are designed for patient comfort and optimal outcomes.</p>
                                <Button asChild variant="link" className="p-0 font-semibold">
                                    <Link href="#">Read More <ArrowRight className="ml-2 h-4 w-4" /></Link>
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                    <div>
                        <h3 className="font-headline text-xl font-bold mb-4">Recent Posts</h3>
                        <div className="space-y-4">
                            {recentPosts.map(post => {
                                const postImage = PlaceHolderImages.find(img => img.id === post.imageId);
                                return (
                                    <Link href="#" key={post.id}>
                                        <div className="flex items-center gap-4 group">
                                            {postImage && <Image src={postImage.imageUrl} alt={post.title} width={80} height={80} className="rounded-lg object-cover" data-ai-hint={postImage.imageHint} />}
                                            <div>
                                                <h4 className="font-semibold group-hover:text-primary transition-colors">{post.title}</h4>
                                                <p className="text-sm text-muted-foreground">3 min read</p>
                                            </div>
                                        </div>
                                    </Link>
                                )
                            })}
                        </div>
                        <Button variant="outline" className="w-full mt-6">View All Posts</Button>
                    </div>
                </div>
            </div>
        </section>
    );
}
