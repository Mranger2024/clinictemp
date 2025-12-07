
'use client';

import { useState } from 'react';
import { useForm, FormProvider, useFormContext } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import * as z from 'zod';
import {
  User,
  Mail,
  Phone,
  Cake,
  Stethoscope,
  Calendar,
  Clock,
  ArrowRight,
  Check,
  MessageSquare,
  Users,
  Video,
} from 'lucide-react';
import { VenetianMaskIcon } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { format } from 'date-fns';

import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '@/components/ui/form';
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from '@/components/ui/card';
import { cn } from '@/lib/utils';
import { services, doctors } from '@/lib/placeholder-data';
import { Popover, PopoverContent, PopoverTrigger } from './ui/popover';
import { Calendar as CalendarComponent } from './ui/calendar';
import { useToast } from '@/hooks/use-toast';
import { Textarea } from './ui/textarea';
import { RadioGroup, RadioGroupItem } from './ui/radio-group';


const steps = [
  { id: '01', name: 'Personal Info' },
  { id: '02', name: 'Select Service' },
  { id: '03', name: 'Date & Time' },
  { id: '04', name: 'Confirmation' },
];

const personalInfoSchema = z.object({
  firstName: z.string().min(1, 'First name is required'),
  lastName: z.string().min(1, 'Last name is required'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Invalid phone number'),
  age: z.string().min(1, 'Age is required'),
  gender: z.string().min(1, 'Please select a gender'),
});

const serviceSchema = z.object({
  service: z.string().min(1, 'Please select a service'),
  doctor: z.string().optional(),
  reasonForVisit: z.string().optional(),
});

const dateTimeSchema = z.object({
  date: z.date({ required_error: 'Please select a date.' }),
  time: z.string().min(1, 'Please select a time slot'),
  appointmentType: z.enum(['in-person', 'video'], { required_error: 'Please select an appointment type.'}),
});

const formSchema = personalInfoSchema.merge(serviceSchema).merge(dateTimeSchema);

type FormData = z.infer<typeof formSchema>;

const StepIndicator = ({ currentStep }: { currentStep: number }) => {
  return (
    <nav aria-label="Progress">
      <ol role="list" className="flex items-center justify-center">
        {steps.map((step, stepIdx) => (
          <li key={step.name} className={cn('relative', { 'pr-16': stepIdx !== steps.length - 1 })}>
            <>
              <div className="absolute inset-0 top-1/2 h-0.5 w-full -translate-y-1/2 bg-gray-200" aria-hidden="true">
                {stepIdx < currentStep && <div className="absolute inset-0 h-full w-full bg-primary"></div>}
              </div>
              <div className="relative flex h-8 w-8 items-center justify-center rounded-full bg-background">
                {stepIdx < currentStep ? (
                  <span className="flex h-full w-full items-center justify-center rounded-full bg-primary">
                    <Check className="h-5 w-5 text-white" aria-hidden="true" />
                  </span>
                ) : (
                  <span className={cn("flex h-full w-full items-center justify-center rounded-full border-2",
                    stepIdx === currentStep ? "border-primary text-primary" : "border-gray-300 text-gray-500"
                  )}>
                    {parseInt(step.id)}
                  </span>
                )}
              </div>
              <p className={cn("text-xs text-center mt-1 w-full absolute left-1/2 -translate-x-1/2 truncate font-extrabold", {
                  'text-primary': stepIdx === currentStep,
                  'text-muted-foreground': stepIdx !== currentStep
              })}>{step.name}</p>
            </>
          </li>
        ))}
      </ol>
    </nav>
  );
};


const PersonalInfoStep = () => (
  <>
    <CardHeader>
        <CardTitle className="text-xl font-extrabold">Personal Information</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
        <FormField name="firstName" render={({ field }) => (
            <FormItem>
            <FormLabel className="flex items-center gap-2 text-xs text-muted-foreground font-extrabold"><User className="h-4 w-4 text-primary" /> First Name *</FormLabel>
            <FormControl><Input placeholder="Enter your first name" {...field} className="text-primary font-bold" /></FormControl>
            <FormMessage />
            </FormItem>
        )} />
        <FormField name="lastName" render={({ field }) => (
            <FormItem>
            <FormLabel className="flex items-center gap-2 text-xs text-muted-foreground font-extrabold"><User className="h-4 w-4 text-primary" /> Last Name *</FormLabel>
            <FormControl><Input placeholder="Enter your last name" {...field} className="text-primary font-bold" /></FormControl>
            <FormMessage />
            </FormItem>
        )} />
        </div>
        <FormField name="email" render={({ field }) => (
        <FormItem>
            <FormLabel className="flex items-center gap-2 text-xs text-muted-foreground font-extrabold"><Mail className="h-4 w-4 text-primary" /> Email Address *</FormLabel>
            <FormControl><Input type="email" placeholder="your.email@example.com" {...field} className="text-primary font-bold" /></FormControl>
            <FormMessage />
        </FormItem>
        )} />
        <FormField name="phone" render={({ field }) => (
        <FormItem>
            <FormLabel className="flex items-center gap-2 text-xs text-muted-foreground font-extrabold"><Phone className="h-4 w-4 text-primary" /> Phone Number *</FormLabel>
            <FormControl><Input placeholder="+1 (555) 123-4567" {...field} className="text-primary font-bold" /></FormControl>
            <FormMessage />
        </FormItem>
        )} />
        <div className="grid grid-cols-2 gap-4">
        <FormField name="age" render={({ field }) => (
            <FormItem>
            <FormLabel className="flex items-center gap-2 text-xs text-muted-foreground font-extrabold"><Cake className="h-4 w-4 text-primary" /> Age *</FormLabel>
            <FormControl><Input type="number" placeholder="Enter your age" {...field} className="text-primary font-bold" /></FormControl>
            <FormMessage />
            </FormItem>
        )} />
        <FormField name="gender" render={({ field }) => (
            <FormItem>
            <FormLabel className="flex items-center gap-2 text-xs text-muted-foreground font-extrabold"><VenetianMaskIcon className="h-4 w-4 text-primary" /> Gender *</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
                <FormControl>
                <SelectTrigger className="text-primary font-bold"><SelectValue placeholder="Select Gender" /></SelectTrigger>
                </FormControl>
                <SelectContent>
                <SelectItem value="male">Male</SelectItem>
                <SelectItem value="female">Female</SelectItem>
                <SelectItem value="other">Other</SelectItem>
                </SelectContent>
            </Select>
            <FormMessage />
            </FormItem>
        )} />
        </div>
    </CardContent>
  </>
);

const ServiceStep = () => (
  <>
    <CardHeader>
        <CardTitle className="font-extrabold">Select Service</CardTitle>
    </CardHeader>
    <CardContent className="space-y-4">
        <FormField name="service" render={({ field }) => (
        <FormItem>
            <FormLabel className="flex items-center gap-2 text-xs text-muted-foreground font-extrabold"><Stethoscope className="h-4 w-4 text-primary" /> Service *</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
                <SelectTrigger className="text-primary font-bold"><SelectValue placeholder="Select a service" /></SelectTrigger>
            </FormControl>
            <SelectContent>
                {services.map(s => <SelectItem key={s.id} value={s.name}>{s.name}</SelectItem>)}
            </SelectContent>
            </Select>
            <FormMessage />
        </FormItem>
        )} />
        <FormField name="doctor" render={({ field }) => (
        <FormItem>
            <FormLabel className="flex items-center gap-2 text-xs text-muted-foreground font-extrabold"><User className="h-4 w-4 text-primary" /> Preferred Doctor</FormLabel>
            <Select onValueChange={field.onChange} defaultValue={field.value}>
            <FormControl>
                <SelectTrigger className="text-primary font-bold"><SelectValue placeholder="Any doctor" /></SelectTrigger>
            </FormControl>
            <SelectContent>
                <SelectItem value="any">Any Doctor</SelectItem>
                {doctors.map(d => <SelectItem key={d.id} value={d.name}>{d.name}</SelectItem>)}
            </SelectContent>
            </Select>
            <FormMessage />
        </FormItem>
        )} />
        <FormField name="reasonForVisit" render={({ field }) => (
        <FormItem>
            <FormLabel className="flex items-center gap-2 text-xs text-muted-foreground font-extrabold"><MessageSquare className="h-4 w-4 text-primary" /> Reason for Visit</FormLabel>
            <FormControl><Textarea placeholder="Please describe the reason for your visit..." {...field} className="text-primary font-bold" /></FormControl>
            <FormMessage />
        </FormItem>
        )} />
    </CardContent>
  </>
);

const availableTimes = ['09:00 AM', '09:30 AM', '10:00 AM', '10:30 AM', '11:00 AM', '11:30 AM', '12:00 PM', '12:30 PM', '01:00 PM', '01:30 PM', '02:00 PM', '02:30 PM', '03:00 PM', '03:30 PM', '04:00 PM', '04:30 PM'];

const DateTimeStep = () => {
    const { control, watch } = useFormContext<FormData>();
    const selectedTime = watch('time');
    return (
        <>
        <CardHeader>
            <CardTitle className="font-extrabold">Select Date &amp; Time</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
            <FormField
                control={control}
                name="date"
                render={({ field }) => (
                <FormItem className="flex flex-col">
                    <FormLabel className="flex items-center gap-2 text-xs text-muted-foreground font-extrabold"><Calendar className="h-4 w-4 text-primary" /> Preferred Date *</FormLabel>
                    <Popover>
                    <PopoverTrigger asChild>
                        <FormControl>
                        <Button
                            variant="outline"
                            className={cn('w-full justify-start text-left font-bold', !field.value && 'text-muted-foreground')}
                        >
                            <Calendar className="mr-2 h-4 w-4" />
                            {field.value ? format(field.value, 'dd-MM-yyyy') : <span>dd-mm-yyyy</span>}
                        </Button>
                        </FormControl>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                        <CalendarComponent
                        mode="single"
                        selected={field.value}
                        onSelect={field.onChange}
                        disabled={(date) => date < new Date(new Date().setDate(new Date().getDate() - 1))}
                        initialFocus
                        />
                    </PopoverContent>
                    </Popover>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
                control={control}
                name="time"
                render={({ field }) => (
                <FormItem>
                    <FormLabel className="flex items-center gap-2 text-xs text-muted-foreground font-extrabold"><Clock className="h-4 w-4 text-primary" /> Preferred Time Slot *</FormLabel>
                     <RadioGroup
                        onValueChange={field.onChange}
                        defaultValue={field.value}
                        className="grid grid-cols-3 gap-2"
                      >
                        {availableTimes.map(time => (
                          <FormItem key={time} className="flex-1">
                            <FormControl>
                              <RadioGroupItem value={time} className="sr-only" />
                            </FormControl>
                            <FormLabel
                              className={cn(
                                "flex h-10 w-full cursor-pointer items-center justify-center rounded-md border border-input bg-background text-sm font-bold hover:bg-accent hover:text-accent-foreground",
                                selectedTime === time && "bg-primary text-primary-foreground hover:bg-primary/90"
                              )}
                            >
                              {time}
                            </FormLabel>
                          </FormItem>
                        ))}
                      </RadioGroup>
                    <FormMessage />
                </FormItem>
                )}
            />
            <FormField
              control={control}
              name="appointmentType"
              render={({ field }) => (
                <FormItem className="space-y-3">
                  <FormLabel className="flex items-center gap-2 text-xs text-muted-foreground font-extrabold"><Stethoscope className="h-4 w-4 text-primary" /> Appointment Type *</FormLabel>
                  <FormControl>
                    <RadioGroup
                      onValueChange={field.onChange}
                      defaultValue={field.value}
                      className="grid grid-cols-2 gap-4"
                    >
                      <FormItem>
                        <FormControl>
                          <RadioGroupItem value="in-person" className="sr-only" />
                        </FormControl>
                        <FormLabel className={cn("flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer font-bold", field.value === 'in-person' && 'border-primary')}>
                          <Users className="mb-3 h-6 w-6" />
                          In-Person Visit
                          <span className="text-xs text-muted-foreground mt-1 font-normal">Visit our clinic</span>
                        </FormLabel>
                      </FormItem>
                      <FormItem>
                        <FormControl>
                          <RadioGroupItem value="video" className="sr-only" />
                        </FormControl>
                        <FormLabel className={cn("flex flex-col items-center justify-center rounded-md border-2 border-muted bg-popover p-4 hover:bg-accent hover:text-accent-foreground cursor-pointer font-bold", field.value === 'video' && 'border-primary')}>
                          <Video className="mb-3 h-6 w-6" />
                          Video Consultation
                           <span className="text-xs text-muted-foreground mt-1 font-normal">Online meeting</span>
                        </FormLabel>
                      </FormItem>
                    </RadioGroup>
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
        </CardContent>
        </>
  );
}

const ConfirmationStep = ({ data }: { data: Partial<FormData> }) => (
    <>
        <CardContent className="text-center pt-6">
            <div className="flex flex-col items-center">
                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center mb-3">
                    <Check className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-lg font-bold text-foreground">Appointment Requested!</h3>
                <p className="text-sm text-muted-foreground mt-1">We'll send a confirmation to your email shortly.</p>
            </div>
            <div className="mt-4 space-y-1 text-sm border-t pt-3 text-left">
                <p><span className="font-semibold">Service:</span> {data.service}</p>
                <p><span className="font-semibold">Doctor:</span> {data.doctor || 'Any'}</p>
                <p><span className="font-semibold">Date:</span> {data.date ? format(data.date, 'PPP') : ''}</p>
                <p><span className="font-semibold">Time:</span> {data.time}</p>
                 <p><span className="font-semibold">Type:</span> {data.appointmentType === 'in-person' ? 'In-Person Visit' : 'Video Consultation'}</p>
            </div>
        </CardContent>
    </>
  );


export default function MultiStepAppointmentForm() {
  const [currentStep, setCurrentStep] = useState(0);
  const [formData, setFormData] = useState<Partial<FormData>>({});
  const { toast } = useToast();

  const schemas = [personalInfoSchema, serviceSchema, dateTimeSchema];
  const currentSchema = schemas[currentStep];

  const methods = useForm<FormData>({
    resolver: zodResolver(currentSchema),
    defaultValues: formData,
    mode: 'onChange',
  });

  const { handleSubmit, trigger, getValues } = methods;

  const nextStep = async () => {
    const isValid = await trigger();
    if (isValid) {
      setFormData(prev => ({...prev, ...getValues()}));
      setCurrentStep(prev => prev + 1);
    }
  };

  const prevStep = () => {
    setCurrentStep(prev => prev - 1);
  };

  const onSubmit = (data: FormData) => {
    console.log('Form Submitted', data);
    const finalData = {...formData, ...data};
    setFormData(finalData);
    toast({
      title: 'Appointment Requested!',
      description: `We've received your request for ${finalData.service} on ${finalData.date ? format(finalData.date, 'PPP') : ''} at ${finalData.time}. We'll confirm shortly.`,
    });
    setCurrentStep(prev => prev + 1);
  };
  
  const renderStepContent = () => {
    switch (currentStep) {
        case 0: return <PersonalInfoStep />;
        case 1: return <ServiceStep />;
        case 2: return <DateTimeStep />;
        case 3: return <ConfirmationStep data={formData} />;
        default: return null;
    }
  }
  
  const isLastStep = currentStep === steps.length - 2;
  const isConfirmationStep = currentStep === steps.length - 1;


  return (
    <Card className="w-full max-w-xl mx-auto bg-card text-card-foreground rounded-2xl shadow-2xl">
      <CardHeader className="text-center pb-2 pt-4">
        {!isConfirmationStep && (
            <>
            <CardTitle className="font-headline text-2xl font-extrabold text-primary">Schedule Your Visit</CardTitle>
            <CardDescription>Fill in the details below to book your appointment</CardDescription>
            </>
        )}
      </CardHeader>
      <CardContent className="p-2">
        {!isConfirmationStep && <div className="px-4 py-2">
            <StepIndicator currentStep={currentStep} />
        </div>}
        <FormProvider {...methods}>
          <form onSubmit={handleSubmit(onSubmit)}>
            <AnimatePresence mode="wait">
                <motion.div
                    key={currentStep}
                    initial={{ opacity: 0, x: 15 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -15 }}
                    transition={{ duration: 0.2 }}
                >
                    {renderStepContent()}
                </motion.div>
            </AnimatePresence>
            
            <CardFooter className="px-6 pt-2 pb-4">
             {!isConfirmationStep && (
                <div className={cn("flex w-full", currentStep > 0 ? "justify-between" : "justify-end")}>
                {currentStep > 0 && 
                    <Button type="button" variant="outline" onClick={prevStep}>
                        Back
                    </Button>
                }
                {isLastStep ? (
                    <Button type="submit">
                        Confirm Appointment
                    </Button>
                ) : (
                    <Button type="button" onClick={nextStep}>
                    Next Step <ArrowRight className="ml-2 h-4 w-4" />
                    </Button>
                )}
                </div>
              )}
               {isConfirmationStep && (
                 <Button type="button" className="w-full" onClick={() => { setCurrentStep(0); setFormData({}); methods.reset(); }}>
                    Book Another Appointment
                </Button>
               )}
            </CardFooter>
          </form>
        </FormProvider>
      </CardContent>
    </Card>
  );
}

    