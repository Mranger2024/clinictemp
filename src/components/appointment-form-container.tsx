
'use client';

import MultiStepAppointmentForm from '@/components/multi-step-appointment-form';
import SimpleAppointmentForm from '@/components/simple-appointment-form';
import { useAppointmentForm } from '@/components/appointment-form-context';
import { motion, AnimatePresence } from 'framer-motion';

export default function AppointmentFormContainer() {
    const { formType } = useAppointmentForm();
    console.log('AppointmentFormContainer rendered with type:', formType);

    return (
        <div className="w-full relative min-h-[500px] flex items-center justify-center">
            {formType === 'complex' ? (
                <div className="w-full">
                    <MultiStepAppointmentForm />
                </div>
            ) : (
                <div className="w-full">
                    <SimpleAppointmentForm />
                </div>
            )}
        </div>
    );
}
