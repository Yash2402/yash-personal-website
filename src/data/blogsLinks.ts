interface blogLink{
    title: string;
    url: string;
    pubDate: Date;
    author: string;
    tags: string[];
    desc: string;
}

export const blogLinks: blogLink[] = [
    {
        title: "First Blog",
        url: "/posts/post-1/",
        pubDate: new Date("27-05-2024"),
        author: "Yash Sharma",
        tags: ["astro", "learning"],
        desc: "",
    },
    {
        title: "Second Blog",
        url: "/posts/post-2/",
        pubDate: new Date("27-05-2024"),
        author: "Yash Sharma",
        tags: ["physics", "astronomy"],
        desc: "hello",
    }
]