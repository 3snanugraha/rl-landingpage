import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const siteUrl = "https://rumahlaptopbandung.my.id"; // Update with your actual domain

export const metadata: Metadata = {
  title: {
    default: "Rumah Laptop Bandung - Jual Laptop Bekas Harga Terbaik",
    template: "%s | Rumah Laptop Bandung"
  },
  description: "Jual laptop bekas dengan harga terbaik di Bandung. Proses cepat 15 menit, bayar cash langsung, harga tertinggi dijamin. Hubungi WA: +62 813-2069-2038",
  keywords: [
    "jual laptop bekas bandung",
    "laptop second bandung",
    "rumah laptop bandung",
    "jual laptop cepat",
    "harga laptop bekas",
    "beli laptop bekas",
    "laptop gaming bekas",
    "macbook bekas bandung",
    "laptop murah bandung",
    "service laptop bandung"
  ],
  authors: [{ name: "Rumah Laptop Bandung" }],
  creator: "Rumah Laptop Bandung",
  publisher: "Rumah Laptop Bandung",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL(siteUrl),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Rumah Laptop Bandung - Jual Laptop Bekas Harga Terbaik",
    description: "Jual laptop bekas dengan harga terbaik di Bandung. Proses cepat 15 menit, bayar cash langsung, harga tertinggi dijamin. Hubungi WA: +62 813-2069-2038",
    url: siteUrl,
    siteName: "Rumah Laptop Bandung",
    images: [
      {
        url: "/logo.png",
        width: 800,
        height: 600,
        alt: "Rumah Laptop Bandung Logo",
      },
    ],
    locale: "id_ID",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rumah Laptop Bandung - Jual Laptop Bekas Harga Terbaik",
    description: "Jual laptop bekas dengan harga terbaik di Bandung. Proses cepat 15 menit, bayar cash langsung, harga tertinggi dijamin.",
    images: ["/logo.png"],
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
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
    apple: "/apple-touch-icon.png",
    other: [
      {
        rel: "icon",
        type: "image/png",
        sizes: "192x192",
        url: "/icon-192x192.png",
      },
      {
        rel: "icon",
        type: "image/png",
        sizes: "512x512",
        url: "/icon-512x512.png",
      },
    ],
  },
  manifest: "/manifest.json",
  verification: {
    // google: "your-google-verification-code",
    // yandex: "your-yandex-verification-code",
    // yahoo: "your-yahoo-verification-code",
  },
  category: "technology",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* Additional SEO meta tags */}
        <meta name="theme-color" content="#bf6f1f" />
        <meta name="msapplication-TileColor" content="#bf6f1f" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        
        {/* Geo tags */}
        <meta name="geo.region" content="ID-JB" />
        <meta name="geo.placename" content="Bandung" />
        <meta name="geo.position" content="-6.9175,107.6191" />
        <meta name="ICBM" content="-6.9175,107.6191" />
        
        {/* Business info */}
        <meta name="rating" content="general" />
        <meta name="revisit-after" content="7 days" />
        <meta name="distribution" content="global" />
        
        {/* Business-specific meta tags */}
        <meta name="business:contact_data:street_address" content="Jl. Babakan Kajaksan No.7, Ciseureuh" />
        <meta name="business:contact_data:locality" content="Bandung" />
        <meta name="business:contact_data:region" content="Jawa Barat" />
        <meta name="business:contact_data:postal_code" content="40255" />
        <meta name="business:contact_data:country_name" content="Indonesia" />
        <meta name="business:contact_data:phone_number" content="+62 813-2069-2038" />
        <meta name="business:contact_data:website" content="https://rumahlaptopbandung.my.id" />
        
        {/* Service-specific tags */}
        <meta name="product" content="Laptop Bekas, MacBook Bekas, Gaming Laptop" />
        <meta name="service" content="Jual Beli Laptop Bekas" />
        <meta name="category" content="Electronics, Computer Hardware" />
        <meta name="price" content="Harga Bersaing" />
        
        {/* Local business tags */}
        <meta name="locality" content="Bandung" />
        <meta name="region" content="Jawa Barat" />
        <meta name="country" content="Indonesia" />
        <meta name="currency" content="IDR" />
        
        {/* Additional SEO tags */}
        <meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
        <meta name="googlebot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        <meta name="bingbot" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        <meta name="slurp" content="index, follow, max-video-preview:-1, max-image-preview:large, max-snippet:-1" />
        
        {/* Structured Data - JSON-LD */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Organization",
                "name": "Rumah Laptop Bandung",
                "url": "https://rumahlaptopbandung.my.id",
                "logo": "https://rumahlaptopbandung.my.id/logo.png",
                "description": "Toko laptop bekas terpercaya di Bandung sejak 2016",
                "foundingDate": "2016",
                "founder": {
                  "@type": "Person",
                  "name": "Rumah Laptop Bandung"
                },
                "contactPoint": {
                  "@type": "ContactPoint",
                  "telephone": "+62 813-2069-2038",
                  "contactType": "customer service",
                  "availableLanguage": "Indonesian"
                },
                "sameAs": [
                  "https://wa.me/6281320692038"
                ]
              },
              {
                "@context": "https://schema.org",
                "@type": "LocalBusiness",
                "name": "Rumah Laptop Bandung",
              "image": "https://rumahlaptopbandung.my.id/logo.png",
              "@id": "https://rumahlaptopbandung.my.id",
              "url": "https://rumahlaptopbandung.my.id",
              "telephone": "+62 813-2069-2038",
              "address": {
                "@type": "PostalAddress",
                "streetAddress": "Jl. Babakan Kajaksan No.7, Ciseureuh",
                "addressLocality": "Bandung",
                "addressRegion": "Jawa Barat",
                "postalCode": "40255",
                "addressCountry": "ID"
              },
              "geo": {
                "@type": "GeoCoordinates",
                "latitude": -6.9175,
                "longitude": 107.6191
              },
              "openingHoursSpecification": [
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday"
                  ],
                  "opens": "09:00",
                  "closes": "21:00"
                },
                {
                  "@type": "OpeningHoursSpecification",
                  "dayOfWeek": "Sunday",
                  "opens": "10:00",
                  "closes": "18:00"
                }
              ],
              "sameAs": [
                "https://wa.me/6281320692038"
              ],
              "description": "Jual laptop bekas dengan harga terbaik di Bandung. Proses cepat 15 menit, bayar cash langsung, harga tertinggi dijamin.",
              "priceRange": "$$",
              "paymentAccepted": "Cash",
              "currenciesAccepted": "IDR",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.9",
                "reviewCount": "2000"
              },
              "review": [
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Rian"
                  },
                  "reviewBody": "Laptop gaming saya yang udah 3 tahun nganggur, ternyata masih laku 8 juta! Prosesnya cepat banget, 15 menit langsung dapat uang."
                },
                {
                  "@type": "Review",
                  "reviewRating": {
                    "@type": "Rating",
                    "ratingValue": "5"
                  },
                  "author": {
                    "@type": "Person",
                    "name": "Sari"
                  },
                  "reviewBody": "Proses verifikasi dokumen ketat tapi justru bikin tenang. Laptop bekas kantor saya dijual dengan harga bagus dan proses legal."
                }
              ]
              }
            ])
          }}
        />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
