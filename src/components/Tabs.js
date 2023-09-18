import React, { useState, useEffect } from "react";
import classes from "classnames";
import { motion } from "framer-motion";
import Spacer from "./Spacer";
import Tab from "./Tab";

const tabVariant = {
  active: {
    width: "55%",
    transition: {
      type: "tween",
      duration: 0.4,
    },
  },
  inactive: {
    width: "15%",
    transition: {
      type: "tween",
      duration: 0.4,
    },
  },
};

const tabTextVariant = {
  active: {
    opacity: 1,
    x: 0,
    display: "block",
    transition: {
      type: "tween",
      duration: 0.3,
      delay: 0.3,
    },
  },
  inactive: {
    opacity: 0,
    x: -30,
    transition: {
      type: "tween",
      duration: 0.3,
      delay: 0.1,
    },
    transitionEnd: { display: "none" },
  },
};

const TabComponent = ({ tabs, defaultIndex = 0 }) => {
  const [activeTabIndex, setActiveTabIndex] = useState(defaultIndex);

  useEffect(() => {
    document.documentElement.style.setProperty(
      "--active-color",
      tabs[activeTabIndex].color
    );
  }, [activeTabIndex, tabs]);

  useEffect(() => {
    const tabFromHash = tabs.findIndex(
      (tab) => `#${tab.id}` === window.location.hash
    );
    setActiveTabIndex(tabFromHash !== -1 ? tabFromHash : defaultIndex);
  }, [tabs, defaultIndex]);

  const onTabClick = (index) => {
    setActiveTabIndex(index);
  };

  return (
    <div className="tabsWrapper">
      <motion.p
        className="text3"
        initial={{
          y: -250,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
          delay: 0.5,
        }}
      >
        Animated tabs
      </motion.p>

      <motion.p
        className="text4"
        initial={{
          y: -250,
          opacity: 0,
        }}
        animate={{
          y: 0,
          opacity: 1,
        }}
        exit={{
          y: 0,
          opacity: 1,
        }}
        transition={{
          duration: 0.4,
          delay: 0.7,
        }}
      >
        Click on icon to change tab with animation
      </motion.p>

      <div className="tabsContainer">
        <div className="tabsButtons">
          {tabs.map((tab, index) => (
            <motion.li
              key={tab.id}
              className={classes("tab", { active: activeTabIndex === index })}
              variants={tabVariant}
              animate={activeTabIndex === index ? "active" : "inactive"}
            >
              <a href={`#${tab.id}`} onClick={() => onTabClick(index)}>
                {tab.icon}
                <motion.span variants={tabTextVariant}>{tab.title}</motion.span>
              </a>
            </motion.li>
          ))}
        </div>
        {tabs.map((tab, index) => (
          <>
            <Tab
              key={tab.id}
              id={`${tab.id}`}
              active={activeTabIndex === index}
            />
          </>
        ))}
      </div>
      <Spacer height="100" />
    </div>
  );
};

export default TabComponent;
