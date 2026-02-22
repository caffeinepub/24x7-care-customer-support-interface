import { Wrench } from 'lucide-react';

export function Header() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2">
              <img 
                src="/assets/generated/lg-logo.dim_180x60.png" 
                alt="LG Electronics" 
                className="h-10 w-auto"
              />
            </div>
            <Wrench className="h-5 w-5 text-primary" />
          </div>
          <div className="text-sm text-muted-foreground font-medium">
            Life's Good
          </div>
        </div>
      </div>
    </header>
  );
}
