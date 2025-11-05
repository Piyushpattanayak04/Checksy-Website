"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Pause, Play, QrCode, Search, Ticket, UserPlus } from "lucide-react";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

const features = [
  {
    step: "Step 1",
    title: "Discover Events",
    content:
      "Browse through a curated list of upcoming hackathons, workshops, and seminars in your area.",
    icon: <Search className="text-primary h-6 w-6" />,
    image:
      "https://images.unsplash.com/photo-1540575467063-178a50c2df87?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 2",
    title: "Register Instantly",
    content:
      "Sign up for events with our streamlined registration process. Just enter your details and you're in.",
    icon: <UserPlus className="text-primary h-6 w-6" />,
    image:
      "https://images.unsplash.com/photo-1556761175-b413da4baf72?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 3",
    title: "Get Your Ticket",
    content:
      "Receive your unique QR code ticket instantly. Access it anytime, even offline.",
    icon: <Ticket className="text-primary h-6 w-6" />,
    image:
      "https://images.unsplash.com/photo-1586953208448-b95a79798f07?q=80&w=2070&auto=format&fit=crop",
  },
  {
    step: "Step 4",
    title: "Check In Seamlessly",
    content:
      "Show your QR code at the event for instant check-in. No hassle, no waiting in long lines.",
    icon: <QrCode className="text-primary h-6 w-6" />,
    image:
      "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?q=80&w=2070&auto=format&fit=crop",
  },
];

export default function FeatureSteps() {
  const [currentFeature, setCurrentFeature] = useState(0);
  const [progress, setProgress] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [userInteracted, setUserInteracted] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      if (progress < 100) {
        setProgress((prev) => prev + 100 / (4000 / 100));
      } else {
        setCurrentFeature((prev) => (prev + 1) % features.length);
        setProgress(0);
      }
    }, 100);

    return () => clearInterval(timer);
  }, [progress, isAutoPlaying]);

  const handleFeatureClick = (index: number) => {
    setCurrentFeature(index);
    setProgress(0);
    setUserInteracted(true);
    setIsAutoPlaying(false);

    // Resume auto-play after 10 seconds of inactivity
    setTimeout(() => {
      if (userInteracted) {
        setIsAutoPlaying(true);
        setUserInteracted(false);
      }
    }, 10000);
  };

  return (
    <div className={"p-8 md:p-12 bg-black"}>
      <div className="mx-auto w-full max-w-7xl">
        <div className="relative mx-auto mb-12 max-w-2xl sm:text-center">
          <div className="relative z-10">
            <h2 className="text-3xl font-extralight tracking-tight text-white text-balance md:text-4xl lg:text-5xl">
              How Clock-in Works
            </h2>
            <p className="mt-4 text-sm font-light leading-relaxed tracking-tight text-white/75 text-balance md:text-base">
              From discovery to check-in, Clock-in makes event management
              effortless in just four simple steps.
            </p>
          </div>
          <div
            className="absolute inset-0 mx-auto h-44 max-w-xs blur-[118px]"
            style={{
              background:
                "linear-gradient(152.92deg, rgba(192, 15, 102, 0.2) 4.54%, rgba(192, 11, 109, 0.26) 34.2%, rgba(192, 15, 102, 0.1) 77.55%)",
            }}
          ></div>
        </div>

        {/* Controls */}
        <div className="flex justify-center items-center mb-8 gap-4">
          {/* Progress indicators */}
          <div className="flex gap-2">
            {features.map((_, index) => (
              <button
                key={index}
                onClick={() => handleFeatureClick(index)}
                className={cn(
                  "h-2 rounded-full transition-all duration-300 relative overflow-hidden",
                  index === currentFeature
                    ? "w-8 bg-primary/30"
                    : "w-2 bg-white/30 hover:bg-white/50",
                )}
              >
                {index === currentFeature && isAutoPlaying && (
                  <div
                    className="absolute left-0 top-0 h-full bg-primary rounded-full transition-all duration-100"
                    style={{ width: `${progress}%` }}
                  />
                )}
                {index === currentFeature && !isAutoPlaying && (
                  <div className="absolute left-0 top-0 h-full w-full bg-primary rounded-full" />
                )}
              </button>
            ))}
          </div>

          {/* Play/Pause button */}
          <button
            onClick={() => {
              setIsAutoPlaying(!isAutoPlaying);
              setUserInteracted(false);
            }}
            className="flex items-center justify-center w-8 h-8 rounded-full bg-white/10 hover:bg-white/20 transition-colors border border-white/20"
          >
            {isAutoPlaying ? (
              <Pause className="w-4 h-4 text-white" />
            ) : (
              <Play className="w-4 h-4 text-white ml-0.5" />
            )}
          </button>
        </div>

        <div className="flex flex-col gap-6 md:grid md:grid-cols-2 md:gap-10">
          <div className="order-2 space-y-8 md:order-1">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-6 md:gap-8 cursor-pointer group"
                initial={{ opacity: 0.3, x: -20 }}
                animate={{
                  opacity: index === currentFeature ? 1 : 0.3,
                  x: 0,
                  scale: index === currentFeature ? 1.05 : 1,
                }}
                transition={{ duration: 0.5 }}
                onClick={() => handleFeatureClick(index)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <motion.div
                  className={cn(
                    "flex h-12 w-12 items-center justify-center rounded-full border-2 md:h-14 md:w-14 transition-all duration-300",
                    index === currentFeature
                      ? "border-primary bg-primary/10 text-primary scale-110 [box-shadow:0_0_15px_rgba(192,15,102,0.3)]"
                      : "border-white/30 bg-white/10 text-white/60 group-hover:border-white/50 group-hover:bg-white/15",
                  )}
                >
                  {feature.icon}
                </motion.div>

                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white md:text-2xl group-hover:text-white/90 transition-colors">
                    {feature.title}
                  </h3>
                  <p className="text-white/75 text-sm md:text-base group-hover:text-white/85 transition-colors">
                    {feature.content}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>

          <div
            className={cn(
              "border-primary/20 relative order-1 h-[200px] overflow-hidden rounded-xl border [box-shadow:0_5px_30px_-15px_rgba(192,15,102,0.3)] md:order-2 md:h-[300px] lg:h-[400px]",
            )}
          >
            <AnimatePresence mode="wait">
              {features.map(
                (feature, index) =>
                  index === currentFeature && (
                    <motion.div
                      key={index}
                      className="absolute inset-0 overflow-hidden rounded-lg"
                      initial={{ y: 100, opacity: 0, rotateX: -20 }}
                      animate={{ y: 0, opacity: 1, rotateX: 0 }}
                      exit={{ y: -100, opacity: 0, rotateX: 20 }}
                      transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                      <img
                        src={feature.image}
                        alt={feature.title}
                        className="h-full w-full transform object-cover transition-transform hover:scale-105"
                        width={1000}
                        height={500}
                      />
                      <div className="from-background via-background/50 absolute right-0 bottom-0 left-0 h-2/3 bg-gradient-to-t to-transparent" />

                      <div className="bg-black/80 absolute bottom-4 left-4 rounded-lg p-2 backdrop-blur-sm">
                        <span className="text-primary text-xs font-medium">
                          {feature.step}
                        </span>
                      </div>
                    </motion.div>
                  ),
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </div>
  );
}
