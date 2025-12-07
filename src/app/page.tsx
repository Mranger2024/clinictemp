
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Check, Star } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { services, doctors, testimonials } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from '@/components/ui/carousel';
import MultiStepAppointmentForm from '@/components/multi-step-appointment-form';
import { Badge } from '@/components/ui/badge';
import GoogleIcon from '@/components/google-icon';

const StatCard = ({ value, label }: { value: string, label: string }) => (
  <Card className="bg-card p-6 shadow-lg border-0">
    <div className="flex items-center justify-center gap-4">
      <div className="text-4xl font-bold text-primary">{value}</div>
      <div className="text-sm text-muted-foreground font-medium">{label}</div>
    </div>
  </Card>
);

export default function Home() {
  const heroImage = PlaceHolderImages.find((img) => img.id === 'doctor-2');
  const featuredPostImage = PlaceHolderImages.find((img) => img.id === 'featured-post-1');

  const stats = [
    { value: '100%', label: 'Patient Satisfaction' },
    { value: '15K+', label: 'Happy Patients' },
    { value: '10+', label: 'Expert Doctors' },
    { value: '15+', label: 'Years Experience' },
  ]

  const recentPosts = [
    {
      id: 'post-1',
      title: 'Understanding Anal Fissures',
      imageId: 'speciality-2'
    },
    {
      id: 'post-2',
      title: 'The Benefits of Laser Circumcision',
      imageId: 'speciality-4'
    },
    {
      id: 'post-3',
      title: 'Everything You Need to Know About Hernias',
      imageId: 'speciality-1'
    }
  ]

  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="bg-secondary py-4 md:py-8">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-4">
          <div className="space-y-6">
            <h1 className="font-headline text-4xl font-bold tracking-tight text-foreground sm:text-5xl">
              One Stop Destination for Piles, Anal fissure & Fistula Treatment
            </h1>
            <ul className="space-y-3 text-lg">
              <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary bg-primary/20 rounded-full p-1" /> Minimal Pain</li>
              <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary bg-primary/20 rounded-full p-1" /> All Insurance Accepted</li>
              <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary bg-primary/20 rounded-full p-1" /> No Cost EMI</li>
            </ul>
            <Button asChild size="lg" className="font-semibold px-10">
              <Link href="/appointment">Book Appointment</Link>
            </Button>
          </div>
          <div className="relative flex justify-center items-center">
            <div className="w-full max-w-lg">
              <MultiStepAppointmentForm />
            </div>
          </div>
        </div>
      </section>

      {/* Specialities Icons Section */}
      <section id="services" className="py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 text-center">
            {services.slice(0, 6).map((service) => (
              <div key={service.id} className="flex flex-col items-center gap-3">
                <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary/10 text-primary">{service.icon}</div>
                <h3 className="font-semibold text-foreground text-sm">{service.name}</h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet The Doctor Section */}
      <section id="doctors" className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Meet The Doctors</h2>
            <p className="mt-2 text-lg text-muted-foreground">Our team of experienced and compassionate doctors.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.slice(0, 3).map((doctor) => {
              const doctorImage = PlaceHolderImages.find((img) => img.id === doctor.imageId);
              return (
                <Card key={doctor.id} className="group flex flex-col overflow-hidden text-center transform-gpu transition-all duration-300 hover:shadow-xl hover:-translate-y-2">
                  <CardContent className="p-6 flex-1 flex flex-col items-center">
                    {doctorImage && (
                      <Avatar className="h-32 w-32 mx-auto border-4 border-background shadow-lg transition-transform duration-300 group-hover:scale-105">
                        <AvatarImage src={doctorImage.imageUrl} alt={doctor.name} data-ai-hint={doctorImage.imageHint} />
                        <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                      </Avatar>
                    )}
                    <h3 className="font-headline text-xl font-semibold mt-4">{doctor.name}</h3>
                    <p className="text-primary font-medium">{doctor.specialty}</p>
                    <p className="mt-2 text-sm text-muted-foreground">{doctor.bio}</p>
                    <div className="mt-4 flex flex-wrap justify-center gap-2">
                      {doctor.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="w-full">
                      <Link href="/appointment">Book Appointment</Link>
                    </Button>
                  </CardFooter>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 md:py-20 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map(stat => <StatCard key={stat.label} {...stat} />)}
          </div>
        </div>
      </section>

      {/* Our Specialities Section */}
      <section id="specialities" className="py-16 md:py-20 bg-primary">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl text-primary-foreground">Our Specialities</h2>
            <p className="mt-2 text-lg text-primary-foreground/80 max-w-2xl mx-auto">We offer a wide range of specialized services to meet the diverse health needs of our patients.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {services.slice(6).map((service) => (
              <Card key={service.id} className="bg-primary-foreground/10 border-primary-foreground/20 text-primary-foreground text-center">
                <CardHeader>
                  <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-primary-foreground/20 text-primary-foreground">
                    {service.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-headline text-xl font-semibold">{service.name}</h3>
                  <p className="mt-2 text-sm text-primary-foreground/80">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section id="testimonials" className="py-16 md:py-20 bg-secondary">
        <div className="container mx-auto px-4">
          <div className="mb-12 text-center">
            <h2 className="font-headline text-3xl font-bold tracking-tight sm:text-4xl">Patients love Colon Clinics</h2>
            <p className="mt-2 text-muted-foreground">
              See what our patients are saying on Google.
            </p>
          </div>
          <Carousel opts={{ loop: true }} className="max-w-6xl mx-auto">
            <CarouselContent>
              {testimonials.map((testimonial) => {
                const patientImage = PlaceHolderImages.find((img) => img.id === testimonial.imageId);
                return (
                  <CarouselItem key={testimonial.id} className="md:basis-1/2 lg:basis-1/3">
                    <Card className="h-full">
                      <CardContent className="p-6 flex flex-col items-start gap-4">
                        <div className="flex items-start justify-between w-full">
                          <div className="flex items-center gap-4">
                            {patientImage && (
                              <Avatar className="h-12 w-12">
                                <AvatarImage src={patientImage.imageUrl} alt={testimonial.name} data-ai-hint="person avatar" />
                                <AvatarFallback>{testimonial.name.charAt(0)}</AvatarFallback>
                              </Avatar>
                            )}
                            <div>
                              <p className="font-headline font-semibold">{testimonial.name}</p>
                              <p className="text-xs text-muted-foreground">{testimonial.time}</p>
                            </div>
                          </div>
                          <GoogleIcon className="h-6 w-6" />
                        </div>
                        <div className="flex items-center gap-1">
                          {[...Array(testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-yellow-400 text-yellow-400" />)}
                          {[...Array(5 - testimonial.rating)].map((_, i) => <Star key={i} className="h-5 w-5 fill-muted text-muted-foreground" />)}
                        </div>
                        <blockquote className="text-sm text-muted-foreground leading-relaxed">"{testimonial.quote}"</blockquote>
                      </CardContent>
                    </Card>
                  </CarouselItem>
                );
              })}
            </CarouselContent>
            <CarouselPrevious className="left-[-50px]" />
            <CarouselNext className="right-[-50px]" />
          </Carousel>
        </div>
      </section>

      {/* Latest Updates Section */}
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

      {/* CTA Section */}
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
    </div>
  );
}

