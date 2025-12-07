import { notFound } from 'next/navigation';
import { services } from '@/lib/placeholder-data';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Calendar, Clock, Check } from 'lucide-react';
import Link from 'next/link';
import { ServicePricing } from '@/components/service-pricing';

// Default content for service details
const defaultServiceDetails = {
  whatToExpect: [
    'Initial consultation with our specialist',
    'Comprehensive diagnosis and assessment',
    'Personalized treatment plan',
    'Minimally invasive procedure options',
    'Post-treatment care instructions'
  ],
  procedure: 'Our expert medical team will guide you through a carefully planned procedure using the latest techniques and equipment to ensure optimal results with minimal discomfort.',
  recovery: 'Most patients experience a smooth recovery with minimal downtime. Our team will provide you with detailed aftercare instructions and be available for any follow-up questions.',
  recoveryTime: 'Varies by individual',
  anesthesia: 'Local or general anesthesia as needed',
  faqs: [
    {
      question: 'How should I prepare for the procedure?',
      answer: 'You will receive specific preparation instructions during your consultation based on your individual needs.'
    },
    {
      question: 'What are the potential risks?',
      answer: 'Our specialist will discuss all potential risks and benefits during your consultation.'
    },
    {
      question: 'When can I return to normal activities?',
      answer: 'This depends on the specific procedure and your individual recovery. Your doctor will provide personalized guidance.'
    }
  ]
};

export default async function ServiceDetailPage({ params }: { params: { slug: string } }) {
  const { slug } = await params;
  const service = services.find(s => s.id === slug);

  if (!service) {
    notFound();
  }

  // Merge service details with defaults
  const serviceDetails = {
    ...defaultServiceDetails,
    ...service.details,
    whatToExpect: service.details?.whatToExpect || defaultServiceDetails.whatToExpect,
    faqs: service.details?.faqs?.length ? service.details.faqs : defaultServiceDetails.faqs
  };

  return (
    <div className="container mx-auto px-4 sm:px-6 py-8 md:py-12">
      <Button asChild variant="ghost" className="mb-6">
        <Link href="/services" className="flex items-center gap-2">
          <ArrowLeft className="h-4 w-4" />
          Back to Services
        </Link>
      </Button>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground">{service.name}</h1>
          
          <div className="prose prose-sm sm:prose-base max-w-none">
            <p className="text-muted-foreground">{service.description}</p>
            
            <div className="bg-card border rounded-lg p-6 my-6">
              <h3 className="text-xl font-semibold mb-4 text-foreground">What to Expect</h3>
              <ul className="space-y-3">
                {serviceDetails.whatToExpect.map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <Check className="h-5 w-5 text-primary mt-0.5 flex-shrink-0" />
                    <span className="text-foreground/90">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">The Procedure</h3>
              <p className="mb-4">{serviceDetails.procedure}</p>
            </div>

            <div className="mb-8">
              <h3 className="text-2xl font-semibold mb-4">Recovery</h3>
              <p className="mb-4">{serviceDetails.recovery}</p>
              
              <div className="mt-6 bg-muted/50 p-4 rounded-lg">
                <h4 className="font-medium mb-2">Recovery Tips:</h4>
                <ul className="list-disc pl-5 space-y-2">
                  <li>Follow all post-procedure instructions carefully</li>
                  <li>Attend all follow-up appointments</li>
                  <li>Contact our office with any concerns</li>
                  <li>Get plenty of rest and stay hydrated</li>
                  <li>Avoid strenuous activities as advised</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="space-y-6">
          <div className="bg-card border rounded-lg p-6 shadow-sm">
            <h3 className="font-semibold text-lg mb-4">Service Details</h3>
            
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <Clock className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Duration</p>
                  <p className="font-medium">{service.duration || '30-60 minutes'}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <Calendar className="h-5 w-5 text-primary" />
                <div>
                  <p className="text-sm text-muted-foreground">Recovery Time</p>
                  <p className="font-medium">{serviceDetails.recoveryTime}</p>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-primary">
                  <path d="M3 2v6h6"/>
                  <path d="M3 13a9 9 0 1 0 3-7.5L3 8"/>
                </svg>
                <div>
                  <p className="text-sm text-muted-foreground">Anesthesia</p>
                  <p className="font-medium">{serviceDetails.anesthesia}</p>
                </div>
              </div>
            </div>

            <Button asChild className="w-full mt-6">
              <Link href="/appointment" className="font-semibold">
                Book Appointment
              </Link>
            </Button>
          </div>

          {/* Pricing Section */}
          <ServicePricing service={{ ...service, details: serviceDetails }} />
          
          {/* FAQ Section */}
          <div className="mt-12">
            <h2 className="text-2xl font-bold mb-6">Frequently Asked Questions</h2>
            <div className="space-y-4">
              {serviceDetails.faqs.map((faq, index) => (
                <div key={index} className="border-b pb-4">
                  <h3 className="font-medium text-lg mb-1">{faq.question}</h3>
                  <p className="text-muted-foreground">{faq.answer}</p>
                </div>
              ))}
            </div>
            
            <div className="mt-8 bg-primary/5 p-6 rounded-lg">
              <h3 className="text-lg font-medium mb-3">Still have questions?</h3>
              <p className="text-muted-foreground mb-4">Our team is here to help. Contact us for more information about this service.</p>
              <Button asChild>
                <Link href="/contact" className="w-full sm:w-auto">
                  Contact Us
                </Link>
              </Button>
            </div>
          </div>

          {service.details?.faqs && service.details.faqs.length > 0 && (
            <div className="bg-card border rounded-lg p-6 shadow-sm">
              <h3 className="font-semibold text-lg mb-4">Frequently Asked Questions</h3>
              <div className="space-y-4">
                {service.details.faqs.map((faq, index) => (
                  <div key={index} className="border-b pb-3 last:border-b-0 last:pb-0">
                    <h4 className="font-medium text-primary">{faq.question}</h4>
                    <p className="text-sm text-muted-foreground mt-1">{faq.answer}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
