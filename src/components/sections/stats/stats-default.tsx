
'use client';

import { Card } from '@/components/ui/card';

const StatCard = ({ value, label }: { value: string, label: string }) => (
    <Card className="bg-card p-6 shadow-lg border-0">
        <div className="flex items-center justify-center gap-4">
            <div className="text-4xl font-bold text-primary">{value}</div>
            <div className="text-sm text-muted-foreground font-medium">{label}</div>
        </div>
    </Card>
);

export function StatsDefault() {
    const stats = [
        { value: '100%', label: 'Patient Satisfaction' },
        { value: '15K+', label: 'Happy Patients' },
        { value: '10+', label: 'Expert Doctors' },
        { value: '15+', label: 'Years Experience' },
    ];

    return (
        <section className="py-16 md:py-20 bg-secondary/50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map(stat => <StatCard key={stat.label} {...stat} />)}
                </div>
            </div>
        </section>
    );
}
