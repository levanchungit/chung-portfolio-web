type IItemWork = {
  id: number;
  title: string;
  numberCount: string;
  image: string;
};

export const navMenu = [
  {
    name: "Start",
    link: "/",
  },
  {
    name: "Work",
    link: "/",
  },
  {
    name: "About",
    link: "/",
  },
];

export const itemWorks: IItemWork[] = [
  {
    id: 1,
    title: "TinVietSoft Warehouse Management",
    numberCount: "00",
    image: "/images/work_tvs.jpg",
  },
  {
    id: 2,
    title: "Seven Shop",
    numberCount: "01",
    image: "/images/work_sevenshop.jpg",
  },
  {
    id: 3,
    title: "Eatery",
    numberCount: "02",
    image: "/images/work_eatery.png",
  },
  {
    id: 4,
    title: "EU",
    numberCount: "03",
    image: "/images/work_eu.png",
  },
  {
    id: 5,
    title: "Super Mario",
    numberCount: "04",
    image: "/images/work_mario.jpg",
  },
];

type IItemSkills = string[];

export const listSkills: IItemSkills = [
  "HTML/CSS/JS",
  "Javascript",
  "Node.js",
  "C#",
  "Photoshop",
  "Illustrator",
  "Figma",
  "Bootstrap/Tailwind",
  "Tailwind",
  "npm/yarn",
  "Firebase",
  "MySQL/MongoDB",
  "UX/UI",
  "Java",
  "Unity",
  "TypeScript",
  "NextJS",
];

type IItemExperience = {
  position: string;
  where: string;
  from: string;
  to: string;
  description: string;
};

export const listExperience: IItemExperience[] = [
  {
    where: "TinVietSoft - Human Resource Management",
    position: "Full-stack Developer",
    from: "Feb 2023",
    to: "July 2023",
    description:
      "Programming with timekeeper, deployed application to production (android, ios) ",
  },
  {
    where: "Education - SevenShop Mobile & Web Admin",
    position: "Leader",
    from: "Jan 2023",
    to: "April 2023",
    description:
      "Selling clothing, manage source code github, project management trello",
  },
];

type IItemEducation = {
  school: string;
  major: string;
  from: string;
  to: string;
};

export const listEducation: IItemEducation[] = [
  {
    school: "FPT Polytechnic",
    major: "Mobile Developer",
    from: "2021",
    to: "2023",
  },
];
