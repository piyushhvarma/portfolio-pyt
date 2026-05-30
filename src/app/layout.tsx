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
  keywords: [
    "piyush varma",
    "piyush varma murtizapur",
    "piyush varma akola",
    "piyush varma jaipur",
    "piyush varma manipal",
    "piyush varma muj",
    "piyush gopal varma",
    "pyt piyush",
    "piyushpyt",
    "piyush gopal varma maharashtra",
    "Software Engineer",
    "Web Developer",
    "AI/ML",
    "Full Stack Developer"
  ],
  authors: [
    {
      name: "Piyush Varma",
      url: DATA.url,
    },
  ],
  creator: "Piyush Varma",
  alternates: {
    canonical: DATA.url,
  },
  openGraph: {
    title: `${DATA.name}`,
    description: DATA.description,
    url: DATA.url,
    siteName: `${DATA.name}`,
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "/og.png",
        width: 1200,
        height: 630,
        alt: "Piyush Varma - Portfolio",
      },
    ],
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
    images: ["/og.png"],
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
import PageTransition from "@/components/page-transition";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebSite",
        "@id": `${DATA.url}/#website`,
        url: DATA.url,
        name: DATA.name,
        description: DATA.description,
        publisher: {
          "@id": `${DATA.url}/#person`,
        },
      },
      {
        "@type": "Person",
        "@id": `${DATA.url}/#person`,
        name: DATA.name,
        url: DATA.url,
        image: `${DATA.url}${DATA.avatarUrl}`,
        sameAs: [
          DATA.contact.social.GitHub.url,
          DATA.contact.social.LinkedIn.url,
          DATA.contact.social.X.url,
        ].filter(Boolean),
        jobTitle: "Software Engineer",
        homeLocation: [
          {
            "@type": "Place",
            name: "Jaipur, Rajasthan, India",
          },
          {
            "@type": "Place",
            name: "Murtizapur, Akola, Maharashtra, India",
          },
        ],
      },
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
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
                  <PageTransition>
                    {children}
                    <Footer />
                  </PageTransition>
                </div>
              </div>
            </div>
          </TooltipProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
