import React from "react";
import { PiMountainsFill } from "react-icons/pi";
import { FaTree, FaUmbrellaBeach } from "react-icons/fa";

const tabs = [
  {
    title: "All nature",
    id: "Nature",
    icon: <FaTree />,
    color: "#037d0c",
  },
  {
    title: "Mountain",
    id: "Mountain",
    icon: <PiMountainsFill />,
    color: "#b57300",
  },
  {
    title: "Sea",
    id: "Sea",
    icon: <FaUmbrellaBeach />,
    color: "#63a7c7",
  },
];

export default tabs;
