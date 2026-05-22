import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://cwayacademy.org"),
  title: {
    default: "CWAY Academy — Coach, Challenge, and Commission!",
    template: "%s | CWAY Academy",
  },
  description:
    "CWAY Academy equips rural pastors, lay leaders, and Christian disciples through Bible-based theological education and leadership training in local Indian languages. A ministry of CWAY MISSIONS Religious Trust, Bangalore, India.",
  keywords: [
    "Christian leadership training India",
    "Online theological education certificate",
    "Bible training for rural pastors",
    "Indigenous church leadership training",
    "Five-fold ministry courses",
    "Accredited theological training India",
    "CWAY Academy",
    "CWAY Missions",
    "Ministry training India",
    "Theological seminary online",
  ],
  authors: [{ name: "CWAY Academy", url: "https://cwayacademy.org" }],
  creator: "CWAY MISSIONS Religious Trust",
  publisher: "CWAY Academy",
  openGraph: {
    type: "website",
    locale: "en_IN",
    url: "https://cwayacademy.org",
    siteName: "CWAY Academy",
    title: "CWAY Academy — Coach, Challenge, and Commission!",
    description:
      "Equipping rural pastors, lay leaders, and Christian disciples through Bible-based theological education and leadership training.",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "CWAY Academy — Theological Education Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "CWAY Academy — Coach, Challenge, and Commission!",
    description:
      "Equipping rural pastors and Christian leaders through premium theological education.",
    images: ["/og-image.jpg"],
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
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "EducationalOrganization",
              name: "CWAY Academy",
              description:
                "A premier theological training institution equipping rural pastors, lay leaders, and Christian disciples through Bible-based education.",
              url: "https://cwayacademy.org",
              logo: "https://cwayacademy.org/logo.png",
              contactPoint: {
                "@type": "ContactPoint",
                contactType: "admissions",
                email: "admissions@cwayacademy.org",
              },
              address: {
                "@type": "PostalAddress",
                addressLocality: "Bangalore",
                addressRegion: "Karnataka",
                addressCountry: "IN",
              },
              foundingOrganization: {
                "@type": "Organization",
                name: "CWAY MISSIONS Religious Trust",
              },
            }),
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
