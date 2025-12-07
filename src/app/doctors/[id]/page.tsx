
import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { doctors } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Check, GraduationCap, Languages, Stethoscope, Trophy } from 'lucide-react';

export default function DoctorProfilePage({ params }: { params: { id: string } }) {
  const doctor = doctors.find((d) => d.id === params.id);

  if (!doctor) {
    notFound();
  }

  const doctorImage = PlaceHolderImages.find((img) => img.id === doctor.imageId);

  return (
    <div className="bg-secondary/30">
      <div className="container mx-auto px-4 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="md:col-span-1">
            <Card className="overflow-hidden">
                {doctorImage && (
                    <div className="relative h-96 w-full">
                        <Image
                        src={doctorImage.imageUrl}
                        alt={doctor.name}
                        fill
                        className="object-cover"
                        data-ai-hint={doctorImage.imageHint}
                        />
                    </div>
                )}
                <CardContent className="p-6 text-center">
                    <h1 className="font-headline text-2xl font-bold">{doctor.name}</h1>
                    <p className="text-primary font-medium text-lg">{doctor.specialty}</p>
                     <div className="mt-4 flex flex-wrap justify-center gap-2">
                        {doctor.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                    </div>
                </CardContent>
            </Card>
            <Button asChild size="lg" className="w-full mt-6">
                <Link href="/appointment">Book Appointment</Link>
            </Button>
          </div>

          <div className="md:col-span-2">
             <Card>
                <CardHeader>
                    <CardTitle>About {doctor.name}</CardTitle>
                </CardHeader>
                <CardContent>
                    <p className="text-muted-foreground">{doctor.bio}</p>
                </CardContent>
             </Card>

             <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-6">
                <Card>
                    <CardHeader className="flex flex-row items-center gap-3">
                        <GraduationCap className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">Education</CardTitle>
                    </CardHeader>
                    <CardContent>
                        <ul className="space-y-2 text-muted-foreground">
                            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Medical Degree from University of Health Sciences</li>
                            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Residency at City General Hospital</li>
                            <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Fellowship in {doctor.specialty}</li>
                        </ul>
                    </CardContent>
                </Card>
                 <Card>
                    <CardHeader className="flex flex-row items-center gap-3">
                        <Stethoscope className="h-8 w-8 text-primary" />
                        <CardTitle className="text-xl">Specializations</CardTitle>
                    </CardHeader>
                    <CardContent>
                         <ul className="space-y-2 text-muted-foreground">
                           {doctor.tags.map(tag => (
                             <li key={tag} className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> {tag}</li>
                           ))}
                           <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Preventive Care</li>
                        </ul>
                    </CardContent>
                </Card>
             </div>
             
             <Card className="mt-6">
                <CardHeader className="flex flex-row items-center gap-3">
                    <Trophy className="h-8 w-8 text-primary" />
                    <CardTitle className="text-xl">Achievements</CardTitle>
                </CardHeader>
                <CardContent>
                    <ul className="space-y-2 text-muted-foreground">
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Top Proctologist of the Year, 2023</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Published in the 'New England Journal of Medicine'</li>
                        <li className="flex items-center gap-2"><Check className="h-4 w-4 text-green-500" /> Recipient of the 'Patient's Choice' Award</li>
                    </ul>
                </CardContent>
             </Card>

             <Card className="mt-6">
                <CardHeader className="flex flex-row items-center gap-3">
                    <Languages className="h-8 w-8 text-primary" />
                    <CardTitle className="text-xl">Languages Spoken</CardTitle>
                </CardHeader>
                <CardContent>
                    <div className="flex gap-2">
                        <Badge>English</Badge>
                        <Badge variant="secondary">Spanish</Badge>
                    </div>
                </CardContent>
             </Card>

          </div>
        </div>
      </div>
    </div>
  );
}
