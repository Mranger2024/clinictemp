'use client';

export function StatsMinimal() {
    const stats = [
        { value: '99', label: 'Success Rate', suffix: '%' },
        { value: '20', label: 'Trusted Patients', suffix: 'k+' },
        { value: '50', label: 'Awards Won', suffix: '+' },
        { value: '15', label: 'Years Serving', suffix: '+' },
    ];

    return (
        <section className="py-16 border-y border-border bg-background">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8 md:gap-12">
                    {stats.map((stat, index) => (
                        <div key={index} className="text-center">
                            <div className="flex items-baseline justify-center gap-1 mb-2">
                                <span className="text-5xl md:text-6xl font-bold tracking-tight text-foreground">{stat.value}</span>
                                <span className="text-3xl text-primary font-medium">{stat.suffix}</span>
                            </div>
                            <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">{stat.label}</div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
