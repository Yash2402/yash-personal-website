import diamond from "/src/imgs/renders/diamond.png";
import moon from "../imgs/renders/moon.png";
import thevoid from "../imgs/renders/thevoid.png";
import golf from "../imgs/renders/golf_square.png";
import chair from "../imgs/renders/chair.png";
import mcdonalds from "../imgs/renders/McDonald-Final.png";
import ring from "../imgs/renders/ring.png";
import peace from "../imgs/renders/peace.jpeg";
import chrysalis from "../imgs/renders/Chrysalis.png";

interface renders {
  title: string;
  href: ImageMetadata;
  pubDate: Date;
  description: string;
}

export const renders: renders[] = [
  {
    title: "Nature's Gem",
    href: diamond,
    pubDate: new Date("2024-02-24"),
    description:
      "Truth, like light through a prism, is ever-shifting—revealed only in fragments and reflections.",
  },
  {
    title: "Chair",
    href: chair,
    pubDate: new Date("2024-04-10"),
    description: "A simple fucking chair.",
  },
  {
    title: "Ring",
    href: ring,
    pubDate: new Date("2024-05-02"),
    description: "A ring that is not a ring.",
  },
  {
    title: "The Void",
    href: thevoid,
    pubDate: new Date("2024-05-08"),
    description: "Me staring into the abyss, the abyss staring back.",
  },
  {
    title: "Golf",
    href: golf,
    pubDate: new Date("2024-05-14"),
    description:
      "A golf ball in a golf course full of flowers and ready to be hit.",
  },
  {
    title: "PEACE",
    href: peace,
    pubDate: new Date("2024-05-28"),
    description:
      "Me: I want PEACE in the world. I want PEACE in the world. I want PEACE in the world.",
  },
  {
    title: "McDonalds",
    href: mcdonalds,
    pubDate: new Date("2024-07-14"),
    description: "The McChair—designed for those who shit everytime they sit",
  },
  {
    title: "Moon",
    href: moon,
    pubDate: new Date("2024-09-11"),
    description: "Not the moon gatekeeping its full potential.",
  },
  {
    title: "Chrysalis",
    href: chrysalis,
    pubDate: new Date("2024-05-23"),
    description: "Just a shiny shape thingy. something special",
  },
];
