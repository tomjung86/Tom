import type { SiteConfig, SiteContent } from "../types";

export const SITE_CONFIG: SiteConfig = {
  title: "Tom J. Schorel — Growth Operator. Business Builder. Strategic Leader.",
  author: "Tom J. Schorel",
  description:
    "I help businesses scale with structure, clarity and financial control, turning growth into something leaders can steer and teams can run.",
  lang: "en",
  siteLogo: "/tom-small.jpg",
    navLinks: [
        { text: "Work", href: "#work" },
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
    
    work: {
      heading: "Work with me",
      intro:
        "Short-term advisory and interim support. Clear scope, fast momentum, real outcomes.",
      email: "tom@tomschorel.com",
      offers: [
        {
          title: "Advisory Session",
          description: "A focused review to create clarity and a practical next-step plan.",
          bullets: [
            "60–90 minutes, structured and direct",
            "Priorities, trade-offs, and what to do next",
            "Follow-up notes with recommended actions",
          ],
          ctaText: "Book via email",
          ctaHref: "mailto:tom@tomschorel.com?subject=Advisory%20Session",
          chips: ["Clarity", "Strategy", "Execution"],
        },
        {
          title: "Ops and Performance Audit",
          description: "A short engagement to identify bottlenecks, ownership gaps, and reporting that does not drive action.",
          bullets: [
            "Operating model and decision flow review",
            "Reporting, KPI ownership, and cadence",
            "Practical recommendations leadership can implement immediately",
          ],
          ctaText: "Request scope",
          ctaHref: "mailto:tom@tomschorel.com?subject=Ops%20and%20Performance%20Audit",
          chips: ["Operating Model", "KPI", "Rhythm"],
        },
        {
          title: "Interim Leadership Support",
          description: "Hands-on leadership support during growth, change, or transition.",
          bullets: [
            "Short-term operational leadership",
            "Stabilise execution and align teams",
            "Bring structure without slowing momentum",
          ],
          ctaText: "Discuss engagement",
          ctaHref: "mailto:tom@tomschorel.com?subject=Interim%20Leadership%20Support",
          chips: ["Leadership", "P&L", "Delivery"],
        },
      ],
    },
    
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
