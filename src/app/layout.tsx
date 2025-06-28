import type { Metadata } from "next";
import { Geist_Mono, Contrail_One } from "next/font/google";
import "./globals.css";
import { GoogleAnalytics } from "./components/analytics/GoogleAnalytics";

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const contrailOne = Contrail_One({
  variable: "--font-contrail-one",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL('https://whytilt.com'),
  title: "Tilt - Real intelligence. Real desktop. Real work.",
  keywords: [
    "automation",
    "AI automation",
    "task automation",
    "computer automation",
    "workflow automation",
    "business productivity",
    "AI assistant",
    "digital workforce",
    "Tilt",
  ],
  description:
    "Tilt is a digital worker that handles real computer tasks in the browser and on the desktop - just like a person would. No code. No scripts. Just done.",
  openGraph: {
    title: "Tilt - Real intelligence. Real desktop. Real work.",
    description: "Tilt is a digital worker that handles real computer tasks in the browser and on the desktop - just like a person would. No code. No scripts. Just done.",
    url: "https://whytilt.com",
    siteName: "Tilt",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "Tilt - Real intelligence. Real desktop. Real work.",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Tilt - Real intelligence. Real desktop. Real work.",
    description: "Tilt is a digital worker that handles real computer tasks in the browser and on the desktop - just like a person would. No code. No scripts. Just done.",
    images: ["/og-image.png"],
    creator: "@tiltapp",
    site: "@tiltapp",
  },
  icons: {
    icon: [
      {
        url: "/favicon.ico",
        sizes: "any",
      },
      {
        url: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        url: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      }
    ],
    apple: [
      {
        url: "/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      }
    ],
    other: [
      {
        rel: "android-chrome",
        url: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        rel: "android-chrome",
        url: "/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      }
    ]
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const gaId = process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID;
  
  return (
    <html lang="en">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1.0, viewport-fit=cover" />
      </head>
      <body
        className={`${geistMono.variable} ${contrailOne.variable} antialiased`}
      >
        {gaId && <GoogleAnalytics gaId={gaId} />}
        {children}
      </body>
    </html>
  );
}
