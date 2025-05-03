import { Metadata } from "next";

export const metadata: Metadata = {
  title: "World x Change | Resources",
  description: "Downloadable media and supporting documents",
};

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
