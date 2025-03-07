import "./AdvancedFilters.css";

import {
  AppstoreOutlined,
  FilterOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
} from "@ant-design/icons";
import { Button, Tag } from "antd";
import React, { useState } from "react";

import lastSectionImage from "../../assets/last-section-image.jpg";

const AdvancedFilters = () => {
  // State to track selected button
  const [selectedButton, setSelectedButton] = useState("toggle");

  // Function to handle button selection
  const handleButtonClick = (buttonKey) => {
    setSelectedButton(buttonKey);
  };

  return (
    <div className="advanced-filters-container">
      {/* Left Side: Image */}
      <div className="image-section">
        <img src={lastSectionImage} alt="Filters" />
      </div>

      {/* Right Side: Filters UI */}
      <div className="filters-content">
        <Tag
          color="blue"
          // className="filter-tag"
          bordered={false}
          style={{
            color: "#2F57EF",
            fontSize: 14,
            marginBottom: 8,
            padding: "8px 16px",
            borderRadius: 126,
            fontWeight: 600,
            textTransform: "uppercase",
          }}>
          Advance Filter
        </Tag>
        <span className="filter-header">
          Find Courses with Advanced{" "}
          <span className="gradient-text">Filters</span> & Full Customization
        </span>
        <p className="filter-subtext">
          Quickly discover the perfect course with powerful, customizable
          filters tailored to your needs.
        </p>

        {/* Buttons Section */}
        <div className="button-group">
          <Button
            icon={<FilterOutlined />}
            type={selectedButton === "toggle" ? "primary" : "default"}
            className="advanced-filter-button"
            onClick={() => handleButtonClick("toggle")}>
            Filter with Toggle
          </Button>
          <Button
            icon={<AppstoreOutlined />}
            type={selectedButton === "tab" ? "primary" : "default"}
            className="advanced-filter-button"
            onClick={() => handleButtonClick("tab")}>
            Course with Tab
          </Button>
        </div>

        <div className="button-group">
          <Button
            icon={<LeftCircleOutlined />}
            type={selectedButton === "left" ? "primary" : "default"}
            className="advanced-filter-button"
            onClick={() => handleButtonClick("left")}>
            Left Sidebar
          </Button>
          <Button
            icon={<RightCircleOutlined />}
            type={selectedButton === "right" ? "primary" : "default"}
            className="advanced-filter-button"
            onClick={() => handleButtonClick("right")}>
            Right Sidebar
          </Button>
        </div>
      </div>
    </div>
  );
};

export default AdvancedFilters;
