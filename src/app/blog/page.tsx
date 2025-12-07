
'use client';

import { useState, useMemo, Fragment } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Search, Calendar, Clock, Megaphone } from 'lucide-react';
import { motion } from 'framer-motion';

import PageHeader from '@/components/page-header';
import { Card, CardContent, CardFooter, CardHeader } from '@/components/ui/card';
import { posts as allPosts } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Input } from '@/components/ui/input';
import { Badge } from '@/components/ui/badge';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Button } from '@/components/ui/button';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';

const postCategories = ['All', 'Wellness', 'Heart Health', 'Skincare', 'Orthopedics', 'Proctology', 'Surgical'];

const AdPlaceholder = ({ className }: { className?: string }) => (
    <div className={`flex items-center justify-center w-full h-full bg-muted/50 rounded-lg border border-dashed ${className}`}>
        <div className="text-center text-muted-foreground">
            <Megaphone className="mx-auto h-8 w-8" />
            <p className="mt-2 text-sm font-semibold">Advertisement</p>
        </div>
    </div>
);


const BlogPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');

  const filteredPosts = useMemo(() => {
    return allPosts
      .filter((post) =>
        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.excerpt.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((post) =>
        activeCategory === 'All' ? true : post.category === activeCategory
      );
  }, [searchTerm, activeCategory]);

  return (
    <div className="bg-background">
      <section className="py-20 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <PageHeader
            title="Our Health & Wellness Blog"
            description="Stay informed with our latest articles, tips, and insights from our team of medical experts."
          />
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="mb-12 flex flex-col gap-6 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search articles..."
                className="pl-12 h-12 text-lg"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
          </div>
          
          <div className="mb-12">
             <Tabs value={activeCategory} onValueChange={setActiveCategory}>
                <TabsList className="grid w-full grid-cols-2 sm:grid-cols-4 md:grid-cols-7">
                  {postCategories.map((category) => (
                    <TabsTrigger key={category} value={category}>
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
          </div>
          
           <div className="mb-12">
                <AdPlaceholder className="min-h-[90px]" />
            </div>

          <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
            {filteredPosts.map((post, index) => {
              const postImage = PlaceHolderImages.find((img) => img.id === post.imageId);
              const authorImage = PlaceHolderImages.find((img) => img.id === post.authorImageId);
              return (
                <Fragment key={post.id}>
                    <motion.div
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3, delay: index * 0.05 }}
                      className="flex"
                    >
                      <Card className="flex flex-col overflow-hidden group w-full">
                        {postImage && (
                          <div className="relative h-64 w-full overflow-hidden">
                            <Image
                              src={postImage.imageUrl}
                              alt={post.title}
                              fill
                              className="object-cover transition-transform duration-300 group-hover:scale-105"
                              data-ai-hint={postImage.imageHint}
                            />
                             <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
                             <Badge variant="secondary" className="absolute top-4 right-4">{post.category}</Badge>
                          </div>
                        )}
                        <CardHeader className="flex-1">
                          <h3 className="font-headline text-xl font-semibold group-hover:text-primary transition-colors">
                            <Link href="#">{post.title}</Link>
                          </h3>
                        </CardHeader>
                        <CardContent className="flex-1">
                          <p className="text-muted-foreground line-clamp-3">{post.excerpt}</p>
                        </CardContent>
                        <CardFooter className="flex justify-between items-center text-sm text-muted-foreground border-t pt-4 mt-auto">
                            <div className="flex items-center gap-3">
                                {authorImage && (
                                    <Avatar className="h-8 w-8">
                                        <AvatarImage src={authorImage.imageUrl} alt={post.author} data-ai-hint={authorImage.imageHint} />
                                        <AvatarFallback>{post.author.charAt(0)}</AvatarFallback>
                                    </Avatar>
                                )}
                                <div className="flex flex-col">
                                    <span className="font-medium text-foreground">{post.author}</span>
                                     <span className="text-xs">{post.date}</span>
                                </div>
                            </div>
                            <div className="flex items-center gap-1">
                                <Clock className="h-4 w-4" />
                                <span>{post.readTime} min read</span>
                            </div>
                        </CardFooter>
                      </Card>
                    </motion.div>
                     {(index + 1) % 6 === 0 && (
                        <div className="lg:col-span-1 md:col-span-2">
                           <AdPlaceholder className="h-full min-h-[400px]" />
                        </div>
                    )}
                </Fragment>
              );
            })}
          </div>

          {filteredPosts.length === 0 && (
            <div className="col-span-full text-center py-20">
              <Search className="mx-auto h-12 w-12 text-muted-foreground/50" />
              <h3 className="mt-4 text-xl font-semibold">No Articles Found</h3>
              <p className="mt-2 text-muted-foreground">Try adjusting your search or category filters.</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default BlogPage;
