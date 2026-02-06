"use client";

import { motion } from "framer-motion";
import {
  Code,
  Download,
  HelpCircle,
  House,
  type LucideIcon,
  Play,
  Zap,
} from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { RainbowButton } from "@/components/ui/rainbow-button";

const iconMap: Record<string, LucideIcon> = {
  House,
  Zap,
  Play,
  Code,
  Download,
  HelpCircle,
};

interface NavItem {
  name: string;
  url: string;
  icon: string;
}

interface NavBarProps {
  items: NavItem[];
  className?: string;
}

export function NavBar({ items, className }: NavBarProps) {
  const [activeTab, setActiveTab] = useState(items[0].name);
  const [_isMobile, setIsMobile] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    handleResize();
    handleScroll();
    window.addEventListener("resize", handleResize);
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      {/* Desktop Navbar */}
      <div
        className={cn(
          "fixed top-0 left-0 right-0 z-50 transition-all duration-300 hidden md:block",
          scrolled
            ? "bg-black/90 backdrop-blur-lg border-b border-white/10"
            : "bg-transparent",
          className,
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <Link href="/" className="flex items-center space-x-2">
              <Image
                src="/logo.png"
                alt="Checksy Logo"
                width={32}
                height={32}
                className="w-8 h-8"
              />
              <span className="text-white font-bold text-xl">Checksy</span>
            </Link>

            {/* Navigation Links */}
            <div className="flex items-center space-x-1">
              {items.map((item) => {
                const Icon = iconMap[item.icon];
                const isActive = activeTab === item.name;

                return (
                  <Link
                    key={item.name}
                    href={item.url}
                    onClick={() => setActiveTab(item.name)}
                    className={cn(
                      "relative px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200",
                      "text-white/80 hover:text-white hover:bg-white/10",
                      isActive &&
                        "text-white bg-white/20 border border-white/30",
                    )}
                  >
                    <span className="flex items-center gap-2">
                      <Icon size={16} />
                      {item.name}
                    </span>
                  </Link>
                );
              })}
            </div>

            {/* Download Button */}
            <RainbowButton variant="default" size="sm" asChild>
              <a href="/Checksy.apk" download="Checksy.apk">
                Download App
              </a>
            </RainbowButton>
          </div>
        </div>
      </div>

      {/* Mobile Navbar */}
      <div
        className={cn(
          "fixed bottom-0 left-1/2 -translate-x-1/2 z-50 mb-6 md:hidden",
          className,
        )}
      >
        <div className="flex items-center gap-2 bg-black/80 border border-white/20 backdrop-blur-lg py-2 px-3 rounded-full shadow-lg">
          {items.map((item) => {
            const Icon = iconMap[item.icon];
            const isActive = activeTab === item.name;

            return (
              <Link
                key={item.name}
                href={item.url}
                onClick={() => setActiveTab(item.name)}
                className={cn(
                  "relative cursor-pointer p-3 rounded-full transition-all duration-200",
                  "text-white/70 hover:text-white",
                  isActive && "bg-white/20 text-white",
                )}
              >
                <Icon size={18} strokeWidth={2.5} />
                {isActive && (
                  <motion.div
                    layoutId="mobile-active"
                    className="absolute inset-0 bg-white/10 rounded-full -z-10"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 300,
                      damping: 30,
                    }}
                  />
                )}
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}
