import { Phone, Mail, MapPin } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const contactDetails = [
  {
    icon: Phone,
    title: '24/7 Service Hotline',
    content: '1-800-SERVICE-24',
    description: 'Call us anytime for immediate assistance'
  },
  {
    icon: Mail,
    title: 'Email Support',
    content: 'service@homeappliances.com',
    description: 'Get a response within 2 hours'
  },
  {
    icon: MapPin,
    title: 'Service Coverage',
    content: 'Nationwide Service',
    description: 'Available in all major cities and suburbs'
  }
];

export function ContactInfo() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
      {contactDetails.map((detail) => {
        const Icon = detail.icon;
        return (
          <Card key={detail.title} className="border-border bg-card hover:shadow-lg-card transition-shadow duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {detail.title}
              </h3>
              <p className="text-lg font-medium text-primary mb-1">
                {detail.content}
              </p>
              <p className="text-sm text-muted-foreground">
                {detail.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
