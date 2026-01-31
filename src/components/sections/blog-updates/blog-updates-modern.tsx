'use client';

import { recentPosts } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Calendar, Clock } from 'lucide-react';
import Link from 'next/link';

export function BlogUpdatesModern() {
    return (
        <section className="py-20 md:py-24 bg-background">
            <div className="container mx-auto px-4">
                <div className="flex items-end justify-between mb-12">
                    <div>
                        <div className="inline-block px-3 py-1 rounded-full bg-primary/10 text-primary text-sm font-bold mb-4 uppercase tracking-wider">
                            Health Blog
                        </div>
                        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground">Latest Insights</h2>
                    </div>
                    <Link href="#" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all cursor-pointer">
                        View All <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {recentPosts.map((post) => {
                        const img = PlaceHolderImages.find(i => i.id === post.imageId);
                        return (
                            <Link href="#" key={post.id} className="group cursor-pointer">
                                <div className="bg-card border-2 border-border group-hover:border-primary rounded-xl overflow-hidden transition-all duration-300 hover:shadow-lg">
                                    <div className="h-48 bg-muted overflow-hidden">
                                        {img && (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img
                                                src={img.imageUrl}
                                                alt={post.title}
                                                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                            />
                                        )}
                                    </div>

                                    <div className="p-6">
                                        <div className="flex items-center gap-4 text-xs text-muted-foreground mb-3">
                                            <span className="flex items-center gap-1">
                                                <Calendar className="h-3 w-3" /> Oct 24, 2024
                                            </span>
                                            <span className="flex items-center gap-1">
                                                <Clock className="h-3 w-3" /> 5 min read
                                            </span>
                                        </div>

                                        <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h3>

                                        <div className="flex items-center gap-2 text-sm font-semibold text-primary">
                                            Read Article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                        </div>
                                    </div>
                                </div>
                            </Link>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
