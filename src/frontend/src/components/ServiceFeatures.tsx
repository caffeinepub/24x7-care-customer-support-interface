import { Clock, Award, Package, Shield } from 'lucide-react';
import { Card, CardContent } from './ui/card';

const features = [
  {
    icon: Clock,
    title: '24/7 Support',
    description: 'Round-the-clock service availability for emergency repairs and support whenever you need it.'
  },
  {
    icon: Award,
    title: 'Certified Technicians',
    description: 'Highly trained and certified professionals with years of experience in appliance repair.'
  },
  {
    icon: Package,
    title: 'Genuine Parts',
    description: 'We use only authentic manufacturer parts to ensure quality and longevity of repairs.'
  },
  {
    icon: Shield,
    title: 'Warranty Service',
    description: 'All repairs come with a comprehensive warranty for your peace of mind and protection.'
  }
];

export function ServiceFeatures() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {features.map((feature) => {
        const Icon = feature.icon;
        return (
          <Card key={feature.title} className="border-border bg-card hover:shadow-lg-card transition-shadow duration-300">
            <CardContent className="p-6 flex flex-col items-center text-center">
              <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="w-8 h-8 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                {feature.title}
              </h3>
              <p className="text-sm text-muted-foreground">
                {feature.description}
              </p>
            </CardContent>
          </Card>
        );
      })}
    </div>
  );
}
