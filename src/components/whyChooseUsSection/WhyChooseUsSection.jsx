import "./WhyChooseUsSection.css"; // Import CSS for styling

import { Card, Col, Row, Tag } from "antd";

import React from "react";
import sunShadeRight1 from "../../assets/sun-shadow-right-1.png";
import sunShadeRight2 from "../../assets/sun-shadow-right-2.png";
import sunShadeRight3 from "../../assets/sun-shadow-right-3.png";
import whyChoose01 from "../../assets/whyChoose01.png";
import whyChoose02 from "../../assets/whyChoose02.png";
import whyChoose03 from "../../assets/whyChoose03.png";

const features = [
  {
    subHeading: "For Online Courses",
    heading: "Create Your Online Course Website.",
    image: whyChoose01,
    subImage: sunShadeRight1,
    tags: [
      "Individual Instructor",
      "Multiple Instructors",
      "Marketplace",
      "Single Course",
      "Like Udemy",
      "& More...",
    ],
    gradient: "linear-gradient(135deg, #29C987, #30C8E3)",
  },
  {
    subHeading: "For University or School Education",
    heading: "Create Your Education Website.",
    image: whyChoose02,
    subImage: sunShadeRight2,
    tags: [
      "Individual Instructor",
      "Multiple Instructors",
      "Marketplace",
      "Single Course",
      "Like Udemy",
      "& More...",
    ],
    gradient: "linear-gradient(135deg, #FF662D, #FFA226)",
  },
  {
    subHeading: "For Professional Coaching",
    heading: "Create Your Coaching and Training Website.",
    image: whyChoose03,
    subImage: sunShadeRight3,
    tags: [
      "Individual Instructor",
      "Multiple Instructors",
      "Marketplace",
      "Single Course",
      "Like Udemy",
      "& More...",
    ],
    gradient: "linear-gradient(135deg, #31C3FF, #705BFF)",
  },
];

const WhyChooseUsSection = () => {
  return (
    <section className="why-choose-us">
      {/* Section Title */}
      <div className="title-container">
        <Tag
          bordered={false}
          color="#F6EBFC"
          style={{
            color: "#BC6CE8",
            fontSize: 14,
            marginBottom: 8,
            padding: "8px 16px",
            borderRadius: 126,
            fontWeight: 600,
          }}>
          ALL IN ONE THEME
        </Tag>
        <h2 className="section-title">Why Choose Histudy.</h2>
      </div>

      {/* Feature Cards */}
      <Row gutter={[16, 16]} className="feature-row">
        {features.map((feature, index) => (
          <Col xs={24} sm={12} md={8} key={index}>
            <Card
              className="feature-card"
              style={{ background: feature.gradient }}>
              <h4 className="sub-heading">{feature.subHeading}</h4>
              <div
                style={{
                  width: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}>
                <span className="why-choose-feature-heading">
                  {feature.heading}
                </span>
              </div>

              {/* Image Container */}
              <div className="image-container">
                <img
                  src={feature.image}
                  alt={feature.heading}
                  className="main-image"
                />
                <img
                  src={feature.subImage}
                  alt="Decoration"
                  className="sub-image"
                />
              </div>

              {/* Feature Tags */}
              <div className="feature-tags">
                {feature.tags.map((tag, tagIndex) => (
                  <Tag bordered={false} color="#d3d3d330" key={tagIndex}>
                    {tag}
                  </Tag>
                ))}
              </div>
            </Card>
          </Col>
        ))}
      </Row>
    </section>
  );
};

export default WhyChooseUsSection;
