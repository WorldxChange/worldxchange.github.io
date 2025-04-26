"use client";

import { makePageStream, nav } from "@/app/constants";

import TitleSplash from "@/components/TitleSplash";
import WrappedTextHeader from "@/components/TextHeader";
import CenterImage from "@/components/CenterImage";
import EarthText from "@/components/EarthText";
import StatMedia from "@/components/StatMedia";

import PaddiesImage from "@/../public/img/paddies.webp";

export default makePageStream([
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
      header: "Realign Individual Incentives to Reflect Global Impacts",
      text: "An automated system leverages remote sensing and international markets to enable payments to indigenous stewards who enhance the global commons.",
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
            "Frontier science creates a *bottom-up solution* to the Tragedy of the Commons.",
            "*Integrating ideas* from agriculture, anthropology, chemistry, complex systems, computer science, earth science, ecology, economics, engineering, and finance.",
            "Driven by an *Information-Age infrastructure* that is easy to scale up with wide applicability.",
            "Creates incentives for individuals to **enhance the global commons** rather than destroy it.",
          ],
        },
        {
          src: "/img/center/cylinder.png",
          alt: "Methane Measurement",
          blurbs: [
            "*World-class measurements* of environmental impacts.",
            "Producing *a new standard* for tracking and documenting world-improving activities.",
          ],
        },
        {
          src: "/img/center/remote-sensing-before.png",
          alt: "Sensing Before",
          blurbs: [
            "Remote sensing provides the needed *monitoring, verification, and reporting (MVR)* of successful stewardship.",
          ],
        },
        {
          src: "/img/center/remote-sensing-after.png",
          alt: "Sensing After",
          blurbs: [
            "Generating high-quality *results that can be trusted* by patrons and markets.",
          ],
        },
      ],
    },
  },
  {
    component: WrappedTextHeader,
    data: {
      section: "World Improving Numbers",
      header: "WINs",
      text: "Remote sensing creates **trustworthy WINs** that translate the actions of stewards into measurable outcomes such as tonnes of CO2e avoided or the amount of forest preserved in a natural state. High quality **WINs generate payments for stewards** from global patrons and markets.",
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
      text: "Rice on Bali has been **sustainably farmed for over a millennium.**  Unfortunately, flooded rice paddies produce methane, a dangerous greenhouse gas.  By changing their irrigation practices to **Alternate Wetting and Drying (AWD)**, farmers can mitigate methane emissions from their fields.  Compensating farmers for taking on the additional risk and effort needed to adopt AWD will allow Bali to **embrace a new regime** of globally sustainable agriculture.",
    },
  },
  {
    component: StatMedia,
    data: {
      statsTitle: "Rice and the Global Commons",
      stats: [
        {
          stat: {
            before: ">",
            number: 10 / 100,
            format: { style: "percent" },
          },
          text: "of anthropogenic *global methane emissions come from rice farming.*",
        },
        {
          stat: {
            first: "*Methane has*",
            number: 28,
            after: "x",
          },
          text: "the *Global Warming Potential of CO2.* While methane has a limited lifetime in the atmosphere, such emmisions may push the global system *beyond critical tipping points.*",
        },
        {
          stat: {
            before: ">",
            number: 70 / 100,
            format: { style: "percent" },
          },
          text: "of the *methane emissions from Balinese rice fields* **can be eliminated** by not flooding the paddies.  AWD also *reduces the runoff of fertilizer* that damages Bali's coral reefs.",
        },
      ],
      media: {
        type: "video",
        src: "/media/video.mp4",
        placeholder: "/media/video-placeholder.png",
        alt: "Video discussing the results from our demonstration project on Bali.",
        caption: "Results from our earlier demonstration project on Bali",
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
            "*In-field gas analyzers* track emissions over time from different irrigation practices.",
            "Such *world-class measurements* provide critical insights not available using the current standards of syringe sampling or national averages.",
          ],
        },
        {
          src: "/img/center/subak-bena.png",
          alt: "Subak Bena",
          blurbs: [
            "Our approach integrates a *deep understanding* of the local people, culture, and institutions.",
            "Incorporating such insights *strengthens local traditions and organizations.*",
          ],
        },
        {
          src: "/img/center/somya-pertiwi.png",
          alt: "Somya Pertiwi",
          blurbs: [
            "The Balinese NGO *Somya Pertiwi (Kindness of the Earth Goddess)* leads the project.",
            "Scientists from the *International Rice Research Institute* are also monitoring our activities.",
            "*Somya Pertiwi* is working within the centuries-old system of *communally-governed subaks* that coordinate rice farming across the paddies.",
            "Agricultural extension agents will *assist the farmers* with the adoption of **AWD** and monitor the results.",
          ],
        },
      ],
    },
  },
  {
    component: StatMedia,
    data: {
      statsTitle: "A Letter to the Future",
      stats: [
        {
          stat: {
            number: 2012,
            format: { useGrouping: false },
          },
          text: "was when the **sustainability of the subak system** was recognized as a *UNESCO World Heritage site.*  Somya Pertiwi designed the UNESCO proposal for the Ministry.",
        },
        {
          stat: {
            number: 19,
          },
          text: "**subaks** form the *core of the UNESCO site*, all of which are paricipating in the **pilot project.**",
        },
        {
          stat: {
            number: 3,
          },
          text: "sources of happiness form the *Balinese philosophy of Tri Hita Karana:* **harmony among nature, humans, and the gods.**",
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
    component: WrappedTextHeader,
    data: {
      section: "Next Steps",
      header: "Engaging with WxC",
      text: "There are many ways you can learn more about World-x-Change and **participate in the Bali Project.**  If you want to know more about the underlying **science and ideas** driving World-x-Change, explore some of our *research papers and background resources.* If you want to **increase WINs,** please sponsor some **Bali Project carbon offsets** that will eliminate tonnes of CO2e from the atmosphere and support the indigenous land stewards who make this possible. Discover **World-x-Change's team** of people, organizations, and supporters working to apply **quality science to improve the planet** for both patrons and stewards.  If you have any questions or comments, please **connect with us.**",
    },
  },
  {
    component: StatMedia,
    data: {
      reverse: true,
      statsTitle: "Bali and Beyond",
      stats: [
        {
          stat: {
            before: "~",
            number: 80000,
            format: {
              style: "unit",
              unit: "hectare",
            },
          },
          text: "*are devoted to rice farming on Bali*.",
        },
        {
          stat: {
            before: "~",
            number: 2_400_000 * 1000,
            format: {
              style: "unit",
              unit: "kilogram",
              notation: "compact",
              compactDisplay: "long",
            },
          },
          text: "(2.4 million tonnes) of *annual CO2e emissions* could be avoided if **AWD** *was adopted across Bali.*",
        },
        {
          stat: {
            number: 1.2 / 100,
            format: { style: "percent", maximumFractionDigits: 2 },
          },
          text: "*of Indonesia's rice is grown on Bali*, and Indonesia is only 7% of global production.  Bali is only the beginning, **scaling to the planet is the goal**.",
        },
      ],
      media: {
        type: "img",
        src: "/img/flooded-v-not.jpeg",
        alt: "Time- and GPS-tagged photo of AWD vs Flooded rice paddies.",
        caption:
          "Time- and GPS-tagged photos are used to ground truth our remote sensing of AWD (left) and Flooded (right) rice fields.",
      },
    },
  },
]);
