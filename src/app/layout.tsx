import Navbar from "@/components/navbar";
import { ThemeProvider } from "@/components/theme-provider";
import { TooltipProvider } from "@/components/ui/tooltip";
import { DATA } from "@/data/resume";
import { cn } from "@/lib/utils";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
  variable: "--font-sans",
  weight: ["400", "500", "600", "700"],
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-mono",
});

export const metadata: Metadata = {
  metadataBase: new URL(DATA.url),
  title: {
    default: DATA.name,
    template: `%s | ${DATA.name}`,
  },
  description: DATA.description,
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  twitter: {
    title: `${DATA.name}`,
    card: "summary_large_image",
  },
  verification: {
    google: "",
    yandex: "",
  },
  icons: {
    icon: "/favicon.png",
  },
};

import Footer from "@/components/footer";
import Script from "next/script";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <Script
          defer
          src="https://cloud.umami.is/script.js"
          data-website-id="a9f68a17-b958-4679-a7cc-d2eef9d2ed48"
        />
      </head>
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased relative",
          geist.variable,
          geistMono.variable
        )}
      >
        <ThemeProvider attribute="class" defaultTheme="light">
          <TooltipProvider delayDuration={0}>
            <Navbar />
            <div className="relative z-10 max-w-3xl mx-auto py-6 pb-24 sm:py-12 px-4 sm:px-6">
              <div className="relative isolate w-full rounded-3xl sm:rounded-[2.5rem] p-6 md:p-8 
                bg-white/50 backdrop-blur-3xl 
                border-2 border-white/60 
                shadow-[0_8px_32px_rgba(0,0,0,0.04),inset_0_0_32px_rgba(255,255,255,0.8)] 
                dark:bg-white/10 dark:border-white/20 
                dark:shadow-[0_8px_32px_rgba(0,0,0,0.4),inset_0_0_32px_rgba(255,255,255,0.05)]
                transition-all duration-500 ease-in-out">
                {/* Content */}
                <div className="relative z-10 w-full h-full">
                  {children}
                  <Footer />
                </div>
              </div>
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
