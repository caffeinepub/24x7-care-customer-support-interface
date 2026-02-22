import { ApplianceCategoryGrid } from '../components/ApplianceCategoryGrid';
import { ServiceFeatures } from '../components/ServiceFeatures';
import { ServiceRequestForm } from '../components/ServiceRequestForm';
import { FAQ } from '../components/FAQ';
import { ContactInfo } from '../components/ContactInfo';

export function ServiceCenterPage() {
  return (
    <main className="flex-1">
      {/* Hero Section */}
      <section className="relative h-[400px] bg-gradient-to-br from-primary via-primary/90 to-primary/80 overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src="/assets/generated/service-hero.dim_1200x400.png" 
            alt="Service Center" 
            className="w-full h-full object-cover opacity-15"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Home Appliance Service Center
          </h1>
          <p className="text-lg md:text-xl text-white/95 max-w-2xl">
            Expert service and support for all your home appliances. Available 24/7 to keep your home running smoothly.
          </p>
        </div>
      </section>

      {/* Appliance Categories */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Select Your Appliance
            </h2>
            <p className="text-muted-foreground text-lg">
              Choose the appliance you need service for
            </p>
          </div>
          <ApplianceCategoryGrid />
        </div>
      </section>

      {/* Service Features */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Why Choose Our Service Center
            </h2>
            <p className="text-muted-foreground text-lg">
              Professional service you can trust
            </p>
          </div>
          <ServiceFeatures />
        </div>
      </section>

      {/* Service Request Form */}
      <section id="service-form" className="py-16 bg-background scroll-mt-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Request Service
            </h2>
            <p className="text-muted-foreground text-lg">
              Fill out the form below and we'll get back to you shortly
            </p>
          </div>
          <ServiceRequestForm />
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-muted/40">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about our service
            </p>
          </div>
          <FAQ />
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Get In Touch
            </h2>
            <p className="text-muted-foreground text-lg">
              We're here to help you anytime
            </p>
          </div>
          <ContactInfo />
        </div>
      </section>
    </main>
  );
}
