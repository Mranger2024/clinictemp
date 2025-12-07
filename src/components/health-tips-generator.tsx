'use client';

import React from 'react';
import { useFormState, useFormStatus } from 'react-dom';
import { Sparkles, Loader2 } from 'lucide-react';
import { getHealthTips } from '@/app/actions/get-health-tips';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';

const initialState = {
  healthTips: '',
  error: '',
};

function SubmitButton() {
  const { pending } = useFormStatus();
  return (
    <Button type="submit" disabled={pending}>
      {pending ? (
        <>
          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
          Generating...
        </>
      ) : (
        <>
          <Sparkles className="mr-2 h-4 w-4" />
          Get Smart Health Tips
        </>
      )}
    </Button>
  );
}

const HealthTipsGenerator = () => {
  const [state, formAction] = useFormState(getHealthTips, initialState);

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Sparkles className="text-primary" />
          Smart Health Tips
        </CardTitle>
        <CardDescription>
          Get personalized health tips from our AI based on your medical history and health concerns.
        </CardDescription>
      </CardHeader>
      <form action={formAction}>
        <CardContent className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="medicalHistory">Your Medical History</Label>
            <Textarea
              id="medicalHistory"
              name="medicalHistory"
              placeholder="e.g., Diagnosed with Type 2 diabetes in 2020, allergic to penicillin, taking Metformin 500mg daily."
              rows={4}
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="commonQueries">Your Health Queries/Concerns</Label>
            <Textarea
              id="commonQueries"
              name="commonQueries"
              placeholder="e.g., How can I lower my blood sugar naturally? What are some good exercises for someone with diabetes?"
              rows={4}
              required
            />
          </div>
        </CardContent>
        <CardFooter className="flex-col items-start gap-4">
          <SubmitButton />
          {state.error && (
            <Alert variant="destructive">
              <AlertTitle>Error</AlertTitle>
              <AlertDescription>{state.error}</AlertDescription>
            </Alert>
          )}
          {state.healthTips && (
             <Alert>
                <AlertTitle className="font-headline flex items-center gap-2">
                    <Sparkles className="h-4 w-4" />
                    Your Personalized Health Tips
                </AlertTitle>
                <AlertDescription>
                    <div className="prose prose-sm dark:prose-invert mt-2 whitespace-pre-wrap">{state.healthTips}</div>
                </AlertDescription>
            </Alert>
          )}
        </CardFooter>
      </form>
    </Card>
  );
};

export default HealthTipsGenerator;
