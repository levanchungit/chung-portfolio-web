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

type IItemWork = {
  id: number;
  title: string;
  numberCount: string;
  image: string;
};

export const itemWorks: IItemWork[] = [
  {
    id: 0,
    title: "TinVietSoft Warehouse Management",
    numberCount: "00",
    image:
      "https://res.cloudinary.com/dq7xnkfde/image/upload/v1688998284/2Smartphone_12_max_pro_and_three_ui_screen_mockups_kkzfov.jpg",
  },
  {
    id: 1,
    title: "Seven Shop",
    numberCount: "01",
    image:
      "https://res.cloudinary.com/dq7xnkfde/image/upload/v1688998372/2_hqaird.jpg",
  },
  {
    id: 2,
    title: "Eatery",
    numberCount: "02",
    image:
      "https://res.cloudinary.com/dq7xnkfde/image/upload/v1688998284/2Smartphone_12_max_pro_and_three_ui_screen_mockups_kkzfov.jpg",
  },
  {
    id: 3,
    title: "EU",
    numberCount: "03",
    image:
      "https://res.cloudinary.com/dq7xnkfde/image/upload/v1688998284/2Smartphone_12_max_pro_and_three_ui_screen_mockups_kkzfov.jpg",
  },
  {
    id: 4,
    title: "Super Mario",
    numberCount: "04",
    image:
      "https://res.cloudinary.com/dq7xnkfde/image/upload/v1688998284/2Smartphone_12_max_pro_and_three_ui_screen_mockups_kkzfov.jpg",
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
    where: "TinVietSoft Human Resource Management",
    position: "Full-stack Developer",
    from: "Feb 2023",
    to: "July 2023",
    description: "",
  },
  {
    where: "TinVietSoft human resource management",
    position: "Frontend Developer",
    from: "Feb 2023",
    to: "July 2023",
    description: "",
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
    school: "University of Information Technology",
    major: "Software Engineering",
    from: "2021",
    to: "2025",
  },
  {
    school: "University of Information Technology",
    major: "Software Engineering",
    from: "2021",
    to: "2025",
  },
];
