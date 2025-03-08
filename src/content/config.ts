import { z, defineCollection } from "astro:content";
import { glob } from "astro/loaders";

const blogCollection = defineCollection({
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      author: z.string(),
      pubDate: z.date(),
      description: z.string(),
      banner: z.object({ url: image(), alt: z.string() }).optional(),
      tags: z.array(z.string()),
      postNo: z.number(),
    }),
});

const projectCollection = defineCollection({
  type: "content",
  schema: ({ image }) =>
    z.object({
      title: z.string(),
      pubDate: z.date(),
      description: z.string(),
      banner: z.object({ url: image(), alt: z.string() }).optional(),
      resources: z
        .array(z.object({ url: z.string(), name: z.string() }))
        .optional(),
      githubLink: z.string(),
      postNo: z.number(),
    }),
});

export const collections = {
  blogs: blogCollection,
  projects: projectCollection,
};
