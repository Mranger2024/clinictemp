import type { Metadata } from 'next';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/layout/header';
import Footer from '@/components/layout/footer';
import './globals.css';
import { AppointmentFormProvider } from '@/components/appointment-form-context';
import { SectionThemeProvider } from '@/components/section-theme-context';
import { HeaderProvider } from '@/components/header-context';

export const metadata: Metadata = {
  title: 'Smile Dental Clinic - Your Trusted Partner for Complete Dental Care',
  description: 'Professional dental care with advanced technology. Offering general dentistry, cosmetic procedures, orthodontics, and emergency dental services.',
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600;700;800&family=PT+Sans:wght@400;700&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="font-body antialiased">
        <AppointmentFormProvider>
          <SectionThemeProvider>
            <HeaderProvider>
              <div className="flex min-h-screen flex-col">
                <Header />
                <main className="flex-1">{children}</main>
                <Footer />
              </div>
            </HeaderProvider>
          </SectionThemeProvider>
        </AppointmentFormProvider>
        <Toaster />
      </body>
    </html>
  );
}
