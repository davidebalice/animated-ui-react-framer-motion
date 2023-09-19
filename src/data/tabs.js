import React from "react";
import { PiMountainsFill } from "react-icons/pi";
import { FaTree,FaUmbrellaBeach } from "react-icons/fa";
import TabContent from "../components/Tab";

const tabs = [
  {
    title: "All nature",
    id: "Nature",
    icon: <FaTree />,
    color: "#5d5dff",
    content: TabContent,
  },
  {
    title: "Mountain",
    id: "Mountain",
    icon: <PiMountainsFill />,
    color: "#67bb67",
    content: TabContent,
  },
  {
    title: "Sea",
    id: "Sea",
    icon: <FaUmbrellaBeach />,
    color: "#63a7c7",
    content: TabContent,
  },
];

export default tabs;
