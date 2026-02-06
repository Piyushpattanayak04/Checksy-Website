"use client";
import {
  ChartBarIncreasingIcon,
  Database,
  Fingerprint,
  IdCard,
} from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import { useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { BorderBeam } from "./ui/border-beam";

export default function faq() {
  type ImageKey = "item-1" | "item-2" | "item-3" | "item-4";
  const [activeItem, setActiveItem] = useState<ImageKey>("item-1");

  const images = {
    "item-1": {
      image: "/qr.png",
      alt: "QR code check-in process",
    },
    "item-2": {
      image: "/security.png",
      alt: "Security and data protection",
    },
    "item-3": {
      image: "/form.png",
      alt: "Custom registration forms",
    },
    "item-4": {
      image: "/dashboard.png",
      alt: "Event analytics dashboard",
    },
  };

  return (
    <section
      id="faq"
      className="relative w-full bg-black py-16 md:py-24 lg:py-32"
    >
      <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 lg:space-y-20">
        <div className="relative z-10 mx-auto max-w-2xl space-y-6 text-center">
          <h2 className="text-balance text-3xl font-extralight tracking-tight text-white md:text-4xl lg:text-5xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-sm font-light leading-relaxed tracking-tight text-white/75 text-balance md:text-base">
            Everything you need to know about Checksy's event management
            platform and features.
          </p>
        </div>

        <div className="grid gap-12 sm:px-12 md:grid-cols-2 lg:gap-20 lg:px-0">
          <Accordion
            type="single"
            value={activeItem}
            onValueChange={(value) => setActiveItem(value as ImageKey)}
            className="w-full"
          >
            <AccordionItem value="item-1">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Database className="size-4" />
                  How does QR code check-in work?
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Checksy generates unique QR codes for each event ticket.
                Attendees simply scan the code at the venue for instant
                check-in. The system works offline and syncs when connectivity
                is restored, ensuring smooth entry even in areas with poor
                network coverage.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <Fingerprint className="size-4" />
                  How does offline access work?
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Tickets are cached locally on your device using secure local
                storage. This means you can access your tickets even without
                internet connection at the event venue. Once connectivity is
                restored, all data syncs automatically with our cloud servers.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <IdCard className="size-4" />
                  What is the secret code system?
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Event organizers can set universal or user-specific secret codes
                to control access to their events. This ensures only authorized
                participants can register and join events, providing an extra
                layer of security for exclusive workshops and hackathons.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>
                <div className="flex items-center gap-2 text-base">
                  <ChartBarIncreasingIcon className="size-4" />
                  Can I manage my profile information?
                </div>
              </AccordionTrigger>
              <AccordionContent>
                Yes! Checksy includes a dedicated profile management screen
                where you can update your personal information, preferences, and
                registration details. This makes future event registrations
                faster and more convenient.
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          <div className="relative flex overflow-hidden rounded-3xl border border-white/10 bg-black/50 p-2">
            <div className="w-15 absolute inset-0 right-0 ml-auto border-l border-white/10 bg-[repeating-linear-gradient(-45deg,rgba(255,255,255,0.1),rgba(255,255,255,0.1)_1px,transparent_1px,transparent_8px)]"></div>
            <div className="aspect-76/59 relative w-[calc(3/4*100%+3rem)] rounded-2xl bg-black">
              <AnimatePresence mode="wait">
                <motion.div
                  key={`${activeItem}-id`}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  exit={{ opacity: 0, y: 6, scale: 0.98 }}
                  transition={{ duration: 0.2 }}
                  className="size-full overflow-hidden rounded-2xl border border-white/10 bg-black shadow-md"
                >
                  <Image
                    src={images[activeItem].image}
                    className="size-full object-cover object-left-top mix-blend-lighten"
                    alt={images[activeItem].alt}
                    width={1207}
                    height={929}
                  />
                </motion.div>
              </AnimatePresence>
            </div>
            <BorderBeam
              duration={6}
              size={200}
              className="from-transparent via-white/50 to-transparent"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
