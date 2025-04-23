"use client";
import { makePageStream } from "@/app/constants";
import CenterHeader from "@/components/CenterHeader";
import TeamList, { TagCollection } from "@/components/TeamList";
const tags = new TagCollection(
  ["Sc", "#02c43a", "Science"],
  ["En", "#DD6B3A", "Engineering"],
  ["St", "#04C8CB", "Strategy"],
  ["Ag", "#A4F687", "Agriculture"],
  ["Ar", "#84DCCF", "Art / Design"],
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
      header: "Core",
      text: "Envisioning and implementing the needed **ideas** and *infrastructure*.",
      people: [
        {
          name: "J. Stephen Lansing",
          img: "/img/team/steve.jpeg",
          link: "",
          tags: tags.get("Sc", "En", "St", "Ag"),
          role: "Santa Fe Institute, Complexity Science Hub, and Somya Pertiwi",
          bio: "",
        },
        {
          name: "John H. Miller",
          img: "/img/team/john.jpg",
          link: "//www.jhmsfi.com",
          tags: tags.get("Sc", "En", "St", "Ar"),
          role: "Carnegie Mellon University and the Santa Fe Institute",
          bio: "",
        },
        {
          name: "Emily Zuetell",
          img: "/img/team/emily.jpeg",
          link: "",
          tags: tags.get("Sc", "En"),
          role: "Carnegie Mellon University",
          bio: "",
        },
       /* {
          name: "Kha-Ai Tran",
          img: "/img/team/default.jpg",
          link: "",
          tags: tags.get("Sc", "En"),
          role: "",
          bio: "",
        },*/
        {
          name: "Sander Vonk",
          img: "/img/team/sander.png",
          link: "//svonk.me",
          tags: tags.get("En", "Ar"),
          role: "Carnegie Mellon University",
          bio: "",
        },
        {
          name: "Jeff Kersey",
          img: "/img/team/jeff.jpg",
          link: "",
          tags: tags.get("St"),
          role: "Jacobs, EXPO 2020 Dubai",
          bio: "",
        },
      ],
    },
  },
  {
    component: TeamList,
    data: {
      header: "Bali",
      text: "From **ideas** to *results.*",
      people: [
        {
          name: "Wayan Alit Arthawigina",
          img: "/img/team/alit.jpg",
          link: "",
          tags: tags.get("Sc", "En", "St", "Ag"),
          role: "Somya Pertiwi",
          bio: "",
        },
        {
          name: "Ning Ning Chung",
          img: "/img/team/ningning.jpeg",
          link: "",
          tags: tags.get("Sc"),
          role: "Singapore University of Social Science",
          bio: "",
        },       
        /* {
          name: "Nathalie Goodkin",
          img: "/img/team/ng.jpeg",
          link: "",
          tags: tags.get("Sc"),
          role: "American Museum of Natural History",
          bio: "",
        },*/
        /* {
          name: "Jani Tanzil",
          img: "/img/team/jt.jpeg",
          link: "",
          tags: tags.get("Sc"),
          role: "St. John's Island National Marine Laboratory",
          bio: "",
        },*/
        /* {
          name: "Renée Smits",
          img: "/img/team/rs.jpeg",
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
      text: "Generating *insights,* advice, and other **key contributions.**",
      people: [
        {
          name: "Ross Buhrdorf",
          img: "/img/team/ross.png",
          link: "",
          tags: tags.get("St"),
          role: "ZenBusiness, Inc.",
          bio: "",
        },
       /* {
          name: "Bjoern Ole Sander",
          img: "/img/team/ole.png",
          link: "",
          tags: tags.get("Sc", "Ag"),
          role: "International Rice Research Institute",
          bio: "",
        },*/
       /* {
          name: "Anton Urfels",
          img: "/img/team/anton.jpg",
          link: "",
          tags: tags.get("Sc", "Ag"),
          role: "CGIAR",
          bio: "",
        },*/
        /*{
          name: "Kazuki Saito",
          img: "/img/team/kazuki.png",
          link: "",
          tags: tags.get("Sc", "Ag"),
          role: "International Rice Research Institute",
          bio: "",
        },*/
       /* {
          name: "John Lansing",
          img: "/img/team/jc.jpg",
          link: "",
          tags: tags.get("St"),
          role: "Hahn and Hahn LLP",
          bio: "",
        },*/
        {
          name: "Chris Kempes",
          img: "/img/team/chris.jpeg",
          link: "",
          tags: tags.get("Sc"),
          role: "Santa Fe Institute",
          bio: "",
        },
       /* {
          name: "Gabrielle B. Dreyfus",
          img: "/img/team/gabrielle.jpg",
          link: "",
          tags: tags.get("Sc"),
          role: "Institute for Governance and Sustainable Development",
          bio: "",
        },*/
        {
          name: "Hayden Bernhardt",
          img: "/img/team/hayden.jpeg",
          link: "",
          tags: tags.get("Ar"),
          role: "Harvard University",
          bio: "",
        },
        {
          name: "Vibeke Sorensen",
          img: "/img/team/vibeke.jpg",
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
      text: "Supporting our efforts in various ways.",
      people: [
        {
          name: "Santa Fe Institute",
          img: "/img/team/sfi.png",
          link: "",
          tags: tags.get("Sc"),
          role: "Santa Fe, NM USA",
          bio: "",
        },
        {
          name: "Carnegie Mellon University",
          img: "/img/team/cmu.png",
          link: "",
          tags: tags.get("Sc"),
          role: "Pittsburgh, PA USA",
          bio: "",
        },
       /* {
          name: "Max Plank Institute",
          img: "/img/team/mp.png",
          link: "",
          tags: tags.get("Sc"),
          role: "",
          bio: "",
        },*/
       /* {
          name: "Complexity Science Hub",
          img: "/img/team/csh.png",
          link: "",
          tags: tags.get("Sc"),
          role: "",
          bio: "",
        },*/
      ],
    },
  }, //end of component
]);
