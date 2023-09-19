import React from "react";
import { PiMountainsFill } from "react-icons/pi";
import { FaTree, FaUmbrellaBeach } from "react-icons/fa";

const pages = [
  {
    title: "Home",
    icon: <FaTree />,
    root: "/",
  },
  {
    title: "Page 1",
    icon: <PiMountainsFill />,
    root: "/page1",
  },
];

export default pages;
