import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.scss";
import { Cursor } from "motion-plus/react";
// import SmoothScrolling from "@/components/SmoothScrolling";
import Nav from "@/components/NavBar";
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
  description: "An Information-Age Solution to the Tragedy of the Commons",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable}`}>
        {/* <SmoothScrolling> */}
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
        <Nav />
        <main>{children}</main>
        {/* </SmoothScrolling> */}
      </body>
      <GoogleAnalytics gaId="G-R3W7N6X2MC" />
    </html>
  );
}
