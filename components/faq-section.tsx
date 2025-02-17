import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { ChevronDown } from "lucide-react";

export function FaqSection() {
  const faqs = [
    {
      question: "What documents do I need to rent a car in Sarajevo?",
      answer:
        "You'll need a valid driver's license, passport, and a credit card for the deposit. Some rental companies may require an International Driving Permit.",
    },
    {
      question: "Is it safe to drive in Sarajevo?",
      answer:
        "Yes, driving in Sarajevo is generally safe. However, be prepared for narrow streets in the old town and always follow local traffic rules.",
    },
    {
      question: "Can I take the rental car outside of Bosnia and Herzegovina?",
      answer:
        "This depends on the rental company's policy. Many allow travel to neighboring countries, but you should inform them in advance and may need to pay an additional fee.",
    },
    {
      question: "What type of car is best for exploring Sarajevo and its surroundings?",
      answer:
        "A compact or midsize car is ideal for navigating city streets. If you plan on exploring mountain roads, consider renting an SUV or a car with higher ground clearance.",
    },
    {
      question: "Are there any specific driving rules I should be aware of in Sarajevo?",
      answer:
        "Yes, always carry your driver's license, car registration, and insurance documents. Headlights must be on at all times, even during the day. The blood alcohol limit is 0.03%, so it's best to avoid drinking if you plan to drive.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50"> {/* Light gray background for modern look */}
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-primary mb-8"> {/* Larger, bold heading with primary color */}
          Frequently Asked Questions
        </h2>
        <Accordion type="single" collapsible className="w-full max-w-3xl mx-auto"> {/* Single accordion, collapsible, centered */}
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`} className="border-b border-gray-200 last:border-b-0"> {/* Border between items */}
              <AccordionTrigger className="flex justify-between items-center text-left text-lg font-medium text-muted-foreground hover:text-primary focus:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"> {/* Styled trigger with hover and focus effects */}
                {faq.question}
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground mt-4"> {/* Margin-top for spacing */}
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
}