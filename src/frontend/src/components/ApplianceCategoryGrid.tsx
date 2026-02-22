import { Card, CardContent } from './ui/card';

const appliances = [
  {
    name: 'Refrigerator',
    icon: '/assets/generated/refrigerator-icon.dim_128x128.png',
    description: 'Cooling & freezing issues'
  },
  {
    name: 'Washing Machine',
    icon: '/assets/generated/washing-machine-icon.dim_128x128.png',
    description: 'Cleaning & drainage problems'
  },
  {
    name: 'Air Conditioner',
    icon: '/assets/generated/ac-icon.dim_128x128.png',
    description: 'Cooling & heating service'
  },
  {
    name: 'Microwave',
    icon: '/assets/generated/microwave-icon.dim_128x128.png',
    description: 'Heating & functionality'
  },
  {
    name: 'Dishwasher',
    icon: '/assets/generated/dishwasher-icon.dim_128x128.png',
    description: 'Cleaning & water issues'
  },
  {
    name: 'Television',
    icon: '/assets/generated/tv-icon.dim_128x128.png',
    description: 'Display & audio problems'
  }
];

export function ApplianceCategoryGrid() {
  const scrollToForm = () => {
    const formSection = document.getElementById('service-form');
    if (formSection) {
      formSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      {appliances.map((appliance) => (
        <Card 
          key={appliance.name}
          className="cursor-pointer transition-all duration-300 hover:shadow-lg-card hover:scale-105 hover:border-primary/50 bg-card border-border"
          onClick={scrollToForm}
        >
          <CardContent className="p-6 flex flex-col items-center text-center">
            <div className="w-24 h-24 mb-4 flex items-center justify-center">
              <img 
                src={appliance.icon} 
                alt={appliance.name}
                className="w-full h-full object-contain"
              />
            </div>
            <h3 className="text-xl font-semibold text-foreground mb-2">
              {appliance.name}
            </h3>
            <p className="text-sm text-muted-foreground">
              {appliance.description}
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  );
}
