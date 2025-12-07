'use client';
import { useState, useMemo } from 'react';
import Link from 'next/link';
import { Search, ListFilter, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

import PageHeader from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { services as allServices } from '@/lib/placeholder-data';
import { Input } from '@/components/ui/input';
import { Tabs, TabsList, TabsTrigger } from '@/components/ui/tabs';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Button } from '@/components/ui/button';

const serviceCategories = ['All', 'General', 'Specialty', 'Surgical'];

const ServicesPage = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('name-asc');

  const filteredAndSortedServices = useMemo(() => {
    let services = allServices
      .filter((service) =>
        service.name.toLowerCase().includes(searchTerm.toLowerCase())
      )
      .filter((service) =>
        activeCategory === 'All' ? true : service.category === activeCategory
      );

    switch (sortOrder) {
      case 'name-asc':
        services.sort((a, b) => a.name.localeCompare(b.name));
        break;
      case 'name-desc':
        services.sort((a, b) => b.name.localeCompare(a.name));
        break;
    }

    return services;
  }, [searchTerm, activeCategory, sortOrder]);

  return (
    <div className="bg-background">
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <PageHeader
            title="Our Medical Services"
            description="We offer a wide range of specialized services to meet the diverse health needs of our patients. Our team is dedicated to providing expert care with a personal touch."
          />
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="mb-8 flex flex-col gap-4 md:flex-row md:items-center">
            <div className="relative flex-1">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search for a service..."
                className="pl-10"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
            </div>
            <div className="flex items-center gap-2">
              <Tabs value={activeCategory} onValueChange={setActiveCategory} className="hidden md:block">
                <TabsList>
                  {serviceCategories.map((category) => (
                    <TabsTrigger key={category} value={category}>
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
               <DropdownMenu>
                <DropdownMenuTrigger asChild>
                  <Button variant="outline">
                    <ListFilter className="mr-2 h-4 w-4" />
                    Sort
                  </Button>
                </DropdownMenuTrigger>
                <DropdownMenuContent align="end">
                  <DropdownMenuRadioGroup value={sortOrder} onValueChange={setSortOrder}>
                    <DropdownMenuRadioItem value="name-asc">Name (A-Z)</DropdownMenuRadioItem>
                    <DropdownMenuRadioItem value="name-desc">Name (Z-A)</DropdownMenuRadioItem>
                  </DropdownMenuRadioGroup>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          </div>
          <div className="block md:hidden mb-4">
            <Tabs value={activeCategory} onValueChange={setActiveCategory}>
                <TabsList className="grid w-full grid-cols-4">
                  {serviceCategories.map((category) => (
                    <TabsTrigger key={category} value={category}>
                      {category}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </Tabs>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {filteredAndSortedServices.map((service) => (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
              >
                <Link href={`/services/${service.id}`} className="block h-full">
                  <Card className="h-full transition-all hover:shadow-lg hover:border-primary/50">
                    <CardHeader>
                      <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10 text-primary">
                        {service.icon}
                      </div>
                      <CardTitle className="mt-4">{service.name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground line-clamp-3">{service.description}</p>
                      <div className="mt-4 flex items-center text-sm text-primary font-medium">
                        Learn more <ArrowRight className="ml-1 h-4 w-4" />
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              </motion.div>
            ))}
          </div>
           {filteredAndSortedServices.length === 0 && (
            <div className="text-center py-12">
                <p className="text-lg text-muted-foreground">No services found. Try adjusting your search or filters.</p>
            </div>
           )}
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;
