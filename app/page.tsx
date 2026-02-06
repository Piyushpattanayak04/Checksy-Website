"use client";
import {
  Box,
  Lock,
  Pencil,
  Search,
  Settings,
  Settings2,
  Sparkles,
  Zap,
} from "lucide-react";
import { motion, useReducedMotion } from "motion/react";
import CTASection from "@/components/cta-section";
import FAQ from "@/components/faq";
import Footer from "@/components/footer";
import { FeatureCard } from "@/components/grid-feature-cards";
import Hero from "@/components/hero";
import FeatureSteps from "@/components/mvpblocks/feature-2";
import { GlowingEffect } from "@/components/ui/glowing-effect";
import { cn } from "@/lib/utils";

const features = [
  {
    title: "Event Discovery",
    icon: Search,
    description:
      "Browse dynamic lists of upcoming events including hackathons, workshops, and seminars.",
  },
  {
    title: "Effortless Registration",
    icon: Pencil,
    description:
      "Clean and simple registration forms allow users to sign up for events in just a few taps.",
  },
  {
    title: "Secure Code Verification",
    icon: Lock,
    description:
      "Protected by a secret code system ensuring only authorized participants can join events.",
  },
  {
    title: "Instant Digital Tickets",
    icon: Zap,
    description:
      "Generate unique digital tickets with QR codes instantly upon registration.",
  },
  {
    title: "Offline Access",
    icon: Settings2,
    description:
      "Tickets are cached locally on your device, ensuring access even without internet connection.",
  },
  {
    title: "Profile Management",
    icon: Settings,
    description:
      "Manage personal information through a dedicated profile screen for faster registrations.",
  },
];

export default function Home() {
  return (
    <div className="min-h-screen w-full">
      {/* Hero Section */}
      <Hero
        title="Seamless Event Management Made Simple"
        description="Discover, register, and check in effortlessly with Checksy. From instant QR tickets to offline access, we make event experiences smoother for everyone."
        badgeText="Checksy"
        badgeLabel="New"
        ctaButtons={[
          { text: "Discover Features", href: "#features", primary: true },
          { text: "Download App", href: "/Checksy.apk", download: true },
        ]}
        microDetails={[
          "Secure check-in",
          "Instant QR tickets",
          "Offline access",
        ]}
      />

      {/* Feature Section */}
      <section
        id="features"
        className="relative min-h-screen w-full overflow-hidden bg-black"
      >
        {/* Simple black background like hero bottom */}
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

        <div className="relative mx-auto w-full max-w-5xl space-y-8 px-6 py-16 md:py-32 md:px-10 lg:px-16">
          <AnimatedContainer className="mx-auto max-w-3xl text-center">
            <h2 className="text-3xl font-extralight tracking-tight text-white text-balance md:text-4xl lg:text-5xl">
              Why Choose Checksy?
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed tracking-tight text-white/75 text-balance md:text-base">
              Everything you need for seamless event management and
              registration.
            </p>
          </AnimatedContainer>

          <AnimatedContainer
            delay={0.4}
            className="grid grid-cols-1 divide-x divide-y divide-dashed border border-white/10 sm:grid-cols-2 md:grid-cols-3"
          >
            {features.map((feature) => (
              <FeatureCard key={feature.title} feature={feature} />
            ))}
          </AnimatedContainer>
        </div>

        <div className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/40 to-transparent" />
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="relative w-full">
        <FeatureSteps />
      </section>

      {/* Past Events */}

      {/* Technology Section */}
      <section
        id="technology"
        className="relative w-full bg-black py-16 md:py-24"
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatedContainer className="mx-auto max-w-3xl text-center mb-12 md:mb-16">
            <h2 className="text-3xl font-extralight tracking-tight text-white text-balance md:text-4xl lg:text-5xl">
              Built With Modern Technology
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed tracking-tight text-white/75 text-balance md:text-base">
              Powered by cutting-edge mobile and cloud technologies
            </p>
          </AnimatedContainer>

          <ul className="grid grid-cols-1 grid-rows-none gap-4 md:grid-cols-12 md:grid-rows-3 lg:gap-4 xl:max-h-[34rem] xl:grid-rows-2">
            <GridItem
              area="md:[grid-area:1/1/2/7] xl:[grid-area:1/1/2/5]"
              icon={<Box className="h-4 w-4" />}
              title="Flutter Framework"
              description="Cross-platform development framework that enables native performance on both iOS and Android with a single codebase."
            />
            <GridItem
              area="md:[grid-area:1/7/2/13] xl:[grid-area:2/1/3/5]"
              icon={<Settings className="h-4 w-4" />}
              title="Firebase Authentication"
              description="Secure user authentication with email/password, social logins, and advanced security features."
            />
            <GridItem
              area="md:[grid-area:2/1/3/7] xl:[grid-area:1/5/3/8]"
              icon={<Lock className="h-4 w-4" />}
              title="Cloud Firestore"
              description="NoSQL document database for real-time data synchronization and offline support."
            />
            <GridItem
              area="md:[grid-area:2/7/3/13] xl:[grid-area:1/8/2/13]"
              icon={<Sparkles className="h-4 w-4" />}
              title="Local Storage"
              description="Shared preferences for caching tickets locally, ensuring offline access and improved user experience."
            />
            <GridItem
              area="md:[grid-area:3/1/4/13] xl:[grid-area:2/8/3/13]"
              icon={<Search className="h-4 w-4" />}
              title="Real-time Sync"
              description="Instant updates and synchronization across all devices for seamless event management."
            />
          </ul>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQ />

      {/* CTA Section */}
      <CTASection />

      {/* Footer Section */}
      <Footer />
    </div>
  );
}

type ViewAnimationProps = {
  delay?: number;
  className?: React.ComponentProps<typeof motion.div>["className"];
  children: React.ReactNode;
};

function AnimatedContainer({
  className,
  delay = 0.1,
  children,
}: ViewAnimationProps) {
  const shouldReduceMotion = useReducedMotion();

  if (shouldReduceMotion) {
    return children;
  }

  return (
    <motion.div
      initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
      whileInView={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

interface GridItemProps {
  area: string;
  icon: React.ReactNode;
  title: string;
  description: React.ReactNode;
}

const GridItem = ({ area, icon, title, description }: GridItemProps) => {
  return (
    <li className={cn("min-h-[14rem] list-none", area)}>
      <div className="relative h-full rounded-[1.25rem] border-[0.75px] border-border p-2 md:rounded-[1.5rem] md:p-3">
        <GlowingEffect
          spread={40}
          glow={true}
          disabled={false}
          proximity={64}
          inactiveZone={0.01}
          borderWidth={3}
        />
        <div className="relative flex h-full flex-col justify-between gap-6 overflow-hidden rounded-xl border-[0.75px] bg-background p-6 shadow-sm dark:shadow-[0px_0px_27px_0px_rgba(45,45,45,0.3)] md:p-6">
          <div className="relative flex flex-1 flex-col justify-between gap-3">
            <div className="w-fit rounded-lg border-[0.75px] border-border bg-muted p-2">
              {icon}
            </div>
            <div className="space-y-3">
              <h3 className="pt-0.5 text-xl leading-[1.375rem] font-semibold font-sans tracking-[-0.04em] md:text-2xl md:leading-[1.875rem] text-balance text-foreground">
                {title}
              </h3>
              <h2 className="[&_b]:md:font-semibold [&_strong]:md:font-semibold font-sans text-sm leading-[1.125rem] md:text-base md:leading-[1.375rem] text-muted-foreground">
                {description}
              </h2>
            </div>
          </div>
        </div>
      </div>
    </li>
  );
};
