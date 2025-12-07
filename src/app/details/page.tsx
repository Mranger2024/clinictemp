
import ServiceDetailPage from '../services/[slug]/page';
import DoctorProfilePage from '../doctors/[id]/page';
import { Separator } from '@/components/ui/separator';

export const metadata = {
    title: 'Details - ClinicWave',
    description: 'Combined doctor profile and service details.',
};

export default function DetailsPage() {
    // Hardcoded IDs for the combined view
    const doctorId = 'd1';
    const serviceSlug = 'cardiology';

    // We pass params as a Promise for the async ServiceDetailPage to satisfy its 'await params' usage pattern usually found in Next.js 15,
    // although passing a plain object works if the type annotation expects it. 
    // Given the component definition: async function ServiceDetailPage({ params }: { params: { slug: string } }), 
    // it expects strict object but awaits it. Passing plain object is safer for the type definition.

    return (
        <div className="flex flex-col gap-8">
            <section id="doctor-profile">
                {/* DoctorProfilePage is synchronous and expects plain params */}
                <DoctorProfilePage params={{ id: doctorId }} />
            </section>

            <Separator className="my-8" />

            <section id="service-detail">
                {/* ServiceDetailPage is async and awaits params. We pass the plain object which await unwraps immediately. */}
                
                <ServiceDetailPage params={{ slug: serviceSlug }} />
            </section>
        </div>
    );
}
