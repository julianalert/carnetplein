import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ORIGIN, description, title } from "@/content/meta";
import "./carnet.css";

// Typographies du design system Sodobat (auto-hébergées) : Geist pour tout, Geist Mono pour les codes.
const sans = Geist({ subsets: ["latin"], variable: "--cp-sans" });
const mono = Geist_Mono({ subsets: ["latin"], variable: "--cp-mono" });

export const metadata: Metadata = {
  metadataBase: new URL(ORIGIN),
  title,
  description,
  applicationName: "Carnet plein",
  alternates: { canonical: "/" },
  icons: { icon: "/icon.svg", shortcut: "/icon.svg", apple: "/icon.svg" },
  openGraph: { title, description, url: "/", siteName: "Carnet plein", locale: "fr_FR", type: "website" },
  twitter: { card: "summary", title, description },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="fr">
      <body>
        <div className={`cp ${sans.variable} ${mono.variable}`}>{children}</div>
      </body>
    </html>
  );
}
