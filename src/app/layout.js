import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import ModernFooter from "./components/ModernFooter";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://www.delhigirl.in";
const defaultOgImage = "/Webpimages/JwMarriott_CP.webp";

export const metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Delhi Girl – Premium Escort Service in Delhi | Trusted Companions",
    template: "%s | Delhi Girl",
  },
  description:
    "Delhi Girl offers premium, verified escort service in Delhi with trusted companions across hotels, homes, Gurgaon, Noida, and Aerocity. Book discreetly, 24x7.",
  keywords: [
    "escort service in Delhi",
    "call girls in Delhi",
    "Delhi escorts",
    "Aerocity escorts",
    "Gurgaon call girls",
    "Noida call girls",
  ],
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
    },
  },
  alternates: {
    canonical: "/",
  },
  openGraph: {
    siteName: "Delhi Girl",
    type: "website",
    locale: "en_IN",
    url: siteUrl,
    images: [{ url: defaultOgImage, width: 1000, height: 686 }],
  },
  twitter: {
    card: "summary_large_image",
    images: [defaultOgImage],
  },
  icons: {
    icon: "/favicon.svg",
    shortcut: "/favicon.svg",
    apple: "/favicon.svg",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#db2777",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Delhi Girl",
              url: siteUrl,
              image: `${siteUrl}${defaultOgImage}`,
              telephone: "+91-8826482370",
              areaServed: ["Delhi", "Gurgaon", "Noida", "Aerocity", "NCR"],
              address: {
                "@type": "PostalAddress",
                addressLocality: "Delhi",
                addressRegion: "Delhi",
                addressCountry: "IN",
              },
            }),
          }}
        />
        <Navbar />
        {children}
        <ModernFooter />
      </body>
    </html>
  );
}
