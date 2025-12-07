'use client';

import { IndianRupee } from 'lucide-react';
import { Service } from '@/lib/placeholder-data';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

interface ServicePricingProps {
  service: Service;
}

export function ServicePricing({ service }: ServicePricingProps) {
  if (!service.details?.pricing) {
    return null;
  }

  const { pricing } = service.details;

  const formatCurrency = (amount: number) => {
    return new Intl.NumberFormat('en-IN', {
      style: 'currency',
      currency: 'INR',
      maximumFractionDigits: 0,
    }).format(amount);
  };

  return (
    <Card className="border-primary/20">
      <CardHeader>
        <CardTitle className="text-2xl">Pricing & Payment</CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        <div className="space-y-2">
          <div className="flex items-baseline gap-2">
            <span className="text-3xl font-bold">
              {formatCurrency(pricing.basePrice)}
            </span>
            <span className="text-muted-foreground">
              {pricing.consultationFee ? '+ consultation fee' : 'all inclusive'}
            </span>
          </div>

          {pricing.consultationFee && (
            <div className="text-sm text-muted-foreground">
              Consultation fee: {formatCurrency(pricing.consultationFee)}
            </div>
          )}

          {pricing.followUpPrice && (
            <div className="text-sm text-muted-foreground">
              Follow-up visits: {formatCurrency(pricing.followUpPrice)}
            </div>
          )}
        </div>

        {pricing.includes && pricing.includes.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium">This includes:</h4>
            <ul className="space-y-2">
              {pricing.includes.map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg
                    className="h-5 w-5 text-green-500 mt-0.5 flex-shrink-0"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M5 13l4 4L19 7"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        )}

        {pricing.additionalFees && pricing.additionalFees.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium">Additional fees may apply:</h4>
            <div className="space-y-2">
              {pricing.additionalFees.map((fee, index) => (
                <div key={index} className="flex justify-between">
                  <div>
                    <div className="font-medium">{fee.name}</div>
                    {fee.description && (
                      <div className="text-sm text-muted-foreground">
                        {fee.description}
                      </div>
                    )}
                  </div>
                  <div className="font-medium">
                    {fee.price > 0 ? formatCurrency(fee.price) : 'Included'}
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {pricing.insuranceInfo && (
          <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg text-sm">
            <h4 className="font-medium mb-1">Insurance Information</h4>
            <p className="text-muted-foreground">{pricing.insuranceInfo}</p>
          </div>
        )}

        {pricing.paymentOptions && pricing.paymentOptions.length > 0 && (
          <div className="space-y-2">
            <h4 className="font-medium">Payment Options:</h4>
            <div className="flex flex-wrap gap-2">
              {pricing.paymentOptions.map((option, index) => (
                <Badge key={index} variant="outline" className="font-normal">
                  {option}
                </Badge>
              ))}
            </div>
          </div>
        )}

        <Button className="w-full" size="lg">
          Book Appointment
        </Button>

        <div className="text-center text-sm text-muted-foreground">
          No hidden fees. Price may vary based on individual needs.
        </div>
      </CardContent>
    </Card>
  );
}
