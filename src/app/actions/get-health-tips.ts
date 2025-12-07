'use server';

import {
  generatePersonalizedHealthTips,
  type PersonalizedHealthTipsOutput,
} from '@/ai/flows/personalized-health-tips';
import { z } from 'zod';

const schema = z.object({
  medicalHistory: z.string().min(10, "Please provide more details about your medical history."),
  commonQueries: z.string().min(10, "Please provide more details about your health queries."),
});

type State = PersonalizedHealthTipsOutput & {
    error?: string;
};

export async function getHealthTips(
  prevState: State,
  formData: FormData,
): Promise<State> {
  const validatedFields = schema.safeParse({
    medicalHistory: formData.get('medicalHistory'),
    commonQueries: formData.get('commonQueries'),
  });

  if (!validatedFields.success) {
    return {
      healthTips: '',
      error: validatedFields.error.flatten().fieldErrors.medicalHistory?.[0] || validatedFields.error.flatten().fieldErrors.commonQueries?.[0],
    };
  }
  
  try {
    const result = await generatePersonalizedHealthTips(validatedFields.data);
    return { healthTips: result.healthTips, error: '' };
  } catch (error) {
    console.error('Error generating health tips:', error);
    return {
      healthTips: '',
      error: 'Sorry, we were unable to generate health tips at this time. Please try again later.',
    };
  }
}
