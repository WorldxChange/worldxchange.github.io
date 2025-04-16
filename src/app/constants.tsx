export const nav: {
  title: string;
  pages: { name: string; path: string; action?: boolean }[];
} = {
  title: "World x Change",
  pages: [
    { name: "WINs", path: "/wins" },
    { name: "Resources", path: "/resources" },
    { name: "Team", path: "/team" },
    { name: "Connect", path: "/contact", action: false },
  ],
};

export const footerLinks = {
  "/": "Home",
  "/wins": "WINs",
  "/resources": "Resources",
  "/team": "Team",
  "/contact": "Connect",
};

import React, { useLayoutEffect, useState } from "react";
import styles from "@/styles/TextStyles.module.scss";
import reactStringReplace from "react-string-replace";
/** Format text to nested spans with the following markdown-like properties:
 * | parent -> <span className={styles.grey}>(</span>
 * | **text** -> <span className={styles.green}>text</span>
 * | *text* -> <span className={styles.white}>text</span>
 */
export function ColorText(text: string, greyBase: boolean = true) {
  const green = /\*\*([^*]+)\*\*/g;
  const white = /\*([^*]+)\*/g;
  let content = reactStringReplace(text, green, (match, i, o) => (
    <span key={["green", i, o].join("-")} className={styles.green}>
      {match}
    </span>
  ));
  content = reactStringReplace(content, white, (match, i, o) => (
    <span key={["white", i, o].join("-")} className={styles.white}>
      {match}
    </span>
  ));
  return <span className={greyBase ? styles.grey : undefined}>{content}</span>;
}

export function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);

  useLayoutEffect(() => {
    const media = window.matchMedia(query);
    if (media.matches !== matches) {
      setMatches(media.matches);
    }
    const listener = () => {
      setMatches(media.matches);
    };
    media.addEventListener("change", listener);
    return () => media.removeEventListener("change", listener);
  }, [matches, query]);

  return matches;
}

//* Import components for pages
import { TitleSplashProps } from "@/components/TitleSplash";
import { TextHeaderProps } from "@/components/TextHeader";
import { CenterImageProps } from "@/components/CenterImage";
import { EarthTextProps } from "@/components/EarthText";
import { StatMediaProps } from "@/components/StatMedia";
import { StatManyProps } from "@/components/StatMany";

export type PageParts = Readonly<{ data: object }>;
export type PageData =
  | {
      component: React.ComponentType<CenterImageProps>;
      data: CenterImageProps["data"];
    }
  | {
      component: React.ComponentType<TitleSplashProps>;
      data: TitleSplashProps["data"];
    }
  | {
      component: React.ComponentType<TextHeaderProps>;
      data: TextHeaderProps["data"];
    }
  | {
      component: React.ComponentType<EarthTextProps>;
      data: EarthTextProps["data"];
    }
  | {
      component: React.ComponentType<StatMediaProps>;
      data: StatMediaProps["data"];
    }
  | {
      component: React.ComponentType<StatManyProps>;
      data: StatManyProps["data"];
    }
  | {
      component: null;
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      data: any;
    };

export function makePageStream(stream: PageData[]) {
  return function PageStream() {
    return (
      <React.Fragment>
        {stream.map((part, i) => {
          // @ts-expect-error data content varies by page
          return part.component && <part.component key={i} data={part.data} />;
        })}
      </React.Fragment>
    );
  };
}
