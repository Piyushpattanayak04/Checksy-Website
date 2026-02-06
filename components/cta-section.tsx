import { ArrowRight, MessageCircle } from "lucide-react";
import { RainbowButton } from "@/components/ui/rainbow-button";

export default function CTASection() {
  return (
    <section className="relative w-full bg-black py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl border border-white/10 bg-gradient-to-br from-gray-900/50 to-black/50 p-8 md:p-12 lg:p-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-6">
              <h2 className="text-3xl font-extralight tracking-tight text-white text-balance md:text-4xl lg:text-5xl">
                Revolutionizing Event Management
              </h2>

              <p className="mt-4 text-sm font-light leading-relaxed tracking-tight text-white/75 text-balance md:text-base">
                Join thousands of users who trust Checksy for educational
                institutions, hackathons, and professional workshops.
              </p>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <RainbowButton variant="default" size="lg" asChild>
                  <a href="/Checksy.apk" download="Checksy.apk">
                    Download App
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </RainbowButton>

                <RainbowButton variant="outline" size="lg" asChild>
                  <a href="mailto:gdgiilmu@iilm.edu">
                    <MessageCircle className="h-4 w-4" />
                    Contact Support
                  </a>
                </RainbowButton>
              </div>
            </div>

            {/* Right Content - App Info */}
            <div className="space-y-6">
              <blockquote className="text-lg md:text-xl text-white/90 leading-relaxed">
                "Checksy has transformed how we manage our hackathons and
                workshops. The seamless registration and QR code system makes
                check-ins effortless for both organizers and participants."
              </blockquote>

              <div className="space-y-1">
                <div className="font-semibold text-white">Dev-Opify Team</div>
                <div className="text-sm text-white/60">
                  Event Management Specialists
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
