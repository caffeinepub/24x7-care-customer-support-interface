import { useState } from 'react';
import { ContactForm } from './components/ContactForm';
import { SuccessMessage } from './components/SuccessMessage';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Button } from './components/ui/button';
import { MessageCircle } from 'lucide-react';

function App() {
  const [showForm, setShowForm] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);

  const handleFormSuccess = () => {
    setShowSuccess(true);
    setShowForm(false);
    setTimeout(() => {
      setShowSuccess(false);
    }, 5000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-background via-background to-muted/20">
      <Header />
      
      <main className="flex-1 flex items-center justify-center px-4 py-6">
        <div className="w-full max-w-2xl">
          {/* Logo Section */}
          <div className="flex justify-center mb-4">
            <img 
              src="/assets/generated/24x7-care-logo-transparent.dim_200x200.png" 
              alt="24x7 Care Logo" 
              className="h-32 w-auto"
            />
          </div>

          {/* Title */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold text-foreground mb-2">24x7 Care</h1>
            <p className="text-muted-foreground">We're here to help, anytime you need us</p>
          </div>

          {/* Success Message */}
          {showSuccess && (
            <div className="mb-4">
              <SuccessMessage onClose={() => setShowSuccess(false)} />
            </div>
          )}

          {/* Customer Care Button or Form */}
          {!showForm ? (
            <div className="flex justify-center">
              <Button 
                onClick={() => setShowForm(true)}
                className="bg-royal-blue hover:bg-royal-blue-dark text-white px-8 py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-200"
                size="lg"
              >
                <MessageCircle className="mr-2 h-5 w-5" />
                Customer Care
              </Button>
            </div>
          ) : (
            <ContactForm 
              onSuccess={handleFormSuccess}
              onCancel={() => setShowForm(false)}
            />
          )}
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default App;
