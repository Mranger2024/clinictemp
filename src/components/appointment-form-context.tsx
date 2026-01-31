
'use client';

import React, { createContext, useContext, useState } from 'react';

type FormType = 'complex' | 'simple';

interface AppointmentFormContextType {
    formType: FormType;
    toggleFormType: () => void;
    setFormType: (type: FormType) => void;
}

const AppointmentFormContext = createContext<AppointmentFormContextType | undefined>(undefined);

export function AppointmentFormProvider({ children }: { children: React.ReactNode }) {
    const [formType, setFormType] = useState<FormType>('complex');

    const toggleFormType = () => {
        console.log('Toggling form type from', formType);
        setFormType((prev) => (prev === 'complex' ? 'simple' : 'complex'));
    };

    return (
        <AppointmentFormContext.Provider value={{ formType, toggleFormType, setFormType }}>
            {children}
        </AppointmentFormContext.Provider>
    );
}

export function useAppointmentForm() {
    const context = useContext(AppointmentFormContext);
    if (context === undefined) {
        throw new Error('useAppointmentForm must be used within an AppointmentFormProvider');
    }
    return context;
}
