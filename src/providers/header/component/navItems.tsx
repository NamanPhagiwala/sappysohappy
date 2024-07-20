export const navItems: NavItemsType[] = [
  {
    id: 1,
    name: "Home",
    route: "/",
  },
  {
    id: 2,
    name: "Contests",
    route: "/all-contests",
  },
  // {
  //   id: 3,
  //   name: "Contact Us",
  //   route: "/contact-us",
  // },
  {
    id: 3,
    name: "Business",
    route: "/business/collaborations",
  },
];

export type NavItemsType = {
  id: number;
  name: string;
  route: string;
};
