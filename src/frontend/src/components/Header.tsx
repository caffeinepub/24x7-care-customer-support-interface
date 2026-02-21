export function Header() {
  return (
    <header className="border-b border-border bg-card/50 backdrop-blur-sm">
      <div className="container mx-auto px-4 py-3">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <img 
              src="/assets/generated/24x7-care-logo-transparent.dim_200x200.png" 
              alt="24x7 Care" 
              className="h-8 w-auto"
            />
            <span className="text-lg font-semibold text-foreground">24x7 Care</span>
          </div>
          <div className="text-sm text-muted-foreground">
            Always here for you
          </div>
        </div>
      </div>
    </header>
  );
}
