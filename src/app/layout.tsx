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
  title: "Tilt - AI that actually does the work",
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
    "Tilt automates real computer tasks so your team can stop clicking and start creating. AI that logs in, follows steps, and gets work done.",
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
