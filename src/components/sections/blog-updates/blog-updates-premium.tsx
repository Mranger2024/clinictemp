'use client';

import { featuredPostImage, recentPosts } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { ArrowRight, Calendar, Clock, TrendingUp } from 'lucide-react';
import Link from 'next/link';

export function BlogUpdatesPremium() {
    return (
        <section className="py-28 bg-card relative overflow-hidden">
            <div className="absolute inset-0 opacity-[0.02]">
                <div className="absolute inset-0" style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg width='60' height='60' viewBox='0 0 60 60' xmlns='http://www.w3.org/2000/svg'%3E%3Cg fill='none' fill-rule='evenodd'%3E%3Cg fill='%23000000' fill-opacity='1'%3E%3Cpath d='M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z'/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")`,
                }}></div>
            </div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="flex items-end justify-between mb-16">
                    <div>
                        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 text-primary text-sm font-bold mb-4 uppercase tracking-wider">
                            <TrendingUp className="h-4 w-4" />
                            Health Blog
                        </div>
                        <h2 className="text-4xl md:text-5xl font-bold text-foreground">Latest Insights</h2>
                    </div>
                    <Link href="#" className="hidden md:flex items-center gap-2 text-primary font-semibold hover:gap-3 transition-all cursor-pointer">
                        View All Articles <ArrowRight className="h-5 w-5" />
                    </Link>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                    {/* Featured Post */}
                    <Link href="#" className="group relative lg:row-span-2 cursor-pointer">
                        <div className="absolute -inset-1 bg-gradient-to-r from-primary/20 to-secondary/20 rounded-2xl opacity-0 group-hover:opacity-100 blur transition-opacity duration-500"></div>

                        <div className="relative bg-background border-2 border-border group-hover:border-primary/50 rounded-2xl overflow-hidden transition-all duration-300 h-full">
                            <div className="relative h-80 overflow-hidden bg-muted">
                                {featuredPostImage && (
                                    // eslint-disable-next-line @next/next/no-img-element
                                    <img
                                        src={featuredPostImage.imageUrl}
                                        alt="Featured"
                                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                                    />
                                )}
                                <div className="absolute top-4 left-4 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold uppercase">
                                    Featured
                                </div>
                            </div>

                            <div className="p-8">
                                <div className="flex items-center gap-4 text-sm text-muted-foreground mb-4">
                                    <span className="flex items-center gap-1">
                                        <Calendar className="h-4 w-4" /> Oct 24, 2024
                                    </span>
                                    <span className="flex items-center gap-1">
                                        <Clock className="h-4 w-4" /> 5 min read
                                    </span>
                                </div>

                                <h3 className="text-3xl font-bold text-foreground mb-4 group-hover:text-primary transition-colors">
                                    New Laser Treatment for Fistula: Complete Guide
                                </h3>

                                <p className="text-muted-foreground text-lg leading-relaxed mb-6">
                                    Discover our latest painless procedure that promises quicker recovery and better results.
                                </p>

                                <div className="flex items-center gap-2 text-primary font-semibold">
                                    Read Article <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </Link>

                    {/* Recent Posts */}
                    {recentPosts.slice(0, 2).map((post) => {
                        const img = PlaceHolderImages.find(i => i.id === post.imageId);
                        return (
                            <Link href="#" key={post.id} className="group cursor-pointer">
                                <div className="bg-background border-2 border-border group-hover:border-primary/50 rounded-2xl overflow-hidden transition-all duration-300 flex gap-6 p-6 h-full">
                                    <div className="w-32 h-32 bg-muted rounded-xl overflow-hidden shrink-0">
                                        {img && (
                                            // eslint-disable-next-line @next/next/no-img-element
                                            <img src={img.imageUrl} alt={post.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                                        )}
                                    </div>

                                    <div className="flex-1">
                                        <div className="flex items-center gap-2 text-xs text-muted-foreground mb-2">
                                            <Calendar className="h-3 w-3" /> Oct 24, 2024
                                        </div>
                                        <h4 className="text-xl font-bold text-foreground mb-2 group-hover:text-primary transition-colors line-clamp-2">
                                            {post.title}
                                        </h4>
                                        <div className="flex items-center gap-2 text-sm text-primary font-semibold">
                                            Read More <ArrowRight className="h-3 w-3" />
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
