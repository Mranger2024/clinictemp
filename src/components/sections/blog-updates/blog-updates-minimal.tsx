'use client';

import { recentPosts } from '@/lib/placeholder-data';
import { ArrowRight, Calendar } from 'lucide-react';
import Link from 'next/link';

export function BlogUpdatesMinimal() {
    return (
        <section className="py-20 bg-background">
            <div className="container mx-auto px-4 max-w-4xl">
                <div className="flex items-baseline justify-between mb-12 border-b border-border pb-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-foreground">Latest Updates</h2>
                    <Link href="#" className="hidden sm:block text-sm font-medium text-muted-foreground hover:text-primary hover:underline cursor-pointer">
                        View Archive
                    </Link>
                </div>

                <div className="space-y-8">
                    {recentPosts.map((post) => (
                        <article key={post.id} className="group cursor-pointer">
                            <Link href="#" className="flex flex-col md:flex-row gap-4 md:items-baseline justify-between md:gap-8">
                                <div className="md:w-32 shrink-0 text-sm text-muted-foreground font-mono">
                                    Oct 24, 2024
                                </div>
                                <div className="flex-1">
                                    <h3 className="text-xl md:text-2xl font-bold text-foreground group-hover:text-primary transition-colors mb-2">
                                        {post.title}
                                    </h3>
                                    <p className="text-muted-foreground line-clamp-2 md:line-clamp-1">
                                        Expert insights into modern treatments and patient care
                                    </p>
                                </div>
                                <div className="md:w-auto shrink-0 self-start md:self-center opacity-0 group-hover:opacity-100 -translate-x-2 group-hover:translate-x-0 transition-all">
                                    <ArrowRight className="h-5 w-5 text-primary" />
                                </div>
                            </Link>
                        </article>
                    ))}
                </div>
            </div>
        </section>
    );
}
