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
    "At the end of 2022, I quit my job as a software engineer to go fulltime into building and scaling my own SaaS businesses. In the past, [I pursued a double degree in computer science and business](/#education), interned at big tech companies in Silicon Valley, and [competed in over 21 hackathons for fun](/#hackathons). I also had the pleasure of being a part of the first ever in-person cohort of buildspace called [buildspace sf1](https://buildspace.so/sf1).",
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
      company: "Girls script summer of code",
      href: "https://gssoc.girlscript.org/",
      badges: [],
      location: "Remote",
      title: "Open Source Contributor",
      logoUrl: "/gssoc-white.png",
      logoUrlDark: "/gssoc-dark.webp",
      start: "May 2025",
      end: "Aug 2025",
      description:
        "Implemented the Bitcoin discreet log contract (DLC) protocol specifications as an open source Typescript SDK. Dockerized all microservices and setup production kubernetes cluster. Architected a data lake using AWS S3 and Athena for historical backtesting of bitcoin trading strategies. Built a mobile app using react native and typescript.",
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
