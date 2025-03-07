import "./ElementsIncluded.css";

import {
  FaAward,
  FaBook,
  FaBoxes,
  FaBullhorn,
  FaClipboard,
  FaExchangeAlt,
  FaGift,
  FaGlobe,
  FaHistory,
  FaLayerGroup,
  FaListOl,
  FaMedal,
  FaPlay,
  FaSync,
  FaTags,
  FaUsers,
  FaVideo,
  FaWindowMaximize,
} from "react-icons/fa";

import Marquee from "react-fast-marquee";
import React from "react";
import { Tag } from "antd";

const ElementsIncluded = () => {
  const tags = [
    [
      { text: "Brand", icon: <FaTags /> },
      { text: "Button", icon: <FaPlay /> },
      { text: "Badge", icon: <FaMedal /> },
      { text: "Card", icon: <FaClipboard /> },
      { text: "Call To Action", icon: <FaBullhorn /> },
      { text: "Counter", icon: <FaListOl /> },
      { text: "Category", icon: <FaBoxes /> },
    ],
    [
      { text: "Animated Button", icon: <FaPlay /> },
      { text: "Language Switcher", icon: <FaGlobe /> },
      { text: "Offer Banner", icon: <FaGift /> },
      { text: "Video Popup", icon: <FaVideo /> },
      { text: "Timeline", icon: <FaHistory /> },
      { text: "Carousel", icon: <FaSync /> },
    ],
    [
      { text: "Instructor Group", icon: <FaUsers /> },
      { text: "Offer Badge", icon: <FaAward /> },
      { text: "Exam Preparation", icon: <FaBook /> },
      { text: "Modal", icon: <FaWindowMaximize /> },
      { text: "Price Switcher", icon: <FaExchangeAlt /> },
      { text: "Step Box", icon: <FaLayerGroup /> },
    ],
  ];

  return (
    <div className="elements-container">
      <Tag
        bordered={false}
        //  color="blue"
        style={{
          color: "#2F57EF",
          fontSize: 14,
          marginBottom: 8,
          padding: "8px 16px",
          borderRadius: 126,
          fontWeight: 500,
        }}
        color="#E4E9FD">
        YOU DON'T NEED ANY EXTRA PLUGINS
      </Tag>
      <span className="elements-title">
        <span className="gradient-text">100+</span> Elements included.
      </span>
      <div style={{ background: "#FDFDFD" }} className="marquee-content">
        {tags.map((row, index) => (
          <Marquee
            key={index}
            gradient={false}
            speed={50}
            pauseOnHover
            autoFill={true}>
            {row.map((tag, i) => (
              <span key={i} className="tag" style={{ margin: "16px" }}>
                {tag.icon} {tag.text}
              </span>
            ))}
          </Marquee>
        ))}
      </div>
      <div style={{ marginTop: 40 }}>
        <span
          style={{
            textTransform: "uppercase",
            fontWeight: 600,
            color: "#B5B9C2",
          }}>
          Save Your Time and Money using ready elements
        </span>
      </div>
    </div>
  );
};

export default ElementsIncluded;
