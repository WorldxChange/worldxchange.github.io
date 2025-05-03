import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "@/styles/globals.scss";
import { Cursor } from "motion-plus/react";
import SmoothScrolling from "@/components/SmoothScrolling";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";
import { GoogleAnalytics } from "@next/third-parties/google";
export const dynamic = "error";

// use inter with a bit of tsume/negative tracking to get close to SF Display Pro
const inter = Inter({
  weight: "variable",
  style: "normal",
  subsets: ["latin"],
  variable: "--font",
});

export const metadata: Metadata = {
  title: "World x Change",
  metadataBase: new URL("https://w-x-c.com"),
  description: "An Information-Age Solution to the Tragedy of the Commons",
  openGraph: {
    title: "World x Change",
    description: "An Information-Age Solution to the Tragedy of the Commons",
    url: "https://w-x-c.com",
    siteName: "World x Change",
    images: [
      {
        url: "/img/og-image.png",
        width: 1200,
        height: 630,
        alt: "World x Change",
        type: "image/png",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "World x Change",
    description: "An Information-Age Solution to the Tragedy of the Commons",
    images: ["/img/og-image.png"],
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        <SmoothScrolling>
          <Cursor
            style={{
              backgroundColor: "var(--cursor)",
              backgroundImage: "url(/img/cursor.webp)",
              backgroundSize: "110%",
              backgroundRepeat: "no-repeat",
              backgroundPosition: "center",
            }}
            // add remove background on text varient with overwriting the rest of the style
            variants={{
              text: {
                backgroundImage: "none",
              },
            }}
          />
          <NavBar />
          <main>{children}</main>
          <Footer />
        </SmoothScrolling>
      </body>
      <GoogleAnalytics gaId="G-R3W7N6X2MC" />
    </html>
  );
}
