import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon, GitBranch, Github, FileCode2, Sparkles, BrainCircuit, Eye, LayoutTemplate, ShoppingCart, Layout, Code2 } from "lucide-react";
import { ReactLight } from "@/components/ui/svgs/reactLight";
import { NextjsIconDark } from "@/components/ui/svgs/nextjsIconDark";
import { Typescript } from "@/components/ui/svgs/typescript";
import { Nodejs } from "@/components/ui/svgs/nodejs";
import { Python } from "@/components/ui/svgs/python";
import { Postgresql } from "@/components/ui/svgs/postgresql";
import { Docker } from "@/components/ui/svgs/docker";
import { Kubernetes } from "@/components/ui/svgs/kubernetes";
import { Csharp } from "@/components/ui/svgs/csharp";
import { Tailwind } from "@/components/ui/svgs/tailwind";

export const DATA = {
  name: "Piyush Varma",
  initials: "PV",
  url: "https://piyushhvarma.dev",
  location: "Jaipur, IN",
  locationLink: "https://www.google.com/maps/place/jaipur",
  description:
    "Software Engineer and product builder passionate about AI and problem-solving. I love creating things that people actually use, sharing insights online, and learning openly along the journey.",
  summary:
    "I am a Computer Science student at Manipal University Jaipur with a strong focus on AI/ML and building high-performance web products. Recently, I completed GSSoC 2025 as an Open Source Contributor, where I delivered 9 impactful pull requests across 8 different repositories. I thrive on bridging the gap between complex backend logic and pixel-perfect, accessible user interfaces.",
  avatarUrl: "/me.png",
  skills: [
    { name: "React", icon: ReactLight },
    { name: "Next.js", icon: NextjsIconDark },
    { name: "Vue.js", icon: Code2 },
    { name: "Typescript", icon: Typescript },
    { name: "Node.js", icon: Nodejs },
    { name: "Python", icon: Python },
    { name: "C++", icon: Csharp },
    { name: "Postgres", icon: Postgresql },
    { name: "Docker", icon: Docker },
    { name: "Kubernetes", icon: Kubernetes },
    { name: "Git", icon: GitBranch },
    { name: "GitHub", icon: Icons.github },
    { name: "CSS", icon: FileCode2 },
    { name: "Tailwind CSS", icon: Tailwind },
    { name: "Gen AI", icon: Sparkles },
    { name: "Machine Learning", icon: BrainCircuit },
    { name: "Computer Vision", icon: Eye },
    { name: "WordPress", icon: LayoutTemplate },
    { name: "Shopify", icon: ShoppingCart },
    { name: "Wix", icon: Layout },
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
  ],
  contact: {
    email: "pytworks@gmail.com",
    tel: "+91 8999257783",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/piyushhvarma/",
        icon: Icons.github,
        navbar: true,
      },

      LinkedIn: {
        name: "LinkedIn",
        url: "https://linkedin.com/in/piyushhvarma/",
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: "X",
        url: "",
        icon: Icons.x,

        navbar: true,
      },

      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "GirlScript Summer of Code (GSSoC)",
      href: "https://gssoc.girlscript.org/",
      badges: [],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/gssoc-white.png",
      logoUrlDark: "/gssoc-dark.webp",
      start: "May 2025",
      end: "Aug 2025",
      description:
        "Contributed to 8+ open-source repositories with 9+ impactful pull requests focused on UI/UX, performance, and accessibility. Engineered key features including a habit-tracking analytics dashboard with data export (CSV/JSON) capabilities, interactive summary pages, and animated UI elements. Optimized broad-reach platforms for responsive design and WCAG standards, ensuring consistent user experiences across diverse frontend architectures.",
    },
    {
      company: "Hacktoberfest",
      badges: [],
      href: "https://hacktoberfest.digitalocean.com/",
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/hacktoberfest-animation.gif",
      start: "Oct 2025",
      end: "Nov 2025",
      description:
        "Implemented a custom Kubernetes controller in Go to automate the deployment of MySQL and ProxySQL custom resources in order to enable 2,000+ internal developers to instantly deploy their app databases to production. Wrote several scripts in Go to automate MySQL database failovers while maintaining master-slave replication topologies and keeping Zookeeper nodes consistent with changes.",
    },
  ],
  education: [
    {
      school: "Manipal University Jaipur",
      href: "https://jaipur.manipal.edu",
      degree: "Bachelor of Technology in Artificial Intelligence and Machine Learning",
      logoUrl: "/muj.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Dawale Junior College",
      href: "https://dawalejuniorcollege.com",
      degree: "Higher Secondary Education",
      logoUrl: "/dawale.png",
      start: "2021",
      end: "2023",
    },
  ],
  projects: [
    {
      title: "AutoSub - AI Subtitles Generator",
      href: "https://autosub-ai.vercel.app/",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://autosub-ai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/piyushhvarma/autosub",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Fridge2Food - AI Recipe Generator",
      href: "https://fridge2food-pyt.vercel.app/",
      dates: "Feb 2026 - March 2026",
      active: true,
      description:
        "Fridge2Food is a web application that helps users generate recipes based on the ingredients they have in their fridge. It uses AI to generate recipes that are tailored to the user's preferences and dietary restrictions.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://fridge2food-pyt.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/piyushhvarma/fridge2food",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "/fridge2food.mp4",
    },
    {
      title: "Medpulse-AI",
      href: "https://medpulse-ai.vercel.app/",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Medpulse-AI is a web application that helps users generate medical reports based on the symptoms they have. It uses AI to generate medical reports that are tailored to the user's specific case and provided symptoms.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://medpulse-ai.vercel.app/",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/piyushhvarma/MedPulse-AI",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
  ],
  contributions: [
    {
      title: "My Habit Tracker",
      href: "https://github.com/Riti2407/my-habit-tracker",
      dates: "June 2025 - July 2025",
      active: true,
      description:
        "Developed a data-driven Habit Tracker dashboard during GSSoC 2025. Implemented a cross-platform Data Export feature (JSON/CSV), interactive monthly summary analytics, and comprehensive UI refinements for accessibility and dark mode consistency.",
      technologies: ["React", "Next.js", "TailwindCSS", "Chart.js", "Web APIs"],
      program: "GSSoC '25",
      links: [
        {
          type: "Source",
          href: "https://github.com/Riti2407/my-habit-tracker",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Research Paper Organizer",
      href: "https://github.com/supriya46788/Research-Paper-Organizer",
      dates: "July 2025",
      active: true,
      description:
        "Simplified academic resource management for GSSoC 2025. Replaced manual year inputs with optimized dropdown filters, streamlining usability and ensuring seamless integration with legacy backend logic.",
      technologies: ["JavaScript", "HTML/CSS", "UI/UX Optimization"],
      program: "GSSoC '25",
      links: [
        {
          type: "Source",
          href: "https://github.com/supriya46788/Research-Paper-Organizer",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "The Cawnpore Mag",
      href: "https://github.com/Kritika75/TheCawnporeMag.github.io",
      dates: "July 2025 - August 2025",
      active: true,
      description:
        "Led UI/UX refinements for a digital magazine platform. Optimized the newsletter subscription interface for responsiveness, enhanced navbar contrast for improved accessibility, and implemented interactive hover effects to boost user engagement.",
      technologies: ["HTML5", "CSS3", "JavaScript", "Responsive Design"],
      program: "GSSoC '25",
      links: [
        {
          type: "Source",
          href: "https://github.com/Kritika75/TheCawnporeMag.github.io",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "ReWear",
      href: "https://github.com/AKing-283/Rewear",
      dates: "June 2025",
      active: true,
      description:
        "Redesigned the foundational layout of ReWear's sustainable fashion landing page. Built an accessibility-first footer with multi-column content and integrated newsletter components to enhance community building.",
      technologies: ["React", "TailwindCSS", "UI/UX Design"],
      program: "GSSoC '25",
      links: [
        {
          type: "Source",
          href: "https://github.com/AKing-283/Rewear",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Quote of the Day",
      href: "https://github.com/DipanNama/quote-of-the-day",
      dates: "October 2025",
      active: true,
      description:
        "Architected keyboard navigation (arrow keys) and parallel API fetching logic (Promise.any) to enhance user experience and performance. Implemented stable fallback systems and timeout handling for robust remote data fetching.",
      technologies: ["JavaScript", "Async/Await", "Accessibility (A11y)", "Performance"],
      program: "Hacktoberfest '25",
      links: [
        {
          type: "Source",
          href: "https://github.com/DipanNama/quote-of-the-day",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Roulette Calculator React",
      href: "https://github.com/idna001/roulette-calculator-react",
      dates: "October 2025",
      active: true,
      description:
        "Implemented a scalable React-based theme system using State and Effect hooks. Built persistent user preferences with localStorage and global CSS variables for a seamless dark/light mode transition across the application.",
      technologies: ["React", "CSS Variables", "localStorage", "Hooks"],
      program: "Hacktoberfest '25",
      links: [
        {
          type: "Source",
          href: "https://github.com/idna001/roulette-calculator-react",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Dev-Toolkit",
      href: "https://github.com/heysaiyad/dev-toolkit",
      dates: "October 2025",
      active: true,
      description:
        "Contributed several utility tools including Even/Odd checkers and mathematical calculation modules. Focused on robust input validation, color-coded visual feedback, and theme-aware UI components.",
      technologies: ["HTML", "CSS", "JavaScript", "Logic Optimization"],
      program: "Hacktoberfest '25",
      links: [
        {
          type: "Source",
          href: "https://github.com/heysaiyad/dev-toolkit",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Login-Signup Templates",
      href: "https://github.com/avinash201199/Login-Signup-templates",
      dates: "October 2025",
      active: true,
      description:
        "Engineered a scalable theme engine for reusable login/signup templates. Implemented persistent dark mode using localStorage, CSS variables for design tokens, and synchronized scrolling utilities with smooth animations.",
      technologies: ["CSS Variables", "JavaScript", "Local Storage", "UI UX"],
      program: "Hacktoberfest '25",
      links: [
        {
          type: "Source",
          href: "https://github.com/avinash201199/Login-Signup-templates",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Hacktoberfest 2025 Hub",
      href: "https://github.com/avinash201199/Hacktoberfest2025",
      dates: "October 2025",
      active: true,
      description:
        "Enhanced the official contribution hub with modern UI aesthetics. Implemented a gradient-based design language, glassmorphism sidebars, and an accessibility-focused dark/light theme system in the primary navigation.",
      technologies: ["Glassmorphism", "CSS Gradients", "Responsive Design"],
      program: "Hacktoberfest '25",
      links: [
        {
          type: "Source",
          href: "https://github.com/avinash201199/Hacktoberfest2025",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
    {
      title: "Hacktober Base",
      href: "https://github.com/noodles-sed/hacktober-base",
      dates: "October 2025",
      active: true,
      description:
        "Improved cross-page navigation by implementing a smart 'Scroll to Top' component. Features include a dynamic scroll-depth threshold activation, fade-in/out transitions, and smooth scrolling optimization.",
      technologies: ["JavaScript", "TailwindCSS", "Animation"],
      program: "Hacktoberfest '25",
      links: [
        {
          type: "Source",
          href: "https://github.com/noodles-sed/hacktober-base",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "",
    },
  ],
  hackathons: [
    {
      title: "Hackforge - AIML Community Official Hackathon",
      dates: "November 23rd - 25th, 2018",
      location: "Jaipur, India",
      description:
        "Developed a mobile application which delivered bedtime stories to children using augmented reality.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-western.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "Hack The North",
      dates: "September 14th - 16th, 2018",
      location: "Waterloo, Ontario",
      description:
        "Developed a mobile application which delivers university campus wide events in real time to all students.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-the-north.png",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2019/mlh-trust-badge-2019-white.svg",
      links: [],
    },
    {
      title: "HackDavis",
      dates: "January 20th - 21st, 2018",
      location: "Davis, California",
      description:
        "Developed a mobile application which allocates a daily carbon emission allowance to users to move towards a sustainable environment.",
      image:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/hackline/hack-davis.png",
      win: "Best Data Hack",
      mlh: "https://s3.amazonaws.com/logged-assets/trust-badge/2018/white.svg",
      links: [
        {
          title: "Devpost",
          icon: <Icons.globe className="h-4 w-4" />,
          href: "https://devpost.com/software/my6footprint",
        },
        {
          title: "ML",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/my6footprint-machine-learning",
        },
        {
          title: "iOS",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/CarbonWallet",
        },
        {
          title: "Server",
          icon: <Icons.github className="h-4 w-4" />,
          href: "https://github.com/Wallet6/wallet6-server",
        },
      ],
    },
  ],
} as const;
