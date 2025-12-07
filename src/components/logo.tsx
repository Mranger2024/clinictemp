import React from 'react';
import { Stethoscope } from 'lucide-react';

const Logo = ({ className, isFooter = false }: { className?: string, isFooter?: boolean }) => {
  return (
    <div className={`flex items-center gap-2 ${className}`}>
        <Stethoscope className={`h-8 w-8 ${isFooter ? 'text-white' : 'text-primary'}`} />
        <span className={`font-headline font-bold text-2xl ${isFooter ? 'text-white' : 'text-foreground'}`}>
            Colon <span className={isFooter ? 'text-white/80' : 'text-primary'}>Clinics</span>
        </span>
    </div>
  );
};

export default Logo;
