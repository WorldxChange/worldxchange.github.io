import { makePageMetadata } from "../layout";

export const metadata = makePageMetadata({
  title: "WxC | WINs",
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
