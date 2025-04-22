"use client";
import { makePageStream } from "@/app/constants";
import CenterHeader from "@/components/CenterHeader";
import TeamList, { TagCollection } from "@/components/TeamList";
const tags = new TagCollection(["Development", "ffff"]);

export default makePageStream([
  {
    component: CenterHeader,
    data: {
      header: "The Team",
      text: "As scientists, engineers, and business professionals who are passionate about using technology to improve the world, we are committed to making a positive impact on the environment and society.",
    },
  },
  {
    component: TeamList,
    data: {
      header: "Development Team",
      text: "Volunteers who contribute their time and expertise to help us build and maintain our *online platform and* **web resources**.",
      people: Array(4).fill({
        name: "Sander Vonk",
        img: "/img/team/sander.png",
        link: "//svonk.me",
        tags: tags.get("Development"),
        role: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi porta nisi eu pretium mollis. In eu porttitor tortor. Vestibulum vulputate ante condimentum nunc pellentesque molestie. Aenean mi arcu, congue vel tempus non, convallis a est. Integer non lobortis nibh.",
        bio: "Suspendisse id libero id eros congue euismod ut in libero. Praesent non magna ac leo congue consequat quis vitae massa. Mauris rutrum risus felis, ac rhoncus nisi lobortis eu. Praesent blandit mi eu sapien tincidunt consectetur. Mauris ullamcorper sem vel mi laoreet faucibus.",
      }),
    },
  },
]);
