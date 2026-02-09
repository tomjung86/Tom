import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Tom J. Schorel — Growth Operator. Business Builder. Strategic Leader.",
  author: "Tom J. Schorel",
  description:
    "I help businesses scale with structure, clarity and financial control, turning growth into something leaders can steer and teams can run.",
  lang: "en",
  siteLogo: "/tom-small.jpg",
  navLinks: [
    { text: "Approach", href: "#approach" },
    { text: "About", href: "#about" },
  ],
  socialLinks: [
    { text: "LinkedIn", href: "https://linkedin.com/in/tomschorel" },
  ],
  socialImage: "/tom-big.jpg",
  canonicalURL: "https://tomschorel.com",
};

export const SITE_CONTENT: SiteContent = {
  hero: {
    name: "Tom J. Schorel",
    specialty: "Making growth operational",
    summary:
      "Complex growth needs structure. Leadership alignment, clear ownership and financial control so businesses scale with clarity and control.",
    email: "tom@tomschorel.com",
  },
  experience: [
    {
      company: "Approach",
      position: "How I Work",
      startDate: "",
      endDate: "",
      summary: [
        "Growth creates complexity. Structure is what allows it to scale.",
        "I turn ambition into aligned leadership, clear ownership, financial visibility and a cadence teams can execute within.",
        "My focus is sustainable growth through strong leadership alignment, P&L accountability and execution that holds as the business grows.",
      ],
    },
  ],
  projects: [],
  about: {
    description: `
I operate in environments where growth is real and ambition is high.

Early experience built instinct and speed. Later came coordination, trade offs and financial responsibility at scale.

Today the focus is leadership alignment, defined ownership, financial visibility and execution that holds as complexity increases.

I work with leadership teams to build the structure behind growth, so the business scales in a controlled, repeatable way.
`,
    image: "/tom-big.jpg",
  },
};
