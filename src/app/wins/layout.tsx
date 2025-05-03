import { Metadata } from "next";

export const metadata: Metadata = {
  title: "World x Change | WINs",
  description: "The World Improving Numbers supporting our mission",
};

export default function WINsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
