import { Metadata } from "next";

export const metadata: Metadata = {
  title: "World x Change | Contact",
  description: "Contact us for more information",
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
