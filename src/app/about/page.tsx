
import Image from 'next/image';
import { Heart, Users, Lightbulb, Target } from 'lucide-react';
import PageHeader from '@/components/page-header';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { PlaceHolderImages } from '@/lib/placeholder-images';

const AboutPage = () => {
  const clinicImage = PlaceHolderImages.find(p => p.id === 'clinic-interior-1');

  const values = [
    {
      icon: <Heart className="h-10 w-10 text-primary" />,
      title: 'Compassion',
      description: 'We provide care with empathy, respect, and kindness, treating every patient like family.',
    },
    {
      icon: <Users className="h-10 w-10 text-primary" />,
      title: 'Excellence',
      description: 'We are committed to the highest standards of medical care, safety, and patient satisfaction.',
    },
    {
      icon: <Lightbulb className="h-10 w-10 text-primary" />,
      title: 'Innovation',
      description: 'We embrace modern technology and medical advancements to provide cutting-edge treatments.',
    },
  ];

  return (
    <div className="bg-background">
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <PageHeader
            title="About ClinicWave"
            description="Leading the way in modern, patient-focused healthcare."
          />
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-2">
            <div className="relative h-96 w-full md:h-[500px] order-last md:order-first">
               {clinicImage && (
                <Image
                  src={clinicImage.imageUrl}
                  alt={clinicImage.description}
                  fill
                  className="rounded-xl object-cover shadow-lg"
                  data-ai-hint={clinicImage.imageHint}
                />
              )}
            </div>
            <div className="space-y-6">
              <h2 className="font-headline text-3xl font-bold text-foreground">Our Story</h2>
              <p className="text-lg text-muted-foreground">
                Founded in 2010, ClinicWave began with a simple mission: to make high-quality healthcare accessible and personal. We saw a need for a clinic that not only treated illnesses but also fostered a sense of community and wellbeing.
              </p>
              <p className="text-lg text-muted-foreground">
                Over the years, we have grown into a multi-specialty practice, but our core values remain the same. We combine medical expertise with a genuine passion for helping people, creating a healthcare experience that is both effective and reassuring.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-secondary/50 py-20 md:py-24">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h2 className="font-headline text-3xl font-bold text-foreground">Our Mission & Values</h2>
            <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
              Our work is guided by a commitment to providing the best possible care for our patients and community.
            </p>
          </div>
          <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
            {values.map((value) => (
              <Card key={value.title} className="text-center">
                <CardHeader>
                  <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-primary/10">
                    {value.icon}
                  </div>
                </CardHeader>
                <CardContent>
                  <h3 className="font-headline text-xl font-semibold">{value.title}</h3>
                  <p className="mt-2 text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4 text-center">
           <Target className="mx-auto h-12 w-12 text-primary" />
           <h2 className="font-headline mt-6 text-3xl font-bold text-foreground">Join Our Community</h2>
           <p className="mt-4 max-w-2xl mx-auto text-lg text-muted-foreground">
            We invite you to experience the ClinicWave difference. Your health journey is our priority.
           </p>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;
