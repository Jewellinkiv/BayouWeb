import type { Metadata } from "next";
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://bayoubartholomew.com"),
  title: {
    default: "Bayou Bartholomew | A Conservation Legacy",
    template: "%s | Bayou Bartholomew",
  },
  description:
    "Discover Bayou Bartholomew and the story of a family-led effort to protect this remarkable Delta waterway for generations to come.",
  icons: {
    icon: "/favicon.png",
    shortcut: "/favicon.png",
  },
  openGraph: {
    type: "website",
    siteName: "Bayou Bartholomew",
    title: "Bayou Bartholomew | A Conservation Legacy",
    description:
      "A living waterway. A childhood refuge. A lasting promise to the Arkansas Delta.",
    images: [
      {
        url: "/images/bayou-pine-bluff.jpg",
        width: 2560,
        height: 1727,
        alt: "Bayou Bartholomew winding through autumn wetlands near Pine Bluff, Arkansas",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Bayou Bartholomew | A Conservation Legacy",
    description:
      "A living waterway. A childhood refuge. A lasting promise to the Arkansas Delta.",
    images: ["/images/bayou-pine-bluff.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
