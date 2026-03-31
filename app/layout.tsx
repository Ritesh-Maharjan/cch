import { Roboto } from "next/font/google";
import { Lexend_Giga } from "next/font/google";
import "./globals.css";
import Header from "./components/layout/Header";

const lexendGiga = Lexend_Giga({
  weight: ["400", "600", "700", "900"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-lexend",
});

const roboto = Roboto({
  weight: ["200", "400", "700"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  display: "swap",
  variable: "--font-roboto",
});

export const metadata = {
  title: {
    default: "CCH Investments",
    template: "%s | CCH Investment"
  },
  description: "Your next step to private inveestments",
  icons: {
    icon: [
      { url: "/icons/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icons/favicon-16x16.png", sizes: "16x16", type: "image/png" },
    ],
    shortcut: "/favicon.ico",
    apple: "/icons/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
  openGraph: {
    title: "CCH Investments",
    description: "Your next step to private investments",
    url: "https://www.cch-investments.com/",
    siteName: "CCH Investments",
    images: [
      {
        url: "/images/og-image.png",
        width: 1200,
        height: 630,
      },
    ],
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${roboto.variable} ${lexendGiga.variable} relative antialiased`}>
          <Header />
        {children}
      </body>
    </html>
  );
}
