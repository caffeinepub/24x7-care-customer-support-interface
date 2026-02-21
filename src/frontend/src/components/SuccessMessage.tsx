import { CheckCircle2, X } from 'lucide-react';
import { Alert, AlertDescription, AlertTitle } from './ui/alert';
import { Button } from './ui/button';

interface SuccessMessageProps {
  onClose: () => void;
}

export function SuccessMessage({ onClose }: SuccessMessageProps) {
  return (
    <Alert className="border-2 border-green-500/50 bg-green-50 dark:bg-green-950/20">
      <div className="flex items-start justify-between">
        <div className="flex items-start gap-3">
          <CheckCircle2 className="h-5 w-5 text-green-600 dark:text-green-400 mt-0.5" />
          <div>
            <AlertTitle className="text-green-900 dark:text-green-100 font-semibold">
              Message Sent Successfully!
            </AlertTitle>
            <AlertDescription className="text-green-800 dark:text-green-200 mt-1">
              Thank you for contacting us. We've received your message and will respond as soon as possible.
            </AlertDescription>
          </div>
        </div>
        <Button
          variant="ghost"
          size="icon"
          onClick={onClose}
          className="h-6 w-6 text-green-700 hover:text-green-900 dark:text-green-300 dark:hover:text-green-100"
        >
          <X className="h-4 w-4" />
        </Button>
      </div>
    </Alert>
  );
}
