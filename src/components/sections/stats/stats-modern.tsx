'use client';

import { TrendingUp, Users, Award, Clock } from 'lucide-react';

export function StatsModern() {
    const stats = [
        { value: '99', suffix: '%', label: 'Success Rate', icon: TrendingUp },
        { value: '20', suffix: 'k+', label: 'Happy Patients', icon: Users },
        { value: '50', suffix: '+', label: 'Awards Won', icon: Award },
        { value: '15', suffix: '+', label: 'Years Experience', icon: Clock },
    ];

    return (
        <section className="py-16 md:py-20 bg-secondary/50">
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="group bg-card border-2 border-border hover:border-primary rounded-xl p-6 md:p-8 text-center transition-all duration-300 hover:shadow-lg cursor-pointer">
                                <div className="inline-flex p-3 rounded-lg bg-primary/10 text-primary group-hover:bg-primary group-hover:text-primary-foreground transition-colors mb-4">
                                    <Icon className="h-6 w-6" />
                                </div>
                                <div className="flex items-baseline justify-center gap-1 mb-2">
                                    <span className="text-4xl md:text-5xl font-bold text-foreground tracking-tight">
                                        {stat.value}
                                    </span>
                                    <span className="text-2xl md:text-3xl font-semibold text-primary">
                                        {stat.suffix}
                                    </span>
                                </div>
                                <div className="text-sm font-medium text-muted-foreground uppercase tracking-wider">
                                    {stat.label}
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
