import { Metadata } from "next";

export const metadata: Metadata = {
  title: "World x Change | Team",
  description: "Meet the team behind the project",
};

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
