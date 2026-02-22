import { CheckCircle2, X } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Button } from './ui/button';

interface SuccessMessageProps {
  onClose: () => void;
}

export function SuccessMessage({ onClose }: SuccessMessageProps) {
  return (
    <Alert className="border-2 border-primary/30 bg-primary/5">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-primary mt-0.5" />
          <div>
            <AlertTitle className="text-foreground font-semibold">
              Message Sent Successfully!
            </AlertTitle>
            <AlertDescription className="text-muted-foreground mt-1">
              Thank you for contacting us. We've received your message and will respond as soon as possible.
            </AlertDescription>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="h-6 w-6 text-muted-foreground hover:text-foreground"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </Alert>
  );
}
