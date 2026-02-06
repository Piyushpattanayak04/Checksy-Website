"use client";

import { motion } from "motion/react";
import {
  FileText,
  Mail,
  AlertTriangle,
  Smartphone,
  Wifi,
  Shield,
  RefreshCw,
} from "lucide-react";

const TermsPage = () => {
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
              <FileText className="h-3 w-3 text-white/70" />
              <span className="text-xs font-light tracking-tight text-white/80">
                Terms of Service
              </span>
            </div>

            <h1 className="text-4xl font-extralight tracking-tight text-white text-balance md:text-5xl lg:text-6xl mb-6">
              Terms & Conditions
            </h1>

            <p className="text-base font-light leading-relaxed tracking-tight text-white/75 text-balance md:text-lg max-w-2xl mx-auto">
              Please read these terms carefully before using Checksy. By using
              our application, you agree to these terms and conditions.
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
            {/* Agreement */}
            <div className="mb-12 p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur-sm">
              <div className="flex items-center gap-3 mb-4">
                <FileText className="h-5 w-5 text-white/70" />
                <h2 className="text-xl font-light text-white m-0">Agreement</h2>
              </div>
              <p className="text-white/75 font-light leading-relaxed m-0">
                These terms and conditions apply to the Checksy app created by
                GDG, IILM University, Gr. Noida as a free service. Upon
                downloading or utilizing the Application, you automatically
                agree to these terms.
              </p>
            </div>

            {/* Intellectual Property */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-white/70" />
                <h2 className="text-2xl font-extralight text-white m-0">
                  Intellectual Property
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-white/75 font-light leading-relaxed">
                  Unauthorized copying, modification of the Application, any
                  part of the Application, or our trademarks is strictly
                  prohibited.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 rounded-xl border border-red-500/20 bg-red-500/5">
                    <h3 className="text-red-400 font-light text-lg mb-2">
                      Prohibited Actions
                    </h3>
                    <ul className="space-y-2 text-white/75 font-light text-sm">
                      <li className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                        Extract source code
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                        Translate the application
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="h-1.5 w-1.5 rounded-full bg-red-400 mt-2 flex-shrink-0" />
                        Create derivative versions
                      </li>
                    </ul>
                  </div>
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                    <h3 className="text-white font-light text-lg mb-2">
                      Protected Rights
                    </h3>
                    <p className="text-white/75 font-light text-sm leading-relaxed">
                      All trademarks, copyrights, database rights, and
                      intellectual property remain the property of the Service
                      Provider.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Modifications */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <RefreshCw className="h-6 w-6 text-white/70" />
                <h2 className="text-2xl font-extralight text-white m-0">
                  Service Modifications
                </h2>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                <p className="text-white/75 font-light leading-relaxed m-0">
                  The Service Provider reserves the right to modify the
                  Application or charge for services at any time. Any charges
                  will be clearly communicated to you in advance.
                </p>
              </div>
            </div>

            {/* Data & Security */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Smartphone className="h-6 w-6 text-white/70" />
                <h2 className="text-2xl font-extralight text-white m-0">
                  Data & Security
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-white/75 font-light leading-relaxed">
                  The Application stores and processes personal data you provide
                  to deliver our service. You are responsible for maintaining
                  device security.
                </p>

                <div className="p-4 rounded-xl border border-yellow-500/20 bg-yellow-500/5">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="h-5 w-5 text-yellow-400 mt-0.5 flex-shrink-0" />
                    <div>
                      <h3 className="text-yellow-400 font-light text-lg mb-2">
                        Security Warning
                      </h3>
                      <p className="text-white/75 font-light text-sm leading-relaxed">
                        We strongly advise against jailbreaking or rooting your
                        device. Such actions could expose your phone to malware
                        and may result in the Application not functioning
                        correctly.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Third-Party Services */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Shield className="h-6 w-6 text-white/70" />
                <h2 className="text-2xl font-extralight text-white m-0">
                  Third-Party Services
                </h2>
              </div>

              <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                <h3 className="text-white font-light text-lg mb-3">
                  Third-party service providers:
                </h3>
                <a
                  href="https://www.google.com/analytics/terms/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:text-blue-300 transition-colors font-light"
                >
                  Google Analytics for Firebase
                </a>
              </div>
            </div>

            {/* Internet Connection */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <Wifi className="h-6 w-6 text-white/70" />
                <h2 className="text-2xl font-extralight text-white m-0">
                  Internet Connection & Data Usage
                </h2>
              </div>

              <div className="space-y-6">
                <p className="text-white/75 font-light leading-relaxed">
                  Some functions require an active internet connection via Wi-Fi
                  or mobile network. The Service Provider is not responsible for
                  limited functionality due to connectivity issues.
                </p>

                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                    <h3 className="text-white font-light text-lg mb-2">
                      Data Charges
                    </h3>
                    <p className="text-white/75 font-light text-sm leading-relaxed">
                      You accept responsibility for data usage charges from your
                      mobile provider, including roaming charges.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                    <h3 className="text-white font-light text-lg mb-2">
                      Device Responsibility
                    </h3>
                    <p className="text-white/75 font-light text-sm leading-relaxed">
                      Ensure your device remains charged. We're not responsible
                      if you can't access the service due to battery issues.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Service Reliability */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <AlertTriangle className="h-6 w-6 text-white/70" />
                <h2 className="text-2xl font-extralight text-white m-0">
                  Service Reliability
                </h2>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                <p className="text-white/75 font-light leading-relaxed m-0">
                  While we strive to keep the application updated and accurate,
                  we rely on third parties for some information. The Service
                  Provider accepts no liability for any loss resulting from
                  relying on this functionality.
                </p>
              </div>
            </div>

            {/* Updates & Termination */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <RefreshCw className="h-6 w-6 text-white/70" />
                <h2 className="text-2xl font-extralight text-white m-0">
                  Updates & Termination
                </h2>
              </div>

              <div className="space-y-6">
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                    <h3 className="text-white font-light text-lg mb-2">
                      Application Updates
                    </h3>
                    <p className="text-white/75 font-light text-sm leading-relaxed">
                      We may update the application based on OS requirements.
                      You agree to accept updates when offered.
                    </p>
                  </div>
                  <div className="p-4 rounded-xl border border-white/10 bg-white/5">
                    <h3 className="text-white font-light text-lg mb-2">
                      Service Termination
                    </h3>
                    <p className="text-white/75 font-light text-sm leading-relaxed">
                      We may cease providing the application at any time without
                      notice. Upon termination, you must stop using the app.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Changes to Terms */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <FileText className="h-6 w-6 text-white/70" />
                <h2 className="text-2xl font-extralight text-white m-0">
                  Changes to These Terms
                </h2>
              </div>

              <div className="p-6 rounded-xl border border-white/10 bg-white/5">
                <p className="text-white/75 font-light leading-relaxed m-0">
                  We may periodically update these Terms and Conditions. You are
                  advised to review this page regularly. We will notify you of
                  changes by posting the new terms on this page.
                </p>
              </div>
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
                  If you have any questions or suggestions about these Terms and
                  Conditions, please contact us:
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
              <p className="text-white/60 font-light text-sm text-center mb-4">
                These terms and conditions are effective as of November 5, 2025
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default TermsPage;
