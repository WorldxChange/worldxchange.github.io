import { makePageMetadata } from "../layout";

export const metadata = makePageMetadata({
  title: "World x Change | WINs",
  description: "The World Improving Numbers supporting our mission",
  url: "/wins",
});

export default function WINsLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
