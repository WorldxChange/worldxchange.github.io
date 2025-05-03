import { makePageMetadata } from "../layout";

export const metadata = makePageMetadata({
  title: "World x Change | Contact",
  description: "Contact us for more information",
  url: "/contact",
});

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
