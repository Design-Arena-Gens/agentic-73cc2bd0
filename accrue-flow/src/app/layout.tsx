import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accrue Flow | Private Equity Command Center",
  description:
    "Accrue Flow is the AI-powered private equity cash flow command center for ultra-high-net-worth investors and family offices.",
  keywords: [
    "private equity",
    "family office",
    "capital calls",
    "cash flow",
    "AI",
    "Accrue Flow",
  ],
  openGraph: {
    title: "Accrue Flow",
    description:
      "Your private equity cash flow. Visualized. Guaranteed. Command capital with whispered authority.",
    url: "https://accrueflow.com",
    siteName: "Accrue Flow",
    images: [
      {
        url: "https://accrueflow.com/og-image.png",
        width: 1200,
        height: 630,
        alt: "Accrue Flow Private Equity Command Center",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  metadataBase: new URL("https://accrueflow.com"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-charcoal text-ivory antialiased min-h-screen">
        {children}
      </body>
    </html>
  );
}
