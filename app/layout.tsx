import type { Metadata } from "next";
import { ThemeProvider } from "@/components/theme-provider";
import { NavBar } from "@/components/ui/navbar";

const navItems = [
  { name: "Home", url: "/", icon: "House" },
  { name: "Features", url: "#features", icon: "Zap" },
  { name: "How It Works", url: "#how-it-works", icon: "Play" },
  { name: "Technology", url: "#technology", icon: "Code" },
  { name: "FAQ", url: "#faq", icon: "HelpCircle" },
];
import "./globals.css";

export const metadata: Metadata = {
  title: "Checksy - Seamless Event Management Made Simple",
  description:
    "Discover, register, and check in effortlessly with Checksy. From instant QR tickets to offline access for workshops and hackathons.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning data-scroll-behavior="smooth">
      <head />
      <body>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <NavBar items={navItems} />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
