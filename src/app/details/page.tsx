
import DoctorProfilePage from '../doctors/[id]/page';
import ServicesPage from '../services/page';
import { doctors } from '@/lib/placeholder-data';
import { Separator } from '@/components/ui/separator';

export const metadata = {
    title: 'Details - ClinicWave',
    description: 'Doctor details and services.',
};

export default function DetailsPage() {
    // Use the first doctor as the default placeholder
    const doctorId = doctors[0]?.id || 'd1';

    return (
        <div className="flex flex-col gap-8">
            <section>
                <DoctorProfilePage params={{ id: doctorId }} />
            </section>

            <Separator className="my-8" />

            <section>
                <ServicesPage />
            </section>
        </div>
    );
}
