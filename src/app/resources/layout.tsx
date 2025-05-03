import { makePageMetadata } from "../layout";

export const metadata = makePageMetadata({
  title: "World x Change | Resources",
  description: "Downloadable media and supporting documents",
  url: "/resources",
});

export default function ResourcesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
