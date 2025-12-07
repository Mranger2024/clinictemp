'use server';

/**
 * @fileOverview Personalized health tips flow for patients based on their medical history and common queries.
 *
 * - generatePersonalizedHealthTips - A function that generates personalized health tips for a patient.
 * - PersonalizedHealthTipsInput - The input type for the generatePersonalizedHealthTips function.
 * - PersonalizedHealthTipsOutput - The return type for the generatePersonalizedHealthTips function.
 */

import {ai} from '@/ai/genkit';
import {z} from 'genkit';

const PersonalizedHealthTipsInputSchema = z.object({
  medicalHistory: z
    .string()
    .describe('The patient medical history, including conditions, medications, and allergies.'),
  commonQueries: z
    .string()
    .describe('The common health queries or concerns of the patient.'),
});
export type PersonalizedHealthTipsInput = z.infer<typeof PersonalizedHealthTipsInputSchema>;

const PersonalizedHealthTipsOutputSchema = z.object({
  healthTips: z
    .string()
    .describe('Personalized health tips based on the patient medical history and common queries.'),
});
export type PersonalizedHealthTipsOutput = z.infer<typeof PersonalizedHealthTipsOutputSchema>;

export async function generatePersonalizedHealthTips(
  input: PersonalizedHealthTipsInput
): Promise<PersonalizedHealthTipsOutput> {
  return personalizedHealthTipsFlow(input);
}

const prompt = ai.definePrompt({
  name: 'personalizedHealthTipsPrompt',
  input: {schema: PersonalizedHealthTipsInputSchema},
  output: {schema: PersonalizedHealthTipsOutputSchema},
  prompt: `You are a helpful AI assistant that provides personalized health tips to patients based on their medical history and common queries.

  Medical History: {{{medicalHistory}}}
  Common Queries: {{{commonQueries}}}

  Provide concise and actionable health tips tailored to the patient needs.`,
});

const personalizedHealthTipsFlow = ai.defineFlow(
  {
    name: 'personalizedHealthTipsFlow',
    inputSchema: PersonalizedHealthTipsInputSchema,
    outputSchema: PersonalizedHealthTipsOutputSchema,
  },
  async input => {
    const {output} = await prompt(input);
    return output!;
  }
);
