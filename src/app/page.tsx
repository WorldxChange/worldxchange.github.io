"use client";
import React from "react";
import { pages } from "@/app/constants";

export default function Home() {
  return (
    <React.Fragment>
      {pages.map((page, i) => {
        const Component = page.component;

        // @ts-expect-error data content varies by page
        return Component && <Component key={i} data={page.data} />;
      })}
    </React.Fragment>
  );
}
