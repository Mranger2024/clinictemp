
import { Check } from 'lucide-react';
import MultiStepAppointmentForm from '@/components/multi-step-appointment-form';

const AppointmentPage = () => {
  return (
    <div className="bg-primary text-primary-foreground">
      <div className="container mx-auto grid min-h-[calc(100vh-8rem)] grid-cols-1 items-center gap-12 px-4 py-12 md:grid-cols-2">
        <div className="space-y-6">
          <h1 className="font-headline text-4xl font-bold tracking-tight sm:text-5xl">
            Book an Appointment
          </h1>
          <p className="text-lg text-primary-foreground/90">
            Schedule your consultation with our expert doctors. Choose your preferred date and time.
          </p>
          <ul className="grid grid-cols-1 gap-x-6 gap-y-3 text-lg sm:grid-cols-2">
            <li className="flex items-center gap-3">
              <Check className="h-6 w-6 rounded-full bg-white/20 p-1" /> Easy Online Booking
            </li>
            <li className="flex items-center gap-3">
              <Check className="h-6 w-6 rounded-full bg-white/20 p-1" /> Instant Confirmation
            </li>
            <li className="flex items-center gap-3">
              <Check className="h-6 w-6 rounded-full bg-white/20 p-1" /> Reminder Notifications
            </li>
            <li className="flex items-center gap-3">
              <Check className="h-6 w-6 rounded-full bg-white/20 p-1" /> Insurance Support
            </li>
          </ul>
          <p className="font-semibold">For urgent cases, please call us directly at +91 98765 43210</p>
        </div>
        <div className="relative flex items-center justify-center">
          <MultiStepAppointmentForm />
        </div>
      </div>
    </div>
  );
};

export default AppointmentPage;

    