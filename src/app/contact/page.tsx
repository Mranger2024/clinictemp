'use client';

import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';
import * as z from 'zod';
import { Mail, Phone, MapPin, MessageCircle } from 'lucide-react';

import PageHeader from '@/components/page-header';
import { Button } from '@/components/ui/button';
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from '@/components/ui/form';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Card, CardContent } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const formSchema = z.object({
  name: z.string().min(2, { message: 'Name must be at least 2 characters.' }),
  email: z.string().email({ message: 'Please enter a valid email address.' }),
  subject: z.string().min(5, { message: 'Subject must be at least 5 characters.' }),
  message: z.string().min(10, { message: 'Message must be at least 10 characters.' }),
});

const ContactPage = () => {
  const { toast } = useToast();
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { name: '', email: '', subject: '', message: '' },
  });

  function onSubmit(values: z.infer<typeof formSchema>) {
    console.log(values);
    toast({
      title: 'Message Sent!',
      description: "Thanks for reaching out. We'll get back to you shortly.",
    });
    form.reset();
  }

  const contactInfo = [
    { icon: <Phone className="h-6 w-6 text-primary" />, title: 'Call Us', content: '(555) 123-4567' },
    { icon: <Mail className="h-6 w-6 text-primary" />, title: 'Email Us', content: 'contact@colonclinics.com' },
    { icon: <MapPin className="h-6 w-6 text-primary" />, title: 'Visit Us', content: '123 Health St, Medtown, USA' },
  ];

  return (
    <div className="bg-background">
      <section className="py-20 md:py-24 bg-secondary">
        <div className="container mx-auto px-4">
          <PageHeader
            title="Get in Touch"
            description="We're here to help. Whether you have a question about our services or need assistance, feel free to reach out."
          />
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 md:grid-cols-2">
            <div>
              <h2 className="font-headline text-2xl font-bold mb-6">Contact Form</h2>
              <Card>
                <CardContent className="p-6">
                  <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                      <FormField
                        control={form.control}
                        name="name"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Full Name</FormLabel>
                            <FormControl><Input placeholder="John Doe" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="email"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Email Address</FormLabel>
                            <FormControl><Input type="email" placeholder="you@example.com" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="subject"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Subject</FormLabel>
                            <FormControl><Input placeholder="Question about services" {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <FormField
                        control={form.control}
                        name="message"
                        render={({ field }) => (
                          <FormItem>
                            <FormLabel>Message</FormLabel>
                            <FormControl><Textarea placeholder="Your message..." rows={5} {...field} /></FormControl>
                            <FormMessage />
                          </FormItem>
                        )}
                      />
                      <Button type="submit" className="w-full" disabled={form.formState.isSubmitting}>
                        {form.formState.isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </form>
                  </Form>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-8">
               <h2 className="font-headline text-2xl font-bold">Our Information</h2>
               <div className="space-y-6">
                {contactInfo.map(info => (
                    <div key={info.title} className="flex items-start gap-4">
                        <div className="flex-shrink-0">{info.icon}</div>
                        <div>
                            <h3 className="font-headline font-semibold text-lg">{info.title}</h3>
                            <p className="text-muted-foreground">{info.content}</p>
                        </div>
                    </div>
                ))}
                </div>
                 <Button asChild size="lg" className="w-full">
                    <a href="https://wa.me/1234567890" target="_blank" rel="noopener noreferrer">
                        <MessageCircle className="mr-2 h-5 w-5" /> Chat on WhatsApp
                    </a>
                </Button>
                <div className="h-80 w-full rounded-lg bg-muted flex items-center justify-center">
                    <p className="text-muted-foreground">Google Map Placeholder</p>
                </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
