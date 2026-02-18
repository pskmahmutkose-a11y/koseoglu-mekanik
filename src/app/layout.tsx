import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin", "latin-ext"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Köseoğlu Mekanik | 30 Yıllık Tecrübe ile Profesyonel Mekanik Tesisat",
  description:
    "Ramazan Köse güvencesiyle İstanbul genelinde kazan dairesi montajı, doğalgaz tesisatı, yangın tesisatı, pompa motor imalatı, poseftik işleri ve kaynak işçiliği hizmetleri. 30 yıllık tecrübe ile 7/24 destek.",
  keywords: [
    "mekanik tesisat",
    "kazan dairesi montajı",
    "doğalgaz tesisatı",
    "yangın tesisatı",
    "pompa motor imalatı",
    "poseftik işleri",
    "foseptik",
    "kaynak işçiliği",
    "hidrofor",
    "kalorifer",
    "havalandırma",
    "İstanbul mekanik",
    "Köseoğlu Mekanik",
    "Ramazan Köse",
    "İGDAŞ doğalgaz",
    "boru kaynak",
    "atık su sistemi",
    "temiz su sistemi",
    "yağmur suyu gideri",
  ],
  authors: [{ name: "Köseoğlu Mekanik" }],
  creator: "Köseoğlu Mekanik",
  openGraph: {
    title: "Köseoğlu Mekanik | 30 Yıllık Tecrübe ile Profesyonel Çözümler",
    description:
      "Ramazan Köse güvencesiyle İstanbul genelinde endüstriyel mekanik tesisat hizmetleri. Kazan dairesi, doğalgaz, yangın tesisatı, pompa motor imalatı.",
    type: "website",
    locale: "tr_TR",
    siteName: "Köseoğlu Mekanik",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "/",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="tr" className="scroll-smooth">
      <head>
        <meta name="theme-color" content="#0a1628" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body className={`${inter.variable} font-sans antialiased`}>
        {children}

        {/* Structured data for local business SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              name: "Köseoğlu Mekanik",
              description:
                "30 yıllık tecrübe ile İstanbul genelinde profesyonel mekanik tesisat hizmetleri.",
              founder: {
                "@type": "Person",
                name: "Ramazan Köse",
              },
              telephone: "+905321780521",
              areaServed: {
                "@type": "City",
                name: "İstanbul",
              },
              serviceType: [
                "Kazan Dairesi Montajı",
                "Doğalgaz Tesisatı",
                "Yangın Tesisatı",
                "Pompa Motor İmalatı",
                "Poseftik İşleri",
                "Kaynak İşçiliği",
                "Kalorifer Sistemleri",
                "Havalandırma",
                "Hidrofor Dairesi",
              ],
              openingHoursSpecification: [
                {
                  "@type": "OpeningHoursSpecification",
                  dayOfWeek: [
                    "Monday",
                    "Tuesday",
                    "Wednesday",
                    "Thursday",
                    "Friday",
                    "Saturday",
                  ],
                  opens: "08:00",
                  closes: "20:00",
                },
              ],
            }),
          }}
        />
      </body>
    </html>
  );
}
