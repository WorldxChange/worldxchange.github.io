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

const baseUrl = "https://w-x-c.com";
export const metadata: Metadata = {
  title: "World x Change",
  metadataBase: new URL(baseUrl),
  description: "An Information-Age Solution to the Tragedy of the Commons",
  openGraph: {
    title: "World x Change",
    description: "An Information-Age Solution to the Tragedy of the Commons",
    url: baseUrl,
    siteName: "World x Change",
    images: [
      {
        url: "/img/og-image.webp",
        width: 1200,
        height: 630,
        alt: "World x Change",
        type: "image/webp",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "World x Change",
    description: "An Information-Age Solution to the Tragedy of the Commons",
    images: ["/img/og-image.webp"],
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

export function makePageMetadata(options: {
  title: string;
  description: string;
  url: string;
}): Metadata {
  const { title, description, url } = options;
  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: baseUrl + url,
    },
    twitter: {
      title,
      description,
    },
  };
}
