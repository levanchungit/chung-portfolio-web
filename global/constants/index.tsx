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
  index: number;
  title: string;
  numberCount: string;
  image: string;
  titlePosition?: string;
};

export const itemWorks: IItemWork[] = [
  {
    index: 0,
    title: "TinVietSoft Warehouse Management",
    numberCount: "00",
    image:
      "https://res.cloudinary.com/dq7xnkfde/image/upload/v1688998284/2Smartphone_12_max_pro_and_three_ui_screen_mockups_kkzfov.jpg",
    titlePosition: "left",
  },
  {
    index: 1,
    title: "Seven Shop",
    numberCount: "01",
    image:
      "https://res.cloudinary.com/dq7xnkfde/image/upload/v1688998372/2_hqaird.jpg",
    titlePosition: "right",
  },
  {
    index: 2,
    title: "Eatery",
    numberCount: "02",
    image:
      "https://res.cloudinary.com/dq7xnkfde/image/upload/v1688998284/2Smartphone_12_max_pro_and_three_ui_screen_mockups_kkzfov.jpg",
    titlePosition: "left",
  },
  {
    index: 3,
    title: "EU",
    numberCount: "03",
    image:
      "https://res.cloudinary.com/dq7xnkfde/image/upload/v1688998284/2Smartphone_12_max_pro_and_three_ui_screen_mockups_kkzfov.jpg",
    titlePosition: "right",
  },
  {
    index: 4,
    title: "Super Mario",
    numberCount: "04",
    image:
      "https://res.cloudinary.com/dq7xnkfde/image/upload/v1688998284/2Smartphone_12_max_pro_and_three_ui_screen_mockups_kkzfov.jpg",
    titlePosition: "left",
  },
];
