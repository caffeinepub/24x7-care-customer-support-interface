import { useState } from 'react';
import { useServiceRequestMutation } from '../hooks/useServiceRequestMutation';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Label } from './ui/label';
import { Textarea } from './ui/textarea';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select';
import { Card, CardContent, CardHeader, CardTitle } from './ui/card';
import { Alert, AlertDescription } from './ui/alert';
import { CheckCircle2, Loader2 } from 'lucide-react';

const applianceTypes = [
  'Refrigerator',
  'Washing Machine',
  'Air Conditioner',
  'Microwave',
  'Dishwasher',
  'Television'
];

export function ServiceRequestForm() {
  const [formData, setFormData] = useState({
    applianceType: '',
    modelNumber: '',
    issueDescription: '',
    customerName: '',
    customerEmail: ''
  });
  const [showSuccess, setShowSuccess] = useState(false);

  const mutation = useServiceRequestMutation();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      await mutation.mutateAsync(formData);
      setShowSuccess(true);
      setFormData({
        applianceType: '',
        modelNumber: '',
        issueDescription: '',
        customerName: '',
        customerEmail: ''
      });
      
      setTimeout(() => {
        setShowSuccess(false);
      }, 5000);
    } catch (error) {
      console.error('Failed to submit service request:', error);
    }
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="max-w-2xl mx-auto">
      {showSuccess && (
        <Alert className="mb-6 border-green-500 bg-green-50 dark:bg-green-950">
          <CheckCircle2 className="h-4 w-4 text-green-600" />
          <AlertDescription className="text-green-800 dark:text-green-200">
            Your service request has been submitted successfully! We'll contact you shortly.
          </AlertDescription>
        </Alert>
      )}

      <Card className="shadow-lg border-border">
        <CardHeader>
          <CardTitle className="text-2xl">Service Request Form</CardTitle>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="applianceType">Appliance Type *</Label>
              <Select
                value={formData.applianceType}
                onValueChange={(value) => handleChange('applianceType', value)}
              >
                <SelectTrigger id="applianceType" className="focus:ring-primary">
                  <SelectValue placeholder="Select appliance type" />
                </SelectTrigger>
                <SelectContent>
                  {applianceTypes.map((type) => (
                    <SelectItem key={type} value={type}>
                      {type}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="modelNumber">Model Number *</Label>
              <Input
                id="modelNumber"
                type="text"
                placeholder="e.g., LG-REF-2024"
                value={formData.modelNumber}
                onChange={(e) => handleChange('modelNumber', e.target.value)}
                required
                className="focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="issueDescription">Issue Description *</Label>
              <Textarea
                id="issueDescription"
                placeholder="Please describe the issue you're experiencing..."
                value={formData.issueDescription}
                onChange={(e) => handleChange('issueDescription', e.target.value)}
                required
                className="min-h-[120px] resize-none focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="customerName">Your Name *</Label>
              <Input
                id="customerName"
                type="text"
                placeholder="Full name"
                value={formData.customerName}
                onChange={(e) => handleChange('customerName', e.target.value)}
                required
                className="focus:ring-primary"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="customerEmail">Email Address *</Label>
              <Input
                id="customerEmail"
                type="email"
                placeholder="your.email@example.com"
                value={formData.customerEmail}
                onChange={(e) => handleChange('customerEmail', e.target.value)}
                required
                className="focus:ring-primary"
              />
            </div>

            <Button
              type="submit"
              disabled={mutation.isPending}
              className="w-full bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {mutation.isPending ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Submitting...
                </>
              ) : (
                'Submit Service Request'
              )}
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
