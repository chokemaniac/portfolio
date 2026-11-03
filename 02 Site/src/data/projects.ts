export const GH = "https://chokemaniac.github.io/portfolio/";

export type Project = {
  href: string; kind: string; title: string; text: string;
  thumb: { img: string } | { mp4: string };
};

export const projects: Record<string, Project> = {
  viessmann: {
    href: "/case-study-viessmann", kind: "Case Study", title: "Viessmann Website Builder",
    text: "How i unified Viessmann’s B2C web experiences in all 43 of their market countries and dramatically improved the usability and conversion rate. In the end we won an award for “Best Redesign”",
    thumb: { img: "fb9289d7c42b" },
  },
  encore: {
    href: "/case-study-encore", kind: "Case Study", title: "Encore Live Performances",
    text: "Discover how i changed my client’s business model and turned a good idea into a great one. My new value proposition paired with a super high fidelity prototype helped land the investor buy-in.",
    thumb: { mp4: "encore_thumbnail.mp4" },
  },
  volkswagen: {
    href: "/showcase-volkswagen", kind: "Showcase", title: "Volkswagen HMI Design",
    text: "I was part of two design teams. First i worked on an Infotainment System tailored for the Chinese market. Later i moved over to the HMI design team for the series production in their entire fleet.",
    thumb: { img: "f3d4a491975f" },
  },
  favourites: {
    href: "/showcase-favourites", kind: "Showcase", title: "My favourite Projects",
    text: "In my long career i successfully delivered more than 200 projects to happy clients. Here are some more of my personal favourites that really enjoyed working on.",
    thumb: { mp4: "viessmann_developers_thumbnail.mp4" },
  },
};
