
import Image from 'next/image';
import Link from 'next/link';
import PageHeader from '@/components/page-header';
import { Card, CardContent, CardFooter } from '@/components/ui/card';
import { doctors } from '@/lib/placeholder-data';
import { PlaceHolderImages } from '@/lib/placeholder-images';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';

const DoctorsPage = () => {
  return (
    <div className="bg-background">
      <section className="py-20 md:py-24">
        <div className="container mx-auto px-4">
          <PageHeader
            title="Our Expert Medical Team"
            description="Meet our team of dedicated and experienced doctors, committed to providing you with the highest quality of care."
          />
        </div>
      </section>

      <section className="pb-20 md:pb-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
            {doctors.map((doctor) => {
              const doctorImage = PlaceHolderImages.find((img) => img.id === doctor.imageId);
              return (
                <Card key={doctor.id} className="group flex flex-col overflow-hidden text-center transform-gpu transition-all duration-300 hover:shadow-xl">
                    <div className="bg-primary/10 p-6 flex-1">
                        {doctorImage && (
                        <Avatar className="h-40 w-40 mx-auto border-4 border-background shadow-lg transition-transform duration-300 group-hover:scale-105">
                            <AvatarImage src={doctorImage.imageUrl} alt={doctor.name} data-ai-hint={doctorImage.imageHint} />
                            <AvatarFallback>{doctor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        )}
                    </div>
                    <CardContent className="p-6 flex-1 flex flex-col justify-between">
                        <div>
                            <h3 className="font-headline text-xl font-semibold">{doctor.name}</h3>
                            <p className="text-primary font-medium">{doctor.specialty}</p>
                            <p className="mt-2 text-sm text-muted-foreground">{doctor.bio.substring(0, 100)}...</p>
                        </div>
                        <div className="mt-4 flex flex-wrap justify-center gap-2">
                            {doctor.tags.map(tag => <Badge key={tag} variant="secondary">{tag}</Badge>)}
                        </div>
                    </CardContent>
                    <CardFooter>
                        <Button asChild className="w-full">
                            <Link href={`/doctors/${doctor.id}`}>View Profile</Link>
                        </Button>
                    </CardFooter>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
};

export default DoctorsPage;
