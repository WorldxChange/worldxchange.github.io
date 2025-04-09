//* Import components for pages
import TitleSplash, { TitleSplashProps } from "@/components/TitleSplash";
import WrappedTextHeader, { TextHeaderProps } from "@/components/TextHeader";
import CenterImage, { CenterImageProps } from "@/components/CenterImage";
import EarthText, { EarthTextProps } from "@/components/EarthText";
import StatMediaSplit, {
  StatMediaSplitProps,
} from "@/components/StatMediaSplit";
// import ImageToContact from "@/components/ImageToContact";
const ImageToContact = null;

//* Import images for pages
import PaddiesImage from "@/../public/img/paddies.webp";

//* Page flow; ** around text is green, * is full opacity white, default is grey
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
export const pages: PageData[] = [
  {
    component: TitleSplash,
    data: {
      primary: nav.title.split(" "),
      secondary: "An Information-Age Solution to the Tragedy of the Commons",
      image: PaddiesImage,
    },
  },
  {
    component: WrappedTextHeader,
    data: {
      section: "The idea",
      header: "Realign individual incentives to reflect global impacts",
      text: "An automated system leverages remote sensing and international markets to enable **payments to indigenous stewards** who enhance the global commons.",
    },
  },
  {
    component: CenterImage,
    data: {
      images: [
        {
          src: "/img/center/flowchart.png",
          alt: "Flowchart",
          blurbs: [
            "*Frontier science* creates a **bottom-up solution** to the Tragedy of the Commons.",
            "*Integrating ideas* from agriculture, anthropology, chemistry, complex systems, computer science, earth science, ecology, engineering, economics, and finance.",
            "Driven by an *Information-Age infrastructure* that is **easy to scale up with wide applicability.**",
            "Creates incentives for individuals to **enhance the global commons** *rather than destroy it.*",
          ],
        },
        {
          src: "/img/center/cylinder.png",
          alt: "Methane Measurement",
          blurbs: [
            "*World class measurements* of **environmental impacts.**",
            "A *new standard* for tracking and documenting **world-improving activities.**",
          ],
        },
        {
          src: "/img/center/remote-sensing-before.png",
          alt: "Sensing Before",
          blurbs: [
            "Remote sensing provides the *needed monitoring, verification, and reporting* of **successful stewardship.**",
          ],
        },
        {
          src: "/img/center/remote-sensing-after.png",
          alt: "Sensing After",
          blurbs: [
            "Generating high-quality results that **can be trusted** by *patrons and markets.*",
          ],
        },
      ],
    },
  },
  {
    component: WrappedTextHeader,
    data: {
      section: "World Improving Numbers",
      header: "WINS",
      text: "Remote sensing creates **trustworthy WINs** that translate the actions of the stewards into **measurable outcomes** such as tonnes of CO2e avoided or the amount of forest preserved in a natural state. High quality **WINS generate payments for the stewards** from global patrons and markets.",
    },
  },
  {
    component: EarthText,
    data: {
      positions: [
        {
          pan: { x: 0, y: 6 },
          pos: { x: 0.5, y: 0, z: 20 },
          rot: { x: -200, y: 160, z: 0 },
          sun: { x: 1, y: 2, z: 2 },
          pointerEvents: "none",
          opacity: 1,
          transform: 0.1,
        },
        {
          pan: { x: 0, y: 2 },
          pos: { x: 0.5, y: 0, z: 8 },
          rot: { x: -100, y: 160, z: 0 },
          sun: { x: 1, y: 2, z: 2 },
          pointerEvents: "none",
          opacity: 1,
          transform: 0.2,
        },
        {
          pan: { x: 0, y: 1.2 },
          pos: { x: 0.5, y: 0, z: 3 },
          rot: { x: -40, y: 160, z: 0 },
          sun: { x: 2, y: 1, z: 1 },
          pointerEvents: "auto",
          opacity: 1,
          transform: 0.3,
        },
        {
          pan: { x: 0, y: 1.2 },
          pos: { x: 0.5, y: 0, z: 2.5 },
          rot: { x: -40, y: 160, z: 0 },
          sun: { x: 1, y: 2, z: 2 },
          pointerEvents: "auto",
          opacity: 1,
          transform: 0.7,
        },
        {
          pan: { x: 0, y: 0 },
          pos: { x: 0.5, y: 0, z: 12 },
          rot: { x: 10, y: 160, z: 0 },
          sun: { x: 0, y: 3, z: 2 },
          pointerEvents: "none",
          opacity: 0,
          transform: 0.95,
        },
      ],
      section: "Our pilot project",
      header: "Bali, Indonesia",
      text: "Rice on Bali has been **sustainably farmed for over a millennium.**  Unfortunately, flooded paddies produce methane, a dangerous greenhouse gas.  By altering their irrigation practices, the **farmers can mitigate methane emissions.**  Compensating the farmers for taking on the additional risk and effort needed to alter how they farm will allow the subaks to **embrace a new regime of globally sustainable agriculture.**",
    },
  },
  {
    component: StatMediaSplit,
    data: {
      statsTitle: "Rice and the Global Commons",
      stats: [
        {
          stat: {
            first: "Over ",
            number: 10,
            after: "%",
          },
          text: "of *global anthropogenic methane emissions* come from *rice farming.*",
        },
        {
          stat: {
            first: "Methane has ",
            number: 28,
            after: "x",
          },
          text: "the *Global Warming Potential of CO2.* While methane has a limited lifetime in the atmosphere, such emmisions may *push the global system beyond critical tipping points.*",
        },
        {
          stat: {
            first: "More than",
            number: 70,
            after: "%",
          },
          text: "of the **methane emissions can be eliminated** by not flooding the rice paddies.  This also **reduces the runoff of fertilizer** that damages Bali's coral reefs.",
        },
      ],
      media: {
        type: "video",
        src: "/media/video.mp4",
        placeholder: "/media/video-placeholder.png",
        alt: "Video discussing the results from our demonstration project on Bali.",
        caption: "Results from our previous demonstration project on Bali",
      },
    },
  },
  {
    component: CenterImage,
    data: {
      images: [
        {
          src: "/img/center/field-measurement.png",
          alt: "Piccarro",
          blurbs: [
            "In-field gas analyzers *track emissions* over time from different irrigation practices.",
            "These **world-class measurements provide critical insights** not available using the current standards of syringe sampling or national averages.",
          ],
        },
        {
          src: "/img/center/subak-bena.png",
          alt: "Subak Bena",
          blurbs: [
            "Our approach integrates a *deep understanding* of the **local people, culture, and institutions.**",
            "Incorporating such insights **strengthens local traditions and organizations.**",
          ],
        },
        {
          src: "/img/center/somya-pertiwi.png",
          alt: "Somya Pertiwi",
          blurbs: [
            "The Balinese NGO **Somya Pertiwi (Kindness of the Earth Goddess)** leads the project.",
            "Scientists from the *International Rice Research Institute* are also monitoring the project.",
            "Somya Pertiwi is working within the **centuries-old system of communally-governed subaks** that coordinate the irrigation of the rice paddies.",
            "Agricultural extension agents *monitor and consult* on the **new farming practices.**",
          ],
        },
      ],
    },
  },
  {
    component: StatMediaSplit,
    data: {
      statsTitle: "A Letter to the Future...",
      stats: [
        {
          stat: {
            first: "In ",
            number: 2012,
            format: { useGrouping: false },
          },
          text: "*UNESCO* recognized the **long-term sustainability of the subak system** by establishing a *World Heritage site* on Bali.  Somya Pertiwi provided assistance on the Ministry's proposal.",
        },
        {
          stat: {
            first: "All of the ",
            number: 19,
          },
          text: "**subaks that form the core of the UNESCO site** are part of our *pilot project.*",
        },
        {
          stat: {
            first: "There are ",
            number: 3,
          },
          text: "sources of happiness embraced by the *Balinese philosophy of Tri Hita Karana:* **harmony among nature, humans, and the gods.**",
        },
      ],
      media: {
        type: "img",
        src: "/img/plaque.png",
        alt: "Project plaque",
        caption: "Each particpating subak will display our project plaque.",
      },
    },
  },
  {
    component: StatMediaSplit,
    data: {
      statsTitle: "Next Steps",
      stats: [
        {
          stat: {
            first: "Explore ",
            number: 10,
            format: { useGrouping: false },
          },
          text: "research and background papers from some of our <a href="../resources">project resources<a>.",
        },
        {
          stat: {
            first: "All of the ",
            number: 19,
          },
          text: "**subaks that form the core of the UNESCO site** are part of our *pilot project.*",
        },
        {
          stat: {
            first: "There are ",
            number: 3,
          },
          text: "sources of happiness embraced by the *Balinese philosophy of Tri Hita Karana:* **harmony among nature, humans, and the gods.**",
        },
      ],
      media: {
        type: "img",
        src: "/img/plaque.png",
        alt: "Project plaque",
        caption: "Each particpating subak will display our project plaque.",
      },
    },
  },
  {
    component: ImageToContact,
    data: {
      src: "../path/to/plaque",
      alt: "Plaque alt descriptor text",
      people: [
        {
          position: [],
          name: "First Last",
          text: "Personal Text",
          contact: "Contact Info",
        },
        {
          position: [],
          name: "First Last",
          text: "Personal Text",
          contact: "Contact Info",
        },
      ],
    },
  },
];

import React, { useLayoutEffect, useState } from "react";
import styles from "@/app/TextStyles.module.scss";
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
// props for a component, should be readonly with a data field that varies
export type PageParts = Readonly<{ data: object }>;

// Type pagedata, with {component: React.ComponentType, data: the component's exported ComponentNameProps interface}
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
      component: React.ComponentType<StatMediaSplitProps>;
      data: StatMediaSplitProps["data"];
    }
  | {
      component: null;
      /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
      data: any;
    };
