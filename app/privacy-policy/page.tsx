"use client";

import { motion } from "motion/react";
import { Shield, Mail, Clock, Users, Lock, Eye } from "lucide-react";

const PolicyPage = () => {
  return (
    <div className="min-h-screen w-full bg-black">
      {/* Hero Section */}
      <section className="relative w-full overflow-hidden bg-black">
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20" />

        <div className="relative mx-auto w-full max-w-4xl px-6 py-24 md:py-32 md:px-10 lg:px-16">
          <motion.div
            initial={{ filter: "blur(4px)", translateY: -8, opacity: 0 }}
            animate={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5 backdrop-blur-sm mb-6">
              <Shield className="h-3 w-3 text-white/70" />
              <span className="text-xs font-light tracking-tight text-white/80">
                Your Privacy Matters
              </span>
            </div>

            <h1 className="text-4xl font-extralight tracking-tight text-white text-balance md:text-5xl lg:text-6xl mb-6">
              Privacy Policy
            </h1>

            <p className="text-base font-light leading-relaxed tracking-tight text-white/75 text-balance md:text-lg max-w-2xl mx-auto">
              Learn how Clock-in protects your data and respects your privacy
              while delivering seamless event management experiences.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content Section */}
      <section className="relative w-full bg-black">
        <div className="mx-auto max-w-4xl px-6 py-16 md:px-10 lg:px-16">
          <motion.div
            initial={{ filter: "blur(4px)", translateY: 8, opacity: 0 }}
            animate={{ filter: "blur(0px)", translateY: 0, opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="prose prose-invert max-w-none"
          >
            {/* Overview */}
            <div className="mb-12 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <Eye className="h-5 w-5 text-white/70" />
                <h2 className="text-xl font-light text-white m-0">Overview</h2>
              </div>
              <p className="text-white/75 font-light leading-relaxed m-0">
                This privacy policy applies to the Clock-in app created by GDG,
                IILM University, Gr. Noida as a free service. This service is
                intended for use "AS IS".
              </p>
            </div>

            {/* Information Collection */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-6 w-6 text-white/70" />
                <h2 className="text-2xl font-extralight text-white m-0">
                  Information Collection and Use
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-white/75 font-light leading-relaxed">
                  The Application collects information when you download and use
                  it. This information may include:
                </p>

                <ul className="space-y-3 text-white/75 font-light">
                  <li className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40 mt-2.5 flex-shrink-0" />
                    Your device's Internet Protocol address (e.g. IP address)
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40 mt-2.5 flex-shrink-0" />
                    The pages of the Application that you visit, the time and
                    date of your visit, the time spent on those pages
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40 mt-2.5 flex-shrink-0" />
                    The time spent on the Application
                  </li>
                  <li className="flex items-start gap-3">
                    <span className="h-1.5 w-1.5 rounded-full bg-white/40 mt-2.5 flex-shrink-0" />
                    The operating system you use on your mobile device
                  </li>
                </ul>

                <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                  <p className="text-white/75 font-light leading-relaxed m-0">
                    <strong className="text-white">Note:</strong> The
                    Application does not gather precise information about the
                    location of your mobile device.
                  </p>
                </div>
              </div>
            </div>

            {/* Location Services */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="h-6 w-6 text-white/70" />
                <h2 className="text-2xl font-extralight text-white m-0">
                  Location Services
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-white/75 font-light leading-relaxed">
                  The Application collects your device's location to provide
                  enhanced features:
                </p>

                <div className="grid gap-4 md:grid-cols-3">
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                    <h3 className="text-white font-light text-lg mb-2">
                      Geolocation Services
                    </h3>
                    <p className="text-white/75 font-light text-sm leading-relaxed">
                      Provides personalized content and location-based services
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                    <h3 className="text-white font-light text-lg mb-2">
                      Analytics
                    </h3>
                    <p className="text-white/75 font-light text-sm leading-relaxed">
                      Helps analyze user behavior and improve app performance
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                    <h3 className="text-white font-light text-lg mb-2">
                      Third-Party Services
                    </h3>
                    <p className="text-white/75 font-light text-sm leading-relaxed">
                      Anonymized data helps enhance the application
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Personal Information */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-6 w-6 text-white/70" />
                <h2 className="text-2xl font-extralight text-white m-0">
                  Personal Information
                </h2>
              </div>

              <p className="text-white/75 font-light leading-relaxed mb-4">
                For a better experience, we may require you to provide certain
                personally identifiable information, including:
              </p>

              <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-4">
                {["Email", "Name", "College Name", "Gender", "Age"].map(
                  (item) => (
                    <div
                      key={item}
                      className="p-3 rounded-lg border border-white/10 bg-white/5 text-center"
                    >
                      <span className="text-white/75 font-light text-sm">
                        {item}
                      </span>
                    </div>
                  ),
                )}
              </div>
            </div>

            {/* Third Party Access */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-white/70" />
                <h2 className="text-2xl font-extralight text-white m-0">
                  Third Party Access
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-white/75 font-light leading-relaxed">
                  Only aggregated, anonymized data is periodically transmitted
                  to external services to aid in improving the Application.
                </p>

                <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                  <h3 className="text-white font-light text-lg mb-3">
                    Third-party service providers:
                  </h3>
                  <a
                    href="https://firebase.google.com/support/privacy"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:text-blue-300 transition-colors font-light"
                  >
                    Google Analytics for Firebase
                  </a>
                </div>
              </div>
            </div>

            {/* Data Retention */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Clock className="h-6 w-6 text-white/70" />
                <h2 className="text-2xl font-extralight text-white m-0">
                  Data Retention Policy
                </h2>
              </div>

              <p className="text-white/75 font-light leading-relaxed">
                We will retain your data for as long as you use the Application
                and for a reasonable time thereafter. To request data deletion,
                contact us at{" "}
                <a
                  href="mailto:gdgiilmu@iilm.edu"
                  className="text-blue-400 hover:text-blue-300 transition-colors"
                >
                  gdgiilmu@iilm.edu
                </a>
              </p>
            </div>

            {/* Children's Privacy */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Users className="h-6 w-6 text-white/70" />
                <h2 className="text-2xl font-extralight text-white m-0">
                  Children's Privacy
                </h2>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                <p className="text-white/75 font-light leading-relaxed m-0">
                  This Application does not address anyone under the age of 13.
                  We do not knowingly collect personally identifiable
                  information from children under 13 years of age.
                </p>
              </div>
            </div>

            {/* Security */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Lock className="h-6 w-6 text-white/70" />
                <h2 className="text-2xl font-extralight text-white m-0">
                  Security
                </h2>
              </div>

              <p className="text-white/75 font-light leading-relaxed">
                We are concerned about safeguarding the confidentiality of your
                information. We provide physical, electronic, and procedural
                safeguards to protect information we process and maintain.
              </p>
            </div>

            {/* Contact */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Mail className="h-6 w-6 text-white/70" />
                <h2 className="text-2xl font-extralight text-white m-0">
                  Contact Us
                </h2>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                <p className="text-white/75 font-light leading-relaxed mb-4">
                  If you have any questions regarding privacy while using the
                  Application, please contact us:
                </p>
                <a
                  href="mailto:gdgiilmu@iilm.edu"
                  className="inline-flex items-center gap-2 text-blue-400 hover:text-blue-300 transition-colors font-light"
                >
                  <Mail className="h-4 w-4" />
                  gdgiilmu@iilm.edu
                </a>
              </div>
            </div>

            {/* Footer */}
            <div className="pt-8 border-t border-white/10">
              <p className="text-white/60 font-light text-sm text-center">
                This privacy policy is effective as of November 5, 2025
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default PolicyPage;
