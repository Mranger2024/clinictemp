
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import { User, Mail, Phone, MessageSquare, Send } from 'lucide-react';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import {
    Form,
    FormControl,
    FormField,
    FormItem,
    FormLabel,
    FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { useToast } from '@/hooks/use-toast';

const simpleFormSchema = z.object({
    firstName: z.string().min(1, 'First name is required'),
    lastName: z.string().min(1, 'Last name is required'),
    email: z.string().email('Invalid email address'),
    phone: z.string().min(10, 'Invalid phone number'),
    message: z.string().optional(),
});

type SimpleFormData = z.infer<typeof simpleFormSchema>;

export default function SimpleAppointmentForm() {
    const { toast } = useToast();
    const form = useForm<SimpleFormData>({
        resolver: zodResolver(simpleFormSchema),
        defaultValues: {
            firstName: '',
            lastName: '',
            email: '',
            phone: '',
            message: '',
        },
    });

    const onSubmit = (data: SimpleFormData) => {
        console.log('Simple Form Submitted', data);
        toast({
            title: 'Request Sent',
            description: 'We have received your details and will contact you shortly.',
        });
        form.reset();
    };

    return (
        <Card className="w-full max-w-xl mx-auto bg-card text-card-foreground rounded-2xl shadow-2xl">
            <CardHeader className="text-center pb-2 pt-6">
                <CardTitle className="font-headline text-2xl font-extrabold text-primary">Quick Contact</CardTitle>
                <CardDescription>Leave your details and we'll call you back</CardDescription>
            </CardHeader>
            <CardContent className="p-6">
                <Form {...form}>
                    <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
                        <div className="grid grid-cols-2 gap-4">
                            <FormField
                                control={form.control}
                                name="firstName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-2 text-xs text-muted-foreground font-extrabold">
                                            <User className="h-4 w-4 text-primary" /> First Name *
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="First name" {...field} className="text-primary font-bold" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                            <FormField
                                control={form.control}
                                name="lastName"
                                render={({ field }) => (
                                    <FormItem>
                                        <FormLabel className="flex items-center gap-2 text-xs text-muted-foreground font-extrabold">
                                            <User className="h-4 w-4 text-primary" /> Last Name *
                                        </FormLabel>
                                        <FormControl>
                                            <Input placeholder="Last name" {...field} className="text-primary font-bold" />
                                        </FormControl>
                                        <FormMessage />
                                    </FormItem>
                                )}
                            />
                        </div>

                        <FormField
                            control={form.control}
                            name="email"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="flex items-center gap-2 text-xs text-muted-foreground font-extrabold">
                                        <Mail className="h-4 w-4 text-primary" /> Email Address *
                                    </FormLabel>
                                    <FormControl>
                                        <Input type="email" placeholder="your.email@example.com" {...field} className="text-primary font-bold" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="phone"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="flex items-center gap-2 text-xs text-muted-foreground font-extrabold">
                                        <Phone className="h-4 w-4 text-primary" /> Phone Number *
                                    </FormLabel>
                                    <FormControl>
                                        <Input placeholder="+1 (555) 123-4567" {...field} className="text-primary font-bold" />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />

                        <FormField
                            control={form.control}
                            name="message"
                            render={({ field }) => (
                                <FormItem>
                                    <FormLabel className="flex items-center gap-2 text-xs text-muted-foreground font-extrabold">
                                        <MessageSquare className="h-4 w-4 text-primary" /> Message (Optional)
                                    </FormLabel>
                                    <FormControl>
                                        <Textarea placeholder="Any specific requirements?" {...field} className="text-primary font-bold resize-none" rows={3} />
                                    </FormControl>
                                    <FormMessage />
                                </FormItem>
                            )}
                        />
                        {/* Hidden button for form submission on enter */}
                        <button type="submit" className="hidden" />
                    </form>
                </Form>
            </CardContent>
            <CardFooter className="px-6 pt-2 pb-4">
                <Button onClick={form.handleSubmit(onSubmit)} className="w-full font-bold" size="lg">
                    Send Request <Send className="ml-2 h-4 w-4" />
                </Button>
            </CardFooter>
        </Card>
    );
}
