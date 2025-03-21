//* Import components for pages
import TitleSplash from "@/components/TitleSplash";
import WrappedTextHeader from "@/components/TextHeader";
import CenterImage from "@/components/CenterImage";
import EarthText from "@/components/EarthText";
// import StatMediaSplit from "@/components/StatMediaSplit";
// import ImageToContact from "@/components/ImageToContact";
const ImageToContact = null,
  StatMediaSplit = null;

//* Import images for pages
import PaddiesImage from "@/../public/img/paddies.png";

//* Page flow; ** around text is green, * is full opacity white, default is grey
export const nav = {
  title: "World x Change",
};
export const pages = [
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
      section: "The Idea",
      header: "Realign individual incentives with their global consequences",
      text: "An automated system uses remote sensing to facilitate payments from international markets to **support the indigenous stewards** who improve the global commons.",
    },
  },
  {
    component: CenterImage,
    data: {
      images: [
        {
          src: "../path/to/flowchart",
          alt: "Flowchart Alt Text",
          blurbs: [
            "Frontier science creates *a bottom-up solution*  to the Tragedy of the Commons.",
            "Using *ideas* from agriculture, anthropology, chemistry, computer science, earth science, ecology, engineering, economics, and finance.",
            "Driven by an *Information-Age* infrastructure that is easy to **scale with wide applicability.**",
            "*A continuous gas analyzer* allows us to compare emissions from alternative agricultural practices on Balinese rice paddies.",
            "Realigns individual incentives to **enhance the global commons** rather than destroy it.",
          ],
        },
        {
          src: "../path/to/cylinder",
          alt: "Scientists collect measurment data from a methane probe",
          blurbs: [
            "*World class measurements* of individual activities and their results.",
            "Producing a *new standard* for monitoring, verifying, and reporting impacts.",
          ],
        },
        {
          src: "../path/to/remote-sensing-before",
          alt: "Sensing Before Alt Text",
          blurbs: [
            "Remote sensing provides the *necessary monitoring, verification, and reporting* of the actions of the stewards.",
          ],
        },
        {
          src: "../path/to/remote-sensing-after",
          alt: "Sensing After Alt Text",
          blurbs: [
            "Resulting in high-quality results that **can be trusted** by the patrons and markets.",
          ],
        },
        {
          src: "../path/to/subak",
          alt: "subak caption",
          blurbs: [
            "Implementing these projects require a deep understanding of, and interaction with, the *local people, cultures, and institutions*",
            "The project must fully appreciate and address the *needs of the indigenous land stewards*",
            "Designed to **strengthen local traditions and institutions**",
          ],
        },
        {
          src: "../path/to/group",
          alt: "group picture caption",
          blurbs: [
            "*Local leadership and institutions* need to be fully embraced and integrated into the project",
            "The Balinese NGO, **Somya Pertiwi** *(Kindness of the Earth Goddess)*, leads the project",
            "Somya Pertiwi will work within the *centuries old system of subaks*, each of which brings together farmers within a given watershed to communally allocate the available water",
            "Agricultural extension agents mill monitor and consult on the new irrigation practices",
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
      text: "Our remote sensing generates WINs that translate the actions of the stewards into measurable outcomes: tonnes of CO2e avoided, amount of forest preserved in a natural state, etc",
    },
  },
  {
    component: EarthText,
    data: {
      positions: [
        {
          pan: { x: 0, y: 8 },
          pos: { x: 0.5, y: 0, z: 20 },
          rot: { x: -1.75, y: 0, z: 0 },
          sun: { x: 1, y: 2, z: 2 },
          transform: 0.1,
        },
        {
          pan: { x: 0, y: 2 },
          pos: { x: 0.5, y: 0, z: 8 },
          rot: { x: -0.75, y: 0, z: 0 },
          sun: { x: 1, y: 2, z: 2 },
          transform: 0.2,
        },
        {
          pan: { x: 0, y: 1.2 },
          pos: { x: 0.5, y: 0, z: 3 },
          rot: { x: 0, y: 0, z: 0 },
          sun: { x: 2, y: 1, z: 1 },
          transform: 0.3,
        },
        {
          pan: { x: 0, y: 1.2 },
          pos: { x: 0.5, y: 0, z: 2.5 },
          rot: { x: 0, y: 0, z: 0 },
          sun: { x: 1, y: 2, z: 2 },
          transform: 0.7,
        },
        {
          pan: { x: 0, y: 0 },
          pos: { x: 0.5, y: 0, z: 12 },
          rot: { x: 0, y: 1, z: 0 },
          sun: { x: 0, y: 3, z: 2 },
          transform: 0.95,
        },
        {
          pan: { x: 0, y: -7 },
          pos: { x: 0.5, y: 0, z: 20 },
          rot: { x: 0, y: 1, z: 0 },
          sun: { x: 0, y: 3, z: 2 },
          transform: 1,
        },
      ],
      section: "A Pilot Project",
      header: "Bali, Indonesia",
      text: "Rice has been sustainably farmed on Bali for over a thousand years. However, the *flooded paddies produce methane, a dangerous greenhouse gas.*  Rice is water tolerant, not water loving, so **by altering how they irrigate their crops, the indigenous farmers can mitigate their greenhouse gas emissions.**",
    },
  },
  {
    component: StatMediaSplit,
    data: {
      statsTitle: "Rice and the Global Commons",
      stats: [
        [
          ">10%",
          "Rice farming produces over 10% of world-wide, anthropogenic methane emissions.",
        ],
        [
          "28x",
          "*Methane has 28 times the Global Warming Potential of CO2.* While methane has a limited lifetime in the atmosphere relative to CO2, the additional warming caused by *methane may push the global system beyond critical tipping points.*",
        ],
        [
          ">75%",
          "Methane emissions can be reduced by over 75% by not keeping the paddies continuously flooded.  This also reduces the runoff of fertilizer that damages the coral reefs.  Incentives are needed to help the indigenous farmers alter their thousand-year old system of agriculture.",
        ],
      ],
      media: {
        type: "video",
        src: "../path/to/video",
        alt: "Video caption",
      },
    },
  },
  {
    component: CenterImage,
    data: {
      images: [
        {
          src: "../path/to/field-measurements",
          alt: "Field Measurements Alt Text",
          blurbs: [
            "A continuous gas analyzer allows us to compare field emissions, at parts per billion accuracy, from neighboring fields that use different irrigation practices.",
            "Such measurements provide critical insights not available using the current standards of syringe sampling or national averages.",
          ],
        },
        {
          src: "../path/to/subak-bena",
          alt: "Subak Bena Alt Text",
          blurbs: [
            "The project requires a deep understand of, and interaction with, the local people, culture, and institutions.",
            "Designed to strengthen local traditions and institutions.",
          ],
        },
        {
          src: "../path/to/somya-pertiwi",
          alt: "Somya Pertiwi Alt Text",
          blurbs: [
            "Local leadership and institutions are embraced and integrated into the project.",
            "The Balinese NGO, Somya Pertiwi (Kindness of the Earth Goddess), leads the project.",
            "Somya Pertiwi will work within the centuries old system of subaks, each of which brings together farmers within a given watershed to communally allocate the available water.",
            "Agricultural extension agents will monitor and consult on the new irrigation practices.",
          ],
        },
      ],
    },
  },
  {
    component: StatMediaSplit,
    data: {
      statsTitle: "Rice and the Global Commons",
      stats: [
        [
          "2012",
          "In 2012, the UNESCO World Heritage Convention recognized the long-term sustainability of the Balinese subak system based on a proposal from Somya Pertiwi.",
        ],
        [
          "21",
          "The 21 subaks in the UNESCO site will participate in the pilot project.",
        ],
        [
          "3",
          'Try Hita Karana, which translates to the "three causes for well-being," is the Balinese philosophy that encourages harmony among people, nature, and the gods.',
        ],
      ],
      media: {
        type: "img",
        src: "../path/to/letter-to-future-plaque",
        alt: "Plaque Alt Text",
      },
    },
  },
  {
    component: ImageToContact,
    data: {
      src: "../path/to/plaque",
      alt: "Plaque caption",
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
import styles from "./TextStyles.module.scss";
import reactStringReplace from "react-string-replace";
/** Format text to nested spans with the following markdown-like properties:
 * | parent -> <span className={styles.grey}>(</span>
 * | **text** -> <span className={styles.green}>text</span>
 * | *text* -> <span className={styles.white}>text</span>
 */
export function ColorText(text: string, greyBase: boolean = true) {
  const green = /\*\*([^*]+)\*\*/g;
  const white = /\*([^*]+)\*/g;
  let content = reactStringReplace(text, green, (match, i) => (
    <span key={"green" + i} className={styles.green}>
      {match}
    </span>
  ));
  content = reactStringReplace(content, white, (match, i) => (
    <span key={"white" + i} className={styles.white}>
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
