import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const faqs = [
  {
    question: 'What is the typical service turnaround time?',
    answer: 'Most repairs are completed within 24-48 hours. For complex issues requiring special parts, it may take 3-5 business days. Emergency services are available for urgent repairs.'
  },
  {
    question: 'Is my appliance covered under warranty?',
    answer: 'Warranty coverage depends on your appliance model and purchase date. We service both in-warranty and out-of-warranty appliances. Contact us with your model number to check warranty status.'
  },
  {
    question: 'Which areas do you service?',
    answer: 'We provide service across all major cities and surrounding areas. Our technicians are strategically located to ensure quick response times. Contact us to confirm service availability in your area.'
  },
  {
    question: 'How much does a service visit cost?',
    answer: 'Service costs vary based on the appliance type and issue complexity. We provide free diagnostics and transparent pricing before any work begins. In-warranty repairs are typically free of charge.'
  },
  {
    question: 'How do I schedule a service appointment?',
    answer: 'You can schedule service by filling out our online form, calling our 24/7 hotline, or emailing us. We offer flexible scheduling including same-day and weekend appointments based on availability.'
  }
];

export function FAQ() {
  return (
    <div className="max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="w-full">
        {faqs.map((faq, index) => (
          <AccordionItem key={index} value={`item-${index}`} className="border-border">
            <AccordionTrigger className="text-left text-lg font-medium hover:text-primary transition-colors">
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
