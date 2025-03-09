import diamond from "/src/imgs/renders/diamond.png";
import moon from "../imgs/renders/moon.png";
import thevoid from "../imgs/renders/thevoid.png";
import golf from "../imgs/renders/golf_square.png";

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
      "A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. ",
  },
  {
    title: "The Void",
    href: thevoid,
    pubDate: new Date("2024-05-08"),
    description:
      "A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. ",
  },
  {
    title: "Moon",
    href: moon,
    pubDate: new Date("2024-09-11"),
    description:
      "A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. ",
  },
  {
    title: "Golf",
    href: golf,
    pubDate: new Date("2024-05-14"),
    description:
      "A paragraph is a self-contained unit of discourse in writing dealing with a particular point or idea. ",
  },
];
