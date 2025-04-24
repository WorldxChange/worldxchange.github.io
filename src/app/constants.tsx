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

export const contact = {
  email: "wxc.bali@gmail.com",
  subject: "World x Change Inquiry",
};

export const footerLinks = {
  "/": "Home",
  "/wins": "WINs",
  "/resources": "Resources",
  "/team": "Team",
  "/contact": "Connect",
};

import React from "react";
import styles from "@/styles/TextStyles.module.scss";
import reactStringReplace from "react-string-replace";

/**
 * Format text to nested spans with markdown-like properties and optionally render as HTML.
 * | parent -> <span className={styles.grey}>(</span> (if greyBase is true)
 * | **text** -> <span className={styles.green}>text</span>
 * | *text* -> <span className={styles.white}>text</span>
 *
 * @param text The input string, potentially containing markdown and/or HTML.
 * @param greyBase If true, wraps the entire output in a span with the grey style. Defaults to true.
 * @param innerHTML If true, processes markdown replacements and then renders the result as HTML using dangerouslySetInnerHTML. Defaults to false.
 * @returns A React element (span) containing the formatted text.
 */
export function ColorText(
  text: string,
  greyBase: boolean = true,
  innerHTML: boolean = false
) {
  const greenRegex = /\*\*([^*]+)\*\*/g; // Regex to find **bolded** text
  const whiteRegex = /\*([^*]+)\*/g; // Regex to find *italic* text

  if (innerHTML) {
    let processedHtml = text.replace(
      greenRegex,
      `<span class="${styles.green}">$1</span>`
    );
    processedHtml = processedHtml.replace(
      whiteRegex,
      `<span class="${styles.white}">$1</span>`
    );
    return (
      <span
        className={greyBase ? styles.grey : undefined}
        dangerouslySetInnerHTML={{ __html: processedHtml }}
      />
    );
  } else {
    let content = reactStringReplace(text, greenRegex, (match, i) => (
      <span key={`green-${i}`} className={styles.green}>
        {match}
      </span>
    ));
    content = reactStringReplace(content, whiteRegex, (match, i) => (
      <span key={`white-${i}`} className={styles.white}>
        {match}
      </span>
    ));

    return (
      <span className={greyBase ? styles.grey : undefined}>{content}</span>
    );
  }
}

import { useLayoutEffect, useState } from "react";
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
import { TeamListProps } from "@/components/TeamList";
import { CenterHeaderProps } from "@/components/CenterHeader";
import { FileListProps } from "@/components/FileList";

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
      component: React.ComponentType<TeamListProps>;
      data: TeamListProps["data"];
    }
  | {
      component: React.ComponentType<CenterHeaderProps>;
      data: CenterHeaderProps["data"];
    }
  | {
      component: React.ComponentType<FileListProps>;
      data: FileListProps["data"];
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
