
import HomePage from '../page';
import AboutPage from '../about/page';
import AppointmentPage from '../appointment/page';
import ServicesPage from '../services/page';
import DoctorsPage from '../doctors/page';
import ContactPage from '../contact/page';
import BlogPage from '../blog/page';
import ClinicPage from '../clinic/page';
import { Separator } from '@/components/ui/separator';

export const metadata = {
    title: 'All In One - ClinicWave',
    description: 'All pages combined into one view.',
};

export default function AllInOnePage() {
    return (
        <div className="flex flex-col gap-8">
            <section id="home">
                <HomePage />
            </section>

            <Separator className="my-8" />

            <section id="about">
                <AboutPage />
            </section>

            <Separator className="my-8" />

            <section id="appointment">
                <AppointmentPage />
            </section>

            <Separator className="my-8" />

            <section id="services">
                <ServicesPage />
            </section>

            <Separator className="my-8" />

            <section id="doctors">
                <DoctorsPage />
            </section>

            <Separator className="my-8" />

            <section id="clinic">
                <ClinicPage />
            </section>

            <Separator className="my-8" />

            <section id="blog">
                <BlogPage />
            </section>

            <Separator className="my-8" />

            <section id="contact">
                <ContactPage />
            </section>
        </div>
    );
}
