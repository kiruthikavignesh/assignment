import "./BannerSection.css"; // Import CSS for styling
import "./FeatureList.css"; // Import CSS

import { Button, Col, Divider, Row } from "antd";
import {
  PropertySafetyFilled,
  SpotifyOutlined,
  StarFilled,
} from "@ant-design/icons";

import AnimatedText from "../common/AnimatedText";
import React from "react";
import bannerImage from "../../assets/banner-group-image.png";
import icon01 from "../../assets/icons-01.png";
import icon02 from "../../assets/icons-02.png";
import icon03 from "../../assets/icons-03.png";
import icon04 from "../../assets/icons-04.png";

const features = [
  {
    image: icon01,
    title: "Fast Performance",
    subText:
      "Optimized for a smalled build size,\n faster dev compilation and dozens of\n other improvements.",
  },
  {
    image: icon02,
    title: "Perfect Responsive",
    subText:
      "Our theme is full perfect for all device.\n You can visit our Theme all devices \n easily.",
  },
  {
    image: icon03,
    title: "Fast & Friendly Support",
    subText:
      "We are provide 24 hours support for\n all clients. You can purchase without\n hesitation.",
  },
  {
    image: icon04,
    title: "Easy to Use",
    subText:
      "Create your own custom Theme or \n section by copying, pasting, and \nassembling.",
  },
];

const BannerSection = () => {
  const isMobile = window.innerWidth < 768;

  const renderStarRating = () => {
    return (
      <div style={{ width: "50%" }}>
        <div className="stars">
          {[...Array(5)].map((_, index) => (
            <StarFilled key={index} className="star-icon" />
          ))}
        </div>
        <p className="rating-text">20,000+ Trusted Customers</p>
      </div>
    );
  };

  const renderEnvatoRating = () => {
    return (
      <div style={{ width: "50%" }}>
        <div className="stars">
          <PropertySafetyFilled className="star-icon" />
        </div>
        <p className="rating-text">Envato Elite Author</p>
      </div>
    );
  };

  const renderLeftContainer = () => {
    const words = [
      "University.",
      "Awwwards.",
      "Instructor.",
      "Online Courses.",
      "Gym Coaching.",
      "School.",
      "Kinder garden.",
    ];

    return (
      <div className="text-container">
        {!isMobile && (
          <div
            style={{
              width: "100%",
              display: "flex",
              flexDirection: "row",
              paddingBottom: 16,
            }}>
            {renderStarRating()}
            {renderEnvatoRating()}
          </div>
        )}

        <div>
          <span
            style={{
              fontSize: isMobile ? 24 : 48,
              fontWeight: "bold",
              paddingTop: 48,
            }}>
            Have your dream
          </span>
        </div>
        <div
          style={{
            fontSize: isMobile ? 24 : 48,
            fontWeight: "bold",
            marginTop: 16,
            marginBottom: 8,
          }}>
          <span>site in minutes for</span>
        </div>
        <AnimatedText words={words} />
        <div
          style={{
            fontSize: isMobile ? 24 : 48,
            marginTop: 16,
          }}>
          <p>
            <span style={{ color: "gray" }}>The most </span>{" "}
            <span style={{ fontWeight: "bold" }}>powerful</span>{" "}
            <span style={{ color: "gray" }}>yet the</span>{" "}
            <span style={{ fontWeight: "bold" }}>easiest</span>{" "}
            <span style={{ color: "gray" }}>Theme ever.</span>
          </p>
        </div>
      </div>
    );
  };

  const renderRightContainer = () => {
    return (
      <div className="image-container">
        <img src={bannerImage} alt="Banner" />
      </div>
    );
  };

  const renderFeatureList = () => {
    return (
      <Row className="banner-feature-list">
        {features.map((feature, index) => (
          <Col key={index} xs={24} sm={12} md={6} className="feature-item">
            <img
              src={feature.image}
              alt={feature.title}
              className="feature-icon"
            />
            <h3 className="feature-title">{feature.title}</h3>
            <p className="feature-text">{feature.subText}</p>
          </Col>
        ))}
      </Row>
    );
  };

  return (
    <div>
      <section className="banner-section">
        {renderLeftContainer()}
        {renderRightContainer()}
      </section>
      {renderFeatureList()}
    </div>
  );
};

export default BannerSection;
