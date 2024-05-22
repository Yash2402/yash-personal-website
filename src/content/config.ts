import { z, defineCollection } from "astro:content";

const blogCollection = defineCollection({
    type: "content", schema: ({ image }) => z.object({
        title: z.string(),
        author: z.string(),
        pubDate: z.date(),
        description: z.string(),
        banner: z.object({ url: image(), alt: z.string() }).optional(),
        tags: z.array(z.string()),
    })
})

const projectCollection = defineCollection({
    type: "content", schema: ({ image }) => z.object({
        title: z.string(),
        pubDate: z.date(),
        description: z.string(),
        banner: z.object({ url: image(), alt: z.string() }).optional(),
        resources: z.array(z.object({ url: z.string(), name: z.string() })).optional(),
    })
})

export const collections = {
    'blogs': blogCollection,
    'projects': projectCollection,
};
