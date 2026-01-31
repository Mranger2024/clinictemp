'use client';

import { TrendingUp, Users, Award, Clock } from 'lucide-react';

export function StatsPremium() {
    const stats = [
        { value: '99', suffix: '%', label: 'Success Rate', icon: TrendingUp },
        { value: '20', suffix: 'k+', label: 'Happy Patients', icon: Users },
        { value: '50', suffix: '+', label: 'Awards Won', icon: Award },
        { value: '15', suffix: '+', label: 'Years Experience', icon: Clock },
    ];

    return (
        <section className="py-20 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-primary via-primary to-secondary"></div>
            <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:40px_40px]"></div>

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
                    {stats.map((stat, index) => {
                        const Icon = stat.icon;
                        return (
                            <div key={index} className="text-center group cursor-pointer">
                                <div className="inline-flex p-4 rounded-2xl bg-white/10 backdrop-blur-sm mb-4 group-hover:bg-white/20 transition-colors">
                                    <Icon className="h-8 w-8 text-primary-foreground" />
                                </div>
                                <div className="flex items-baseline justify-center gap-1 mb-2">
                                    <span className="text-5xl lg:text-6xl font-bold text-primary-foreground tracking-tight">
                                        {stat.value}
                                    </span>
                                    <span className="text-3xl font-semibold text-primary-foreground/80">
                                        {stat.suffix}
                                    </span>
                                </div>
                                <div className="text-lg font-medium text-primary-foreground/90 uppercase tracking-wider">
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
