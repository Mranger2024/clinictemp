
import Image from 'next/image';
import PageHeader from '@/components/page-header';
import { Card, CardContent } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Microscope, Sparkles, Check } from 'lucide-react';

const galleryImages = [
  {
    id: 'clinic-reception',
    title: 'Welcoming Reception',
    description: 'Our bright and modern reception area is designed to make you feel comfortable from the moment you arrive.',
  },
  {
    id: 'clinic-waiting-area',
    title: 'Comfortable Waiting Area',
    description: 'Relax in our spacious waiting area before your appointment.',
  },
  {
    id: 'clinic-room-1',
    title: 'Consultation Room',
    description: 'Private and comfortable rooms for your consultation with our specialists.',
  },
  {
    id: 'clinic-equipment-1',
    title: 'Advanced Equipment',
    description: 'We use the latest medical technology to ensure you receive the best care.',
  },
  {
    id: 'clinic-room-2',
    title: 'Examination Room',
    description: 'Our examination rooms are clean, private, and fully equipped.',
  },
  {
    id: 'clinic-exterior',
    title: 'Modern Facility',
    description: 'The exterior of our state-of-the-art clinic.',
  },
];

const ClinicPage = () => {
  const clinicTechImage = PlaceHolderImages.find((img) => img.id === 'clinic-equipment-1');
  const patientComfortImage = PlaceHolderImages.find((img) => img.id === 'clinic-waiting-area');
  
  return (
    <div className="bg-background">
      <section className="py-20 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <PageHeader
            title="Our Clinic"
            description="Explore our state-of-the-art facility, designed with your comfort and care in mind."
          />
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {galleryImages.map((item) => {
              const image = PlaceHolderImages.find((img) => img.id === item.id);
              return (
                <Card key={item.id} className="overflow-hidden group">
                  {image && (
                    <div className="relative h-64 w-full overflow-hidden">
                      <Image
                        src={image.imageUrl}
                        alt={item.title}
                        fill
                        className="object-cover transition-transform duration-300 group-hover:scale-105"
                        data-ai-hint={image.imageHint}
                      />
                    </div>
                  )}
                  <CardContent className="p-6">
                    <h3 className="font-headline text-xl font-semibold">{item.title}</h3>
                    <p className="mt-2 text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24 bg-secondary/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Microscope className="h-10 w-10 text-primary" />
                <h2 className="font-headline text-3xl font-bold text-foreground">Our Technology</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                We invest in the latest medical technology to ensure accurate diagnoses and effective treatments. Our state-of-the-art equipment allows us to provide care that is not only advanced but also minimally invasive.
              </p>
              <ul className="space-y-3">
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary" /> High-Definition Imaging Systems</li>
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary" /> Advanced Laser Therapy Units</li>
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary" /> Modern Surgical Suites</li>
              </ul>
            </div>
             {clinicTechImage && (
              <div className="relative h-96 w-full">
                <Image
                  src={clinicTechImage.imageUrl}
                  alt="Advanced medical equipment"
                  fill
                  className="rounded-xl object-cover shadow-lg"
                  data-ai-hint={clinicTechImage.imageHint}
                />
              </div>
            )}
          </div>
        </div>
      </section>
      
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            {patientComfortImage && (
              <div className="relative h-96 w-full order-last md:order-first">
                <Image
                  src={patientComfortImage.imageUrl}
                  alt="Comfortable waiting area"
                  fill
                  className="rounded-xl object-cover shadow-lg"
                  data-ai-hint={patientComfortImage.imageHint}
                />
              </div>
            )}
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Sparkles className="h-10 w-10 text-primary" />
                <h2 className="font-headline text-3xl font-bold text-foreground">Patient Comfort</h2>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Your comfort and peace of mind are our top priorities. From our welcoming reception to our private recovery rooms, every aspect of our clinic is designed to create a calm and healing environment.
              </p>
               <ul className="space-y-3">
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary" /> Spacious and Serene Waiting Areas</li>
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary" /> Private Consultation and Exam Rooms</li>
                <li className="flex items-center gap-3"><Check className="h-6 w-6 text-primary" /> Attentive and Caring Staff</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ClinicPage;
