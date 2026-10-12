import type { Metadata, Viewport } from "next";
import { Fraunces, Instrument_Sans } from "next/font/google";
import "./globals.css";
import SiteHeader from "@/components/SiteHeader";
import SiteFooter from "@/components/SiteFooter";
import JsonLd from "@/components/JsonLd";
import { contact, person, siteUrl, skillGroups } from "@/data/portfolio";

const serif = Fraunces({ subsets: ["latin"], variable: "--font-serif", display: "swap", axes: ["opsz"] });
const sans = Instrument_Sans({ subsets: ["latin"], variable: "--font-sans", display: "swap" });

const defaultTitle = "Shamroz Khan | AI Engineer & Python Application Developer";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: defaultTitle, template: "%s | Shamroz Khan" },
  description: person.description,
  keywords: person.keywords,
  authors: [{ name: person.name, url: siteUrl }],
  creator: person.name,
  alternates: { canonical: "/" },
  openGraph: { type: "website", siteName: person.name, title: defaultTitle, description: person.description, url: "/", locale: "en_US" },
  twitter: { card: "summary_large_image", title: defaultTitle, description: person.description },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 } },
};

export const viewport: Viewport = { themeColor: "#FAF7F2", width: "device-width", initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const personLd = {
    "@context": "https://schema.org",
    "@type": "Person",
    "@id": `${siteUrl}/#person`,
    name: person.name,
    jobTitle: person.title,
    description: person.description,
    url: siteUrl,
    email: contact.email,
    knowsAbout: skillGroups.flatMap((g) => g.items),
    sameAs: [contact.linkedin, contact.github, contact.upwork],
  };
  const siteLd = {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "@id": `${siteUrl}/#website`,
    url: siteUrl,
    name: `${person.name} Portfolio`,
    inLanguage: "en",
    publisher: { "@id": `${siteUrl}/#person` },
  };
  return (
    <html lang="en" className={`${serif.variable} ${sans.variable}`}>
      <body>
        <JsonLd data={personLd} />
        <JsonLd data={siteLd} />
        <a className="skip" href="#main">Skip to content</a>
        <SiteHeader />
        <main id="main">{children}</main>
        <SiteFooter />
      </body>
    </html>
  );
}
