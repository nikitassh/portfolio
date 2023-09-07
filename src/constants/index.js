import {
  mobile,
  backend,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  git,
  figma,
  docker,
  threejs,
  monday,
  edtch,
  rgbrands,
  botcommerce,
  crmneo,
  garage,
  ninja,
  bima,
  vpluse
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "projects",
    title: "Projects",
  },
];

const services = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "React Native Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "React & React Natitve Developer",
    company_name: "Monday Labs, Bukhara",
    icon: monday,
    iconBg: "#fff",
    date: "June 2020 - June 2021",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React & React Native Developer",
    company_name: "Edtch, Norfolk",
    icon: edtch,
    iconBg: "#fff",
    date: "June 2021 - September 2022",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
  {
    title: "React Developer",
    company_name: "RG Brands, Almaty",
    icon: rgbrands,
    iconBg: "#fff",
    date: "January 2023 - June 2023",
    points: [
      "Developing and maintaining web applications using React.js and other related technologies.",
      "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
      "Implementing responsive design and ensuring cross-browser compatibility.",
      "Participating in code reviews and providing constructive feedback to other developers.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Botcommerce",
    description:
      "Web platform where a user with a few clicks can create his own online store (telegram bot)",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django rest api",
        color: "green-text-gradient",
      },
      {
        name: "bulma",
        color: "pink-text-gradient",
      },
    ],
    image: botcommerce,
    source_code_link: "https://botcommerce.io/",
  },
  {
    name: "CRM Neo",
    description:
      "CRM system for automating business processes",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django rest api",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: crmneo,
    source_code_link: "https://www.crmneo.com/",
  },
  {
    name: "Garage 24",
    description:
      "Online auto parts store in Uzbekistan",
    tags: [
      {
        name: "nextjs",
        color: "blue-text-gradient",
      },
      {
        name: "django rest api",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: garage,
    source_code_link: "https://garage24.uz/",
  },
  {
    name: "Hungry Ninja",
    description:
        "Service of quick orders of dishes in different locations",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django rest api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: ninja,
    source_code_link: "https://hungry.ninja/",
  },
  {
    name: "Bima",
    description:
        "Insurance company in Tajikistan",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "django rest api",
        color: "green-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: bima,
    source_code_link: "https://bima.tj/",
  },
  {
    name: "Vpluse",
    description:
        "This is a loyalty program that helps each member to always stay in the Plus.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "fast api",
        color: "green-text-gradient",
      },
      {
        name: "bootstrap",
        color: "pink-text-gradient",
      },
    ],
    image: vpluse,
    source_code_link: "https://bima.tj/",
  },
];

export { services, technologies, experiences, testimonials, projects };
