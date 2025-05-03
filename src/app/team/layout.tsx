import { makePageMetadata } from "../layout";

export const metadata = makePageMetadata({
  title: "WxC | Team",
  description: "Meet the team behind the project",
  url: "/team",
});

export default function TeamLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
