"use client";
import { makePageStream } from "@/app/constants";
import CenterHeader from "@/components/CenterHeader";
import TeamList, { TagCollection } from "@/components/TeamList";
const tags = new TagCollection(
  ["Sc", "#02c43a", "Science"],
  ["En", "#DD6B3A", "Engineering"],
  ["St", "#04C8CB", "Strategy"],
  ["Ag", "#A4F687", "Agriculture / Ecology"],
  ["Ar", "#84DCCF", "Art / Design"],
  ["Ec", "#B87333", "Economics / Finance"],
  ["Ka", "#FFD700", "Karma..."]
);

export default makePageStream([
  {
    component: CenterHeader,
    data: {
      header: "The Team",
      text: "Passionate about using science and technology to improve the world.",
    },
  },
  {
    component: TeamList,
    data: {
      header: "Leads",
      text: "*Envisioning* and *implementing* the **fundamental ideas**",
      people: [
        {
          name: "J. Stephen Lansing",
          img: "/img/team/steve.webp",
          link: "",
          tags: tags.get("Sc", "En", "St", "Ag"),
          role: "Santa Fe Institute, Complexity Science Hub, and Somya Pertiwi",
          bio: "",
        },
        {
          name: "John H. Miller",
          img: "/img/team/john.webp",
          link: "//www.jhmsfi.com",
          tags: tags.get("Sc", "En", "St", "Ec"),
          role: "Carnegie Mellon University and the Santa Fe Institute",
          bio: "",
        },
      ],
    },
  },
  {
    component: TeamList,
    data: {
      header: "Core",
      text: "Contributing core **ideas** and *infrastructure*",
      people: [
        {
          name: "Marc Müller",
          img: "/img/team/muellema.webp",
          link: "",
          tags: tags.get("Sc", "En"),
          role: "Eawag",
          bio: "",
        },
        {
          name: "Emily Zuetell",
          img: "/img/team/emily.webp",
          link: "",
          tags: tags.get("Sc", "En"),
          role: "Carnegie Mellon University",
          bio: "",
        },
        /* {
          name: "Kha-Ai Tran",
          img: "/img/team/default.webp",
          link: "",
          tags: tags.get("Sc", "En"),
          role: "",
          bio: "",
        },*/
        {
          name: "Sander Vonk",
          img: "/img/team/sander.webp",
          link: "//svonk.me",
          tags: tags.get("En", "Ar"),
          role: "The World x Change site was *designed, developed, and built by Sander* in Next.js with motion.dev for interactions.",
          bio: "Sander is a Carnegie Mellon University (class of 2028) Information Systems & Human Computer Interaction major with a *passion for education and applied technology*. He independenly creates web-based apps aimed at providing equal opportunity for students worldwide, teaching him technical skills such a proficiency in over ten coding languages, and deep familiarity with UX/UI and Figma. You can find more of his work at <a href='https://svonk.me' target='_blank' rel='noopener noreferrer'>**svonk.me**</a>.",
        },
      ],
    },
  },
  {
    component: TeamList,
    data: {
      header: "Core (Bali)",
      text: "Providing *ideas* and **results**",
      people: [
        {
          name: "Wayan Alit Arthawigina",
          img: "/img/team/alit.webp",
          link: "",
          tags: tags.get("Sc", "En", "St", "Ag"),
          role: "Somya Pertiwi",
          bio: "",
        },
        {
          name: "Ning Ning Chung",
          img: "/img/team/ningning.webp",
          link: "",
          tags: tags.get("Sc"),
          role: "Singapore University of Social Science",
          bio: "",
        },
        /* {
          name: "Nathalie Goodkin",
          img: "/img/team/ng.webp",
          link: "",
          tags: tags.get("Sc"),
          role: "American Museum of Natural History",
          bio: "",
        },*/
        /* {
          name: "Jani Tanzil",
          img: "/img/team/jt.webp",
          link: "",
          tags: tags.get("Sc"),
          role: "St. John's Island National Marine Laboratory",
          bio: "",
        },*/
        /* {
          name: "Renée Smits",
          img: "/img/team/rs.webp",
          link: "",
          tags: tags.get("St"),
          role: "Rabobank, Restore the Legacy",
          bio: "",
        },*/
      ],
    },
  }, //end of component
  {
    component: TeamList,
    data: {
      header: "Network",
      text: "Generating **insights,** *advice,* and other *key* **contributions**",
      people: [
        {
          name: "Jeff Kersey",
          img: "/img/team/jeff.webp",
          link: "",
          tags: tags.get("St"),
          role: "Jacobs, EXPO 2020 Dubai",
          bio: "",
        },
        {
          name: "Andrew Zolli",
          img: "/img/team/andrewzolli.webp",
          link: "",
          tags: tags.get("Sc", "En"),
          role: "Chief Impact Officer, Planet",
          bio: "",
        },
        {
          name: "Ross Buhrdorf",
          img: "/img/team/ross.webp",
          link: "",
          tags: tags.get("St"),
          role: "ZenBusiness, Inc.",
          bio: "",
        },
        /* {
          name: "Bjoern Ole Sander",
          img: "/img/team/ole.webp",
          link: "",
          tags: tags.get("Sc", "Ag"),
          role: "International Rice Research Institute",
          bio: "",
        },*/
        /* {
          name: "Anton Urfels",
          img: "/img/team/anton.webp",
          link: "",
          tags: tags.get("Sc", "Ag"),
          role: "CGIAR",
          bio: "",
        },*/
        /*{
          name: "Kazuki Saito",
          img: "/img/team/kazuki.webp",
          link: "",
          tags: tags.get("Sc", "Ag"),
          role: "International Rice Research Institute",
          bio: "",
        },*/
        /* {
          name: "John Lansing",
          img: "/img/team/jc.webp",
          link: "",
          tags: tags.get("St"),
          role: "Hahn and Hahn LLP",
          bio: "",
        },*/
        {
          name: "Chris Kempes",
          img: "/img/team/chris.webp",
          link: "",
          tags: tags.get("Sc"),
          role: "Santa Fe Institute",
          bio: "",
        },
        /* {
          name: "Gabrielle B. Dreyfus",
          img: "/img/team/gabrielle.webp",
          link: "",
          tags: tags.get("Sc"),
          role: "Institute for Governance and Sustainable Development",
          bio: "",
        },*/
        {
          name: "Hayden Bernhardt",
          img: "/img/team/hayden.webp",
          link: "",
          tags: tags.get("Ar"),
          role: "Harvard University",
          bio: "",
        },
        {
          name: "Vibeke Sorensen",
          img: "/img/team/vibeke.webp",
          link: "",
          tags: tags.get("En", "St", "Ar"),
          role: "",
          bio: "",
        },
      ],
    },
  }, //end of component
  {
    component: TeamList,
    data: {
      header: "Organizations",
      text: "*Supporting* the **project** in various ways",
      people: [
        {
          name: "Santa Fe Institute",
          img: "/img/team/sfi.webp",
          link: "",
          tags: tags.get("Sc"),
          role: "Santa Fe, NM USA",
          bio: "",
        },
        {
          name: "Carnegie Mellon University",
          img: "/img/team/cmu.webp",
          link: "",
          tags: tags.get("Sc", "En"),
          role: "Pittsburgh, PA USA",
          bio: "",
        },
        {
          name: "Planet",
          img: "/img/team/planet.webp",
          link: "",
          tags: tags.get("Sc", "En"),
          role: "San Francisco, CA USA",
          bio: "",
        },
        /* {
          name: "Max Plank Institute",
          img: "/img/team/mp.webp",
          link: "",
          tags: tags.get("Sc"),
          role: "",
          bio: "",
        },*/
        /* {
          name: "Complexity Science Hub",
          img: "/img/team/csh.webp",
          link: "",
          tags: tags.get("Sc"),
          role: "",
          bio: "",
        },*/
      ],
    },
  }, //end of component
]);
