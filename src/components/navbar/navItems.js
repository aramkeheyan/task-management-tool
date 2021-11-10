import * as Icons from "react-icons/fa";

export const navItems = [
  {
    id: 1,
    title: "Home",
    path: "./",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaHome />,
  },
  {
    id: 2,
    title: "About us",
    path: "./about-us",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaUsers />,
  },
  // {
  //   id: 2,
  //   title: "Reported by me",
  //   path: "./reported-by-me",
  //   nName: "nav-item",
  //   sName: "sidebar-item",
  //   icon: <Icons.FaBriefcase />,
  // },
  // {
  //   id: 3,
  //   title: "Assigned to me",
  //   path: "./assigned-to-me",
  //   nName: "nav-item",
  //   sName: "sidebar-item",
  //   icon: <Icons.FaBriefcase />,
  // },
  {
    id: 4,
    title: "Create",
    path: "./create",
    nName: "nav-item",
    sName: "sidebar-item",
    icon: <Icons.FaPlus />,
  },
];
