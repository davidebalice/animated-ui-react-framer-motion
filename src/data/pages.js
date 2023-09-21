import React from "react";
import { PiMountainsFill } from "react-icons/pi";
import { AiFillHome } from "react-icons/ai";
import { HiOutlineDocumentText } from "react-icons/hi";

const pages = [
  {
    title: "Home",
    icon: <AiFillHome />,
    root: "/",
  },
  {
    title: "Page 1",
    icon: <HiOutlineDocumentText />,
    root: "/page1",
  },
  {
    title: "Page 2",
    icon: <HiOutlineDocumentText />,
    root: "/page2",
  },
  {
    title: "Page 3",
    icon: <HiOutlineDocumentText />,
    root: "/page3",
  },
  {
    title: "Page 4",
    icon: <HiOutlineDocumentText />,
    root: "/page4",
  },
];

export default pages;
