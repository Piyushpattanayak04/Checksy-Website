"use client";

import { Minus, Plus } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { useState } from "react";

interface FAQItem {
  question: string;
  answer: string;
}

const faqData: FAQItem[] = [
  {
    question: "How does Checksy's QR code system work?",
    answer:
      "Checksy generates unique QR codes for each event ticket. Attendees simply scan the code at the venue for instant check-in. The system works offline and syncs when connectivity is restored, ensuring smooth entry even in areas with poor network coverage.",
  },
  {
    question: "Can I use Checksy for free events?",
    answer:
      "Absolutely! Checksy offers a free tier that's perfect for small events, community gatherings, and non-profit activities. You can manage up to 100 attendees per event with full access to our core features including QR tickets and basic analytics.",
  },
  {
    question: "What happens if there's no internet at my event?",
    answer:
      "Checksy is designed with offline-first functionality. All check-in data is stored locally on your device and automatically syncs when internet connection is restored. This ensures your event runs smoothly regardless of connectivity issues.",
  },
  {
    question: "How secure is attendee data?",
    answer:
      "We take security seriously. All data is encrypted in transit and at rest. We're GDPR compliant and follow industry best practices for data protection. Attendee information is only used for event management and is never shared with third parties.",
  },
  {
    question: "Can I customize the registration form?",
    answer:
      "Yes! Checksy allows you to create custom registration forms with the fields you need. Add custom questions, required fields, and even conditional logic to gather exactly the information you need for your event.",
  },
  {
    question: "What analytics and reporting features are available?",
    answer:
      "Checksy provides comprehensive analytics including real-time attendance tracking, check-in patterns, demographic insights, and custom reports. Export data in multiple formats and integrate with your existing tools via our API.",
  },
];

interface FAQItemProps {
  item: FAQItem;
  isOpen: boolean;
  onToggle: () => void;
}

function FAQItemComponent({ item, isOpen, onToggle }: FAQItemProps) {
  return (
    <div className="border-b border-white/10 last:border-b-0">
      <button
        type="button"
        onClick={onToggle}
        className="flex w-full items-center justify-between py-6 text-left transition-colors hover:text-white/90"
      >
        <h3 className="text-lg font-medium text-white pr-4">{item.question}</h3>
        <div className="flex-shrink-0">
          {isOpen ? (
            <Minus className="h-5 w-5 text-white/60" />
          ) : (
            <Plus className="h-5 w-5 text-white/60" />
          )}
        </div>
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            className="overflow-hidden"
          >
            <div className="pb-6 pr-12">
              <p className="text-white/75 leading-relaxed">{item.answer}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

export default function FAQSection() {
  const [openItems, setOpenItems] = useState<Set<number>>(new Set([0]));

  const toggleItem = (index: number) => {
    const newOpenItems = new Set(openItems);
    if (newOpenItems.has(index)) {
      newOpenItems.delete(index);
    } else {
      newOpenItems.add(index);
    }
    setOpenItems(newOpenItems);
  };

  return (
    <section className="relative w-full bg-black py-16 md:py-24 lg:py-32">
      <div className="mx-auto max-w-4xl px-6 md:px-10 lg:px-16">
        <div className="mb-12 text-center">
          <h2 className="text-3xl font-extralight tracking-tight text-white text-balance md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed tracking-tight text-white/75 text-balance md:text-base">
            Everything you need to know about Checksy
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          {faqData.map((item, index) => (
            <FAQItemComponent
              key={item.question}
              item={item}
              isOpen={openItems.has(index)}
              onToggle={() => toggleItem(index)}
            />
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-white/60 mb-4">Still have questions?</p>
          <a
            href="#contact"
            className="inline-flex items-center rounded-2xl border border-white/20 bg-white/10 px-6 py-3 text-sm font-light text-white transition-colors hover:bg-white/20 focus:outline-none focus:ring-2 focus:ring-white/30"
          >
            Get in touch
          </a>
        </div>
      </div>
    </section>
  );
}
