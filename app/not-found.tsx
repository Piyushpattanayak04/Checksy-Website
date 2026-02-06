"use client";

import { Home, Search } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import HackerBackground from "@/components/eldoraui/hackerbg";

export default function NotFound() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="relative min-h-screen w-full bg-black overflow-hidden">
      {/* Hacker Background */}
      <HackerBackground
        color="#00ff41"
        fontSize={16}
        speed={0.8}
        className="opacity-20"
      />

      {/* Content */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-4">
        <div className="mx-auto max-w-2xl text-center">
          {/* 404 Text */}
          <div className="mb-8">
            <h1 className="text-8xl md:text-9xl font-bold text-green-400 font-mono tracking-wider mb-4">
              404
            </h1>
            <div className="h-1 w-32 bg-green-400 mx-auto mb-6"></div>
          </div>

          {/* Error Message */}
          <div className="space-y-4 mb-8">
            <h2 className="text-2xl md:text-3xl font-bold text-white">
              Page Not Found
            </h2>
            <p className="text-lg text-white/75 leading-relaxed">
              The page you're looking for seems to have vanished into the
              digital void. Don't worry, even the best hackers get lost
              sometimes.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/"
              className="inline-flex items-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-base font-medium text-black hover:bg-green-500 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 focus:ring-offset-black"
            >
              <Home className="h-4 w-4" />
              Back to Home
            </Link>

            <Link
              href="/#features"
              className="inline-flex items-center gap-2 rounded-lg border border-green-400/30 bg-transparent px-6 py-3 text-base font-medium text-green-400 hover:bg-green-400/10 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-green-400/50 focus:ring-offset-2 focus:ring-offset-black"
            >
              <Search className="h-4 w-4" />
              Explore Features
            </Link>
          </div>

          {/* Additional Info */}
          <div className="mt-12 text-sm text-white/50">
            <p>Error Code: 404 | Checksy Event Management</p>
          </div>
        </div>
      </div>

      {/* Glitch Effect Overlay */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-2 h-32 bg-green-400/20 animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/3 w-1 h-24 bg-green-400/30 animate-pulse delay-300"></div>
        <div className="absolute top-2/3 left-2/3 w-3 h-16 bg-green-400/10 animate-pulse delay-700"></div>
      </div>
    </div>
  );
}
